import urllib.request
import re

snapshots = {
    "Oct 2022": "20221022213729",
    "Feb 2023": "20230209114429",
    "Jun 2023": "20230617214543"
}

patterns = ["/product/", "/products/", "/product-experience/", "/digital-adoption/"]

for name, ts in snapshots.items():
    url = f"https://web.archive.org/web/{ts}/https://www.pendo.io/"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
            # Extract all href attributes
            hrefs = re.findall(r'href="([^"]+)"', html)
            
            print(f"\n--- {name} ({ts}) ---")
            found = set()
            for href in hrefs:
                if any(p in href for p in patterns):
                    # Clean up wayback prefix if present
                    clean_url = re.sub(r'^https://web\.archive\.org/web/\d+(?:im_|js_|cs_)?/', '', href)
                    found.add(clean_url)
            
            for f in sorted(list(found)):
                print(f)
                
    except Exception as e:
        print(f"Error fetching {name}: {e}")

