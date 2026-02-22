import sys
import json
import urllib.request

sys.stdout.reconfigure(line_buffering=True)

API_KEY = "sk_"

for header_name, header_val in [
    ("xi-api-key", API_KEY),
    ("Authorization", f"Bearer {API_KEY}"),
]:
    req = urllib.request.Request(
        "https://api.elevenlabs.io/v1/voices",
        headers={header_name: header_val}
    )
    try:
        resp = urllib.request.urlopen(req)
        data = json.loads(resp.read())
        print(f"SUCCESS with header: {header_name}")
        for v in data["voices"]:
            labels = v.get("labels", {})
            lang = labels.get("language", "")
            print(f"  {v['voice_id']}  |  {v['name']}  |  {lang}")
        break
    except Exception as e:
        print(f"FAILED with {header_name}: {e}")

