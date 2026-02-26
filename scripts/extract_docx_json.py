import docx
import json
import os

doc = docx.Document(r'C:\Users\aman_\Downloads\KNM_InteractieWaardenNormen_Scripts.docx')

slides = []
slide_counter = 1

print("Extracting sentences from tables...")

for table in doc.tables:
    # Skip header row (index 0)
    if len(table.rows) > 1:
        for row in table.rows[1:]:
            nl_text = row.cells[0].text.strip()
            en_text = row.cells[1].text.strip()
            
            if nl_text and en_text:
                slide = {
                    "id": f"wn{slide_counter}",
                    "nl": nl_text,
                    "en": en_text,
                    "audio": f"../assets/audio/knm/waarden/wn{slide_counter}.mp3",
                    "image": "../assets/images/knm/wn_waarden.png" # Default, will refine
                }
                slides.append(slide)
                slide_counter += 1

print(f"Extracted {len(slides)} valid slides.")

output_file = r"C:\Learning\Dutch\dutch-writing-a2\js\knm\waarden_extracted.json"
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(slides, f, indent=4, ensure_ascii=False)
    
print(f"Saved JSON to {output_file}")
