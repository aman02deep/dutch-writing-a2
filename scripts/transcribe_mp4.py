import os
from moviepy import VideoFileClip

folder = r"C:\Learning\Dutch\Dutch A2 Material-001,002\Dutch A2 Material 1&2\KNM inburgering subscription\1. Wonen"

for f in os.listdir(folder):
    if f.endswith(".mp4"):
        video_path = os.path.join(folder, f)
        clip = VideoFileClip(video_path)
        duration = clip.duration
        mins = int(duration // 60)
        secs = int(duration % 60)
        print(f"{f}: {mins}m {secs}s")
        clip.close()
