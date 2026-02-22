
import re
import sys
import time
from pathlib import Path
from gtts import gTTS

# Force unbuffered output
sys.stdout.reconfigure(line_buffering=True)

# Configuration
SOURCE_FILE = Path("js/writing/sentence-bank-data.js")
OUTPUT_DIR = Path("assets/audio/sentence-bank")
LANG = "nl"  # Dutch


def parse_sentence_bank(file_path):
    """Parses sentence-bank-data.js to extract id + nl text for each entry."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    pattern = re.compile(
        r'\{\s*id:\s*(\d+)\s*,\s*cat:\s*"[^"]*"\s*,\s*nl:\s*"([^"]+)"',
        re.DOTALL
    )
    entries = []
    for match in pattern.finditer(content):
        entry_id = int(match.group(1))
        nl_text = match.group(2)
        entries.append({"id": entry_id, "nl": nl_text})

    return entries


def generate_audio(text, output_file, retries=3):
    """Generate Dutch audio using gTTS (Google TTS)."""
    for attempt in range(retries):
        try:
            tts = gTTS(text=text, lang=LANG, slow=False)
            tts.save(str(output_file))
            return True
        except Exception as e:
            print(f"  Attempt {attempt + 1} failed: {e}")
            if attempt < retries - 1:
                time.sleep(3)
    return False


def main():
    print(f"Parsing {SOURCE_FILE}...")
    entries = parse_sentence_bank(SOURCE_FILE)
    print(f"Found {len(entries)} sentence bank entries to generate audio for.")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    failed = []

    for entry in entries:
        entry_id = entry["id"]
        nl_text = entry["nl"]
        file_path = OUTPUT_DIR / f"{entry_id}.mp3"

        # Skip if already generated and reasonably sized
        if file_path.exists() and file_path.stat().st_size > 2000:
            print(f"  Skipping [{entry_id}] (exists)")
            continue

        print(f"  Generating [{entry_id}]: {nl_text[:60]}")
        success = generate_audio(nl_text, file_path)

        if success:
            size = file_path.stat().st_size
            print(f"  OK: Saved ({size} bytes)")
        else:
            print(f"  FAILED: {nl_text}")
            failed.append(entry_id)

        # Small pause to be polite to Google's servers
        time.sleep(0.5)

    print(f"\nDone! {len(entries) - len(failed)}/{len(entries)} files generated.")
    if failed:
        print(f"Failed IDs (re-run to retry): {failed}")
    print(f"Files saved to: {OUTPUT_DIR.resolve()}")


if __name__ == "__main__":
    main()
