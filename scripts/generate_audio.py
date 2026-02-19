
import re
import os
import asyncio
import aiohttp
import urllib.parse
from pathlib import Path

# Configuration
# Paths are relative to the project root (CWD)
SOURCE_FILE = Path("js/vocabulary/progressive-dutch.js")
OUTPUT_DIR = Path("assets/audio")

# Pollinations Audio Configuration
# Model: openai-audio
# Voices: alloy, echo, fable, onyx, nova, shimmer
VOICE = "nova" # Female, natural

def parse_js_file(file_path):
    """
    Parses the JS file to extract lessons and exercises.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    lessons = []
    lesson_blocks = re.split(r'id:\s*(\d+),', content)
    
    for i in range(1, len(lesson_blocks), 2):
        lesson_id = int(lesson_blocks[i])
        block_content = lesson_blocks[i+1]
        
        matches = re.finditer(r'dutch:\s*"([^"]+)"', block_content)
        
        exercises = []
        for match in matches:
            exercises.append(match.group(1))
            
        lessons.append({
            "id": lesson_id,
            "exercises": exercises
        })
        
    return lessons

async def generate_pollinations_audio(session, text, output_file):
    """Generates audio using Pollinations.ai API (OpenAI Audio)"""
    
    encoded_text = urllib.parse.quote(text)
    url = f"https://text.pollinations.ai/{encoded_text}?model=openai-audio&voice={VOICE}&seed={os.urandom(2).hex()}" # Add seed to avoid cache issues
    
    retries = 5
    delay = 2

    for attempt in range(retries):
        try:
            async with session.get(url) as response:
                if response.status == 200:
                    content = await response.read()
                    # Check if content is valid MP3 (simple check)
                    if len(content) < 1000:
                        print(f"  Warning: File too small ({len(content)} bytes), checking content...")
                        # content might be json error
                        if b"error" in content.lower() or b"rate limit" in content.lower():
                             print(f"  Got error in content body: {content}")
                             await asyncio.sleep(delay)
                             delay *= 2
                             continue

                    with open(output_file, 'wb') as f:
                        f.write(content)
                    return True
                
                elif response.status == 429:
                    print(f"  Rate Limit (429). Waiting {delay}s...")
                    await asyncio.sleep(delay)
                    delay *= 2 # Exponential backoff
                else:
                    print(f"  Error {response.status}: {await response.text()}")
                    await asyncio.sleep(delay)  # Wait even on other errors
                    return False
        except Exception as e:
            print(f"  Exception: {e}")
            await asyncio.sleep(delay)
            delay *= 2
            
    return False

async def main():
    print(f"Parsing {SOURCE_FILE}...")
    lessons = parse_js_file(SOURCE_FILE)
    print(f"Found {len(lessons)} lessons.")

    total_exercises = sum(len(l['exercises']) for l in lessons)
    print(f"Found {total_exercises} total exercises to generate via Pollinations.")

    if not OUTPUT_DIR.exists():
        OUTPUT_DIR.mkdir(parents=True)

    async with aiohttp.ClientSession() as session:
        for lesson in lessons:
            lesson_id = lesson['id']
            exercises = lesson['exercises']
            
            lesson_dir = OUTPUT_DIR / f"lesson-{lesson_id}"
            if not lesson_dir.exists():
                lesson_dir.mkdir()
                
            print(f"Processing Lesson {lesson_id} ({len(exercises)} exercises)...")
            
            for index, text in enumerate(exercises):
                file_path = lesson_dir / f"ex-{index}.mp3"
                
                # Check file size (overwrite if small/error)
                if file_path.exists() and file_path.stat().st_size > 5000:
                     # print(f"  Skipping {file_path} (exists)")
                     continue 

                # print(f"  Generating: {text} -> {file_path}")
                success = await generate_pollinations_audio(session, text, str(file_path))
                
                if not success:
                    print(f"  FAILED to generate: {text}")
                
                # Moderate delay between requests to avoid slamming the free API
                await asyncio.sleep(3)

    print("Audio generation complete!")

if __name__ == "__main__":
    asyncio.run(main())
