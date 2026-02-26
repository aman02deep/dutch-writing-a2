import os
import speech_recognition as sr
from moviepy import VideoFileClip
import math

# Configuration
folder = r"C:\Learning\Dutch\Dutch A2 Material-001,002\Dutch A2 Material 1&2\KNM inburgering subscription\3. Interactie, waarden en normen"
output_file = r"C:\Users\aman_\.gemini\antigravity\brain\0bfc68a9-1bf2-4762-b068-5cae5ae8aefa\interactie_raw_video_transcript.md"
temp_audio = "temp_chunk.wav"

r = sr.Recognizer()

with open(output_file, 'w', encoding='utf-8') as out_f:
    out_f.write("# Interactie, Waarden en Normen Video Transcripts\n\n")

for filename in sorted(os.listdir(folder)):
    if not filename.endswith(".mp4"):
        continue
    
    video_path = os.path.join(folder, filename)
    print(f"\nProcessing: {filename}")
    
    with open(output_file, 'a', encoding='utf-8') as out_f:
        out_f.write(f"\n\n=====================\nVideo: {filename}\n=====================\n")
        
    try:
        video = VideoFileClip(video_path)
        duration = video.duration
        chunk_duration = 30 # 30 seconds chunks for better accuracy with free API
        num_chunks = math.ceil(duration / chunk_duration)
        
        for i in range(num_chunks):
            start_time = i * chunk_duration
            end_time = min((i + 1) * chunk_duration, duration)
            
            print(f"  Transcribing chunk {i+1}/{num_chunks} ({start_time}s - {end_time}s)...")
            
            # Extract subclip
            subclip = video.subclipped(start_time, end_time)
            subclip.audio.write_audiofile(temp_audio, codec='pcm_s16le')
            
            # Transcribe
            with sr.AudioFile(temp_audio) as source:
                audio_data = r.record(source)
                try:
                    text = r.recognize_google(audio_data, language="nl-NL")
                    with open(output_file, 'a', encoding='utf-8') as out_f:
                        out_f.write(text + " ")
                except sr.UnknownValueError:
                    print("    (Unintelligible / Silence)")
                except sr.RequestError as e:
                    print(f"    API Error: {e}")
                    
            if os.path.exists(temp_audio):
                os.remove(temp_audio)
                
        video.close()
        
    except Exception as e:
        print(f"Error processing {filename}: {e}")

print(f"\nFinished! Transcripts saved to {output_file}")
