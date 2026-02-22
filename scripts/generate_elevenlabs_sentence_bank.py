import sys
import json
import time
import urllib.request
from pathlib import Path
import re

# Force unbuffered output
sys.stdout.reconfigure(line_buffering=True)

API_KEY = "sk_"
VOICE_ID = "Xb7hH8MSUJpSbSDYk0k2"  # Alice - Clear, Engaging Educator
MODEL_ID = "eleven_multilingual_v2" # Supports Dutch

SOURCE_FILE = Path("js/writing/sentence-bank-data.js")
OUTPUT_DIR = Path("assets/audio/sentence-bank")

def parse_sentence_bank(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    pattern = re.compile(
        r'\{\s*id:\s*(\d+)\s*,\s*cat:\s*"[^"]*"\s*,\s*nl:\s*"([^"]+)"',
        re.DOTALL
    )
    entries = []
    for match in pattern.finditer(content):
        entries.append({"id": int(match.group(1)), "nl": match.group(2)})
    return entries

def generate_audio(text, output_file, retries=3):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": API_KEY
    }
    
    data = {
        "text": text,
        "model_id": MODEL_ID,
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75,
            "style": 0.0,
            "use_speaker_boost": True
        }
    }
    
    req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers=headers, method="POST")
    
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req) as response:
                with open(output_file, 'wb') as f:
                    f.write(response.read())
            return True
        except Exception as e:
            print(f"  Attempt {attempt + 1} failed: {e}")
            if hasattr(e, 'read'):
                print(f"  Details: {e.read().decode('utf-8')}")
            if attempt < retries - 1:
                time.sleep(2)
    return False

def main():
    print(f"Parsing {SOURCE_FILE}...")
    entries = parse_sentence_bank(SOURCE_FILE)
    print(f"Found {len(entries)} phrases.")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    failed = []

    for entry in entries:
        entry_id = entry["id"]
        nl_text = entry["nl"]
        file_path = OUTPUT_DIR / f"{entry_id}.mp3"

        # Generate unconditionally (overwrite gTTS files)
        print(f"  Generating [{entry_id}]: {nl_text[:60]}")
        success = generate_audio(nl_text, file_path)

        if success:
            size = file_path.stat().st_size
            print(f"  OK: Saved ({size} bytes)")
        else:
            print(f"  FAILED: {nl_text}")
            failed.append(entry_id)

    print(f"\nDone! {len(entries) - len(failed)}/{len(entries)} files generated with ElevenLabs.")

if __name__ == "__main__":
    main()
