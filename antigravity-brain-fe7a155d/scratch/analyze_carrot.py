import urllib.request
import re
import json
from html.parser import HTMLParser

class CarrotParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.classes = set()
        self.data_attrs = set()
        self.ids = set()
        self.roles = set()
        self.links = []
        self.scripts = []
        self.metas = []
        self.in_title = False
        self.in_h1 = False
        self.in_h2 = False
        self.in_h3 = False
        self.current_text = []
        self.title = ""
        self.h1s = []
        self.h2s = []
        self.h3s = []
        self.current_a = None
        self.current_a_class = ""
        self.wf_page = None
        self.wf_site = None

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        
        if tag == "html":
            self.wf_page = attr_dict.get("data-wf-page")
            self.wf_site = attr_dict.get("data-wf-site")

        if tag == "title":
            self.in_title = True
        elif tag == "h1":
            self.in_h1 = True
            self.current_text = []
        elif tag == "h2":
            self.in_h2 = True
            self.current_text = []
        elif tag == "h3":
            self.in_h3 = True
            self.current_text = []
        elif tag == "script":
            if "src" in attr_dict:
                self.scripts.append(attr_dict["src"])
        elif tag == "meta":
            self.metas.append(attr_dict)
        elif tag == "a" and "href" in attr_dict:
            self.current_a = attr_dict.get("href", "")
            self.current_a_class = attr_dict.get("class", "")

        if "class" in attr_dict:
            for c in attr_dict["class"].split():
                self.classes.add(c)
        if "id" in attr_dict:
            self.ids.add(attr_dict["id"])
        if "role" in attr_dict:
            self.roles.add(attr_dict["role"])
            
        for k in attr_dict:
            if k.startswith("data-"):
                self.data_attrs.add(k)

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        elif tag == "h1":
            self.in_h1 = False
            self.h1s.append(" ".join(self.current_text).strip())
            self.current_text = []
        elif tag == "h2":
            self.in_h2 = False
            self.h2s.append(" ".join(self.current_text).strip())
            self.current_text = []
        elif tag == "h3":
            self.in_h3 = False
            self.h3s.append(" ".join(self.current_text).strip())
            self.current_text = []
        elif tag == "a" and self.current_a:
            text = " ".join(self.current_text).strip()
            self.links.append((self.current_a, text, self.current_a_class))
            self.current_a = None
            self.current_text = []

    def handle_data(self, data):
        if self.in_title:
            self.title += data.strip()
        elif self.in_h1 or self.in_h2 or self.in_h3 or self.current_a:
            self.current_text.append(data.strip())

snapshots = [
    ("Pre-Start (Jun 2021)", "20210624233831", "https://web.archive.org/web/20210624233831/https://www.get-carrot.com/"),
    ("Oct 2021", "20211018211257", "https://web.archive.org/web/20211018211257/https://www.get-carrot.com/"),
    ("Mar 2022", "20220320053713", "https://web.archive.org/web/20220320053713/https://www.get-carrot.com/"),
    ("Jul 2022", "20220727231306", "https://web.archive.org/web/20220727231306/https://www.get-carrot.com/")
]

results = {}

for label, ts, url in snapshots:
    print(f"\n================ Fetching {label} ({url}) ================")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=25) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            parser = CarrotParser()
            parser.feed(html)
            
            # Extract meta
            meta_desc = ""
            for m in parser.metas:
                if m.get("name") == "description" or m.get("property") == "og:description":
                    meta_desc = m.get("content", "")
                    
            # MarTech checks
            martech = {}
            if "webflow" in html.lower():
                martech["Webflow"] = "Present"
            if "munchkin" in html.lower() or "marketo" in html.lower():
                m_match = re.search(r'munchkinId["\']?\s*:\s*["\']([^"\']+)["\']', html)
                martech["Marketo"] = m_match.group(1) if m_match else "Present"
            if "gtm-" in html.lower():
                gtm_m = re.findall(r'GTM-[A-Z0-9]+', html)
                martech["GTM"] = list(set(gtm_m))
            if "segment" in html.lower() or "analytics.js" in html.lower():
                martech["Segment"] = "Present"
            if "greenhouse" in html.lower() or "grnh.se" in html.lower():
                martech["Greenhouse"] = "Present"
            if "hotjar" in html.lower():
                martech["Hotjar"] = "Present"
            if "cookiepro" in html.lower() or "onetrust" in html.lower():
                martech["CookiePro/OneTrust"] = "Present"
            if "qualified" in html.lower():
                martech["Qualified"] = "Present"
            if "hubspot" in html.lower():
                martech["HubSpot"] = "Present"

            # Parse Internal Links
            internal_links = set()
            nav_links = []
            footer_links = []
            
            for href, text, cls in parser.links:
                clean_href = re.sub(r'^/web/\d+[^/]*https?://[^/]+', '', href)
                clean_href = re.sub(r'^https?://(?:www\.)?get-carrot\.com', '', clean_href)
                clean_href = re.sub(r'^https?://(?:www\.)?carrotfertility\.com', '', clean_href)
                
                if clean_href.startswith('/') and not clean_href.startswith('//'):
                    internal_links.add(clean_href)
                    if any(k in cls.lower() for k in ['nav', 'menu', 'dropdown']):
                        nav_links.append((clean_href, text))
                    elif any(k in cls.lower() for k in ['footer']):
                        footer_links.append((clean_href, text))
                    else:
                        nav_links.append((clean_href, text))

            # CMS Collections detected
            cms_collections = set()
            for href in internal_links:
                parts = [p for p in href.split('/') if p]
                if len(parts) >= 2:
                    cms_collections.add(f"/{parts[0]}/*")

            results[label] = {
                "wf_page": parser.wf_page,
                "wf_site": parser.wf_site,
                "title": parser.title,
                "meta_description": meta_desc,
                "h1s": [h for h in parser.h1s if h],
                "h2s": [h for h in parser.h2s if h],
                "h3s": [h for h in parser.h3s if h][:10],
                "martech": martech,
                "external_scripts": [s for s in parser.scripts if not "archive.org" in s],
                "data_attributes": list(parser.data_attrs),
                "roles": list(parser.roles),
                "component_classes": sorted([c for c in parser.classes if not c.startswith('w-')])[:50],
                "webflow_native_classes": sorted([c for c in parser.classes if c.startswith('w-')]),
                "unique_internal_routes": sorted(list(internal_links)),
                "cms_collections": sorted(list(cms_collections)),
                "sample_links": parser.links[:20]
            }
    except Exception as e:
        print(f"Error {label}: {e}")

with open("scratch/carrot_analysis.json", "w") as f:
    json.dump(results, f, indent=2)

print("\n=== CARROT ANALYSIS COMPLETE ===")
for k in results:
    print(f"\n[{k}]")
    print(f"  Title: {results[k]['title']}")
    print(f"  H1: {results[k]['h1s']}")
    print(f"  MarTech: {results[k]['martech']}")
    print(f"  Total Internal Routes Found: {len(results[k]['unique_internal_routes'])}")
    print(f"  CMS Collections: {results[k]['cms_collections']}")
    print(f"  Sample Routes: {results[k]['unique_internal_routes'][:10]}")
