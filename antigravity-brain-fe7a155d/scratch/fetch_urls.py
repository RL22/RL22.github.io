import urllib.request
import json
import re
from urllib.parse import urlparse

def get_urls(date_prefix):
    url = f"http://web.archive.org/cdx/search/cdx?url=pendo.io/*&output=json&from={date_prefix}&to={date_prefix}&limit=10000&collapse=urlkey&filter=statuscode:200"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            if not data or len(data) <= 1:
                return []
            
            # First row is headers: ["urlkey", "timestamp", "original", "mimetype", "statuscode", "digest", "length"]
            headers = data[0]
            original_idx = headers.index("original")
            
            urls = []
            for row in data[1:]:
                original = row[original_idx]
                parsed = urlparse(original)
                path = parsed.path.lower()
                
                # Check if it matches any of the requested paths
                if any(x in path for x in ["/product/", "/products/", "/product-experience/", "/digital-adoption/"]):
                    urls.append(original)
            return sorted(list(set(urls)))
    except Exception as e:
        print(f"Error fetching for {date_prefix}: {e}")
        return []

print("--- OCT 2022 ---")
oct_urls = get_urls("202210")
for u in oct_urls:
    print(u)
    
print("\n--- JUNE 2023 ---")
jun_urls = get_urls("202306")
for u in jun_urls:
    print(u)
