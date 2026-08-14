import urllib.request
import re
from urllib.parse import urlparse
import json

snapshots = {
    "Oct 2022": "20221022213729",
    "Feb 2023": "20230209114429",
    "Jun 2023": "20230617214543"
}

prefixes = [
    "/product-experience",
    "/digital-adoption",
    "/product",
    "/products"
]

results = {}

for name, ts in snapshots.items():
    url = f"https://web.archive.org/web/{ts}/https://www.pendo.io/"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8', errors='ignore')
            
            # Find all links
            raw_links = re.findall(r'href=["\']([^"\']+)["\']', html)
            
            cleaned_paths = set()
            for l in raw_links:
                # Remove wayback prefix
                clean = re.sub(r'^https?://web\.archive\.org/web/\d+(?:im_|js_|cs_)?/', '', l)
                clean = re.sub(r'^https?://(?:www\.)?pendo\.io', '', clean)
                # Parse path
                parsed = urlparse(clean)
                path = parsed.path
                if not path:
                    continue
                # Normalize trailing slash
                if not path.endswith('/'):
                    path += '/'
                # Filter for our key sections
                for p in prefixes:
                    if path.startswith(p + '/') or path == p + '/':
                        cleaned_paths.add(path)
                        break
            
            results[name] = sorted(list(cleaned_paths))
    except Exception as e:
        results[name] = f"Error: {e}"

# Also let's check subpage links if we fetch /product/ /product-experience/ /digital-adoption/
subpage_urls = [
    ("Oct 2022 - Product Experience", "https://web.archive.org/web/20221022213729/https://www.pendo.io/product-experience/"),
    ("Jun 2023 - Product Adopt", "https://web.archive.org/web/20230617214543/https://www.pendo.io/product/adopt/")
]

subpage_results = {}
for label, u in subpage_urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8', errors='ignore')
            raw_links = re.findall(r'href=["\']([^"\']+)["\']', html)
            cleaned = set()
            for l in raw_links:
                clean = re.sub(r'^https?://web\.archive\.org/web/\d+(?:im_|js_|cs_)?/', '', l)
                clean = re.sub(r'^https?://(?:www\.)?pendo\.io', '', clean)
                parsed = urlparse(clean)
                path = parsed.path
                if not path:
                    continue
                if not path.endswith('/'):
                    path += '/'
                for p in prefixes:
                    if path.startswith(p + '/') or path == p + '/':
                        cleaned.add(path)
            subpage_results[label] = sorted(list(cleaned))
    except Exception as e:
        subpage_results[label] = f"Error: {e}"

print(json.dumps({"homepage_snapshots": results, "subpage_snapshots": subpage_results}, indent=2))
