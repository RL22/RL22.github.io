import urllib.request
import re
import json

urls = [
    # 1. Master Lead Gen / CRO
    ("Master_LeadGen_HV", "https://web.archive.org/web/20230328030205/https://go.pendo.io/demo-pendo-products-hv.html"),
    ("Master_LeadGen_HVA", "https://web.archive.org/web/20231201054937/https://go.pendo.io/demo-pendo-products-hva.html"),
    ("Master_LeadGen_Onboarding", "https://web.archive.org/web/20230309012822/https://go.pendo.io/demo-onboarding-hv.html"),
    ("Master_LeadGen_UTM_Growth", "https://web.archive.org/web/20230331224309/https://go.pendo.io/demo-pendo.html?utm_lp_headline=growth"),
    
    # 2. Thank You
    ("ThankYou_Template", "https://web.archive.org/web/20230328030205/https://go.pendo.io/how-i-pendo-demo-thanks.html"),
    
    # 3. ROI Calculator
    ("ROI_Retention", "https://web.archive.org/web/20230529000757/https://go.pendo.io/roi-calculator-customer-retention.html"),
    ("ROI_Support", "https://web.archive.org/web/20230530230949/https://go.pendo.io/roi-calculator-customer-support.html"),
    
    # 4. Events / Webinars / Downloads
    ("Webinar_Register", "https://web.archive.org/web/20230515194402/https://go.pendo.io/fighting-churn-webinar-register/"),
    ("Ebook_Download", "https://web.archive.org/web/20231201071706/https://go.pendo.io/prodops-ebook"),
    ("Pendomonium_Register", "https://web.archive.org/web/20231201072126/https://go.pendo.io/pendomonium-2024-updates-register.html")
]

results = {}

for name, url in urls:
    print(f"\nFetching {name}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=25) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
            # 1. Marketo Template Meta Variables
            mkto_metas = re.findall(r'<meta\s+class=["\'](mkto[A-Za-z0-9]+)["\']\s+id=["\']([^"\']+)["\']\s+mktoName=["\']([^"\']+)["\']([^>]*)>', html, re.I)
            
            # 2. Marketo Editable Elements
            mkto_elements = re.findall(r'<(?:div|span|section|header|footer)[^>]+class=["\'][^"\']*(mkto[A-Za-z0-9]+)[^"\']*["\'][^>]+id=["\']([^"\']+)["\'][^>]*mktoName=["\']([^"\']+)["\'][^>]*>', html, re.I)
            
            # 3. Form ID & Marketo Munchkin
            form_ids = re.findall(r'MktoForms2\.loadForm\([^,]+,\s*["\']([^"\']+)["\'],\s*([0-9]+)\)', html)
            munchkin = re.findall(r'munchkinId["\']?\s*:\s*["\']([^"\']+)["\']', html)
            
            # 4. Dynamic Headline / UTM scripts
            utm_scripts = []
            for s in re.findall(r'<script[^>]*>(.*?)</script>', html, re.I | re.S):
                if any(k in s for k in ['utm_lp_headline', 'getUrlParameter', 'URLSearchParams', 'Mutiny', 'mutiny', 'calculator', 'calc']):
                    utm_scripts.append(s.strip())
            
            # 5. External CSS & Fonts
            css_links = re.findall(r'<link[^>]+rel=["\']stylesheet["\'][^>]+href=["\']([^"\']+)["\']', html, re.I)
            
            # 6. Page Structure (H1, H2, Form container, etc.)
            h1s = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.I | re.S)]
            h2s = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.I | re.S)]

            results[name] = {
                "url": url,
                "mkto_metas": [{"class": m[0], "id": m[1], "mktoName": m[2], "extra": m[3]} for m in mkto_metas],
                "mkto_elements": [{"class": e[0], "id": e[1], "mktoName": e[2]} for e in mkto_elements],
                "form_ids": form_ids,
                "munchkin": list(set(munchkin)),
                "h1s": h1s,
                "h2s": h2s[:5],
                "css_links": [c for c in css_links if not "archive.org" in c],
                "utm_custom_scripts": utm_scripts[:3],
                "raw_html_snippet": html[:1500]
            }
            print(f"  Success: {len(mkto_metas)} mkto metas, {len(mkto_elements)} mkto containers, Form: {form_ids}")
    except Exception as e:
        print(f"  Error: {e}")

with open("scratch/mkto_templates_analysis.json", "w") as f:
    json.dump(results, f, indent=2)

print("\nSaved to scratch/mkto_templates_analysis.json")
