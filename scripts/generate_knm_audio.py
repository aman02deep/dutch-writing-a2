import sys
import json
import time
import urllib.request
from pathlib import Path

# Force unbuffered output
sys.stdout.reconfigure(line_buffering=True)

API_KEY = "sk_f242e76778fc7d31e069d8745bc60bbade3c595710e8b75c"
VOICE_ID = "Xb7hH8MSUJpSbSDYk0k2"  # Alice - Clear, Engaging Educator
MODEL_ID = "eleven_multilingual_v2" # Supports Dutch

OUTPUT_DIR = Path("assets/audio/knm/waarden")

JSON_FILE = Path("js/knm/waarden_extracted.json")

print(f"Loading data from {JSON_FILE}...")
with open(JSON_FILE, "r", encoding="utf-8") as f:
    lesson_lines = json.load(f)

print(f"Found {len(lesson_lines)} sentences to generate.")

import subprocess

def generate_audio_edge(text, output_file):
    try:
        # edge-tts --voice nl-NL-FennaNeural --text "Hello" --write-media output.mp3
        cmd = ["edge-tts", "--voice", "nl-NL-FennaNeural", "--text", text, "--write-media", str(output_file)]
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"  FAILED: {e.stderr}")
        return False
    except Exception as e:
        print(f"  FAILED: {e}")
        return False

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    failed = []

    for entry in lesson_lines:
        entry_id = entry["id"]
        nl_text = entry["nl"]
        file_path = OUTPUT_DIR / f"{entry_id}.mp3"

        if file_path.exists():
            continue

        print(f"Generating (Edge TTS) [{entry_id}]: {nl_text[:60]}")
        success = generate_audio_edge(nl_text, file_path)

        if success:
            size = file_path.stat().st_size
            print(f"  OK: Saved ({size} bytes)")
        else:
            print(f"  FAILED: {nl_text}")
            failed.append(entry_id)

    print(f"\nDone! Generated all audio files using Edge TTS.")

if __name__ == "__main__":
    main()
