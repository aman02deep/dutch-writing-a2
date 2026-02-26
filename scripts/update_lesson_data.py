import json
import os

print("Applying image mapping and updating Javascript lesson file...")

def map_wonen_images(data):
    for item in data:
        text = item["nl"].lower() + " " + item["en"].lower()
        if any(word in text for word in ["afval", "glasbak", "plastic", "chemisch", "boete", "garbage", "trash", "waste", "gft"]):
            item["image"] = "../assets/images/knm/wonen_afval.png"
        elif any(word in text for word in ["energie", "gas", "elektriciteit", "stroom", "verwarming", "wasmachine", "energy", "electricity"]):
            item["image"] = "../assets/images/knm/wonen_energie.png"
        elif "verzekering" in text or "insurance" in text:
            item["image"] = "../assets/images/knm/wonen_verzekering.png"
        elif any(word in text for word in ["hypotheek", "bank", "kopen", "notaris", "mortgage", "buy"]):
            item["image"] = "../assets/images/knm/wonen_hypotheek.png"
        elif any(word in text for word in ["huurcontract", "huurovereenkomst", "reparatie", "toeslag", "contract", "allowance", "repair"]):
            item["image"] = "../assets/images/knm/wonen_huurovereenkomst.png"
        elif any(word in text for word in ["huren", "vrije sector", "woningbouwvereniging", "rent"]):
            item["image"] = "../assets/images/knm/wonen_sleutel.png"
        else:
            item["image"] = "../assets/images/knm/wonen_huis.png"
    return data

def map_werk_images(data):
    for item in data:
        text = item["nl"].lower() + " " + item["en"].lower()
        if any(word in text for word in ["sollicitatie", "solliciteert", "cv", "interview", "application", "vacature", "job ad"]):
            item["image"] = "../assets/images/knm/wi_sollicitatie.png"
        elif any(word in text for word in ["contract", "arbeidscontract", "proeftijd", "ontslag", "handtekening", "agreement", "cao"]):
            item["image"] = "../assets/images/knm/wi_contract.png"
        elif any(word in text for word in ["salaris", "belasting", "premie", "uitkering", "uwv", "geld", "financieren", "duo", "bijstand", "salary", "tax", "income"]):
            item["image"] = "../assets/images/knm/wi_geld.png"
        elif any(word in text for word in ["ziek", "beterschap", "arbo-arts", "bedrijfsarts", "gezondheid", "sick", "ill"]):
            item["image"] = "../assets/images/knm/wi_ziek.png"
        else:
            item["image"] = "../assets/images/knm/wi_werk.png"
    return data

def map_waarden_images(data):
    for item in data:
        text = item["nl"].lower() + " " + item["en"].lower()
        if any(word in text for word in ["huis", "buren", "buurt", "samenwonen", "gezin", "house", "neighbors"]):
            item["image"] = "../assets/images/knm/wonen_huis.png"
        elif any(word in text for word in ["werk", "collega", "baas", "work", "colleague", "boss"]):
            item["image"] = "../assets/images/knm/wi_werk.png"
        elif any(word in text for word in ["geld", "cadeau", "betalen", "money", "gift", "pay"]):
            item["image"] = "../assets/images/knm/wi_geld.png"
        else:
            # Fallback to the default waarden icon/image
            item["image"] = "../assets/images/knm/wn_waarden.png"
    return data

with open(r"C:\Learning\Dutch\dutch-writing-a2\js\knm\wonen_extracted.json", "r", encoding="utf-8") as f:
    wonen_data = map_wonen_images(json.load(f))

with open(r"C:\Learning\Dutch\dutch-writing-a2\js\knm\werkeninkomen_extracted.json", "r", encoding="utf-8") as f:
    werk_data = map_werk_images(json.load(f))

with open(r"C:\Learning\Dutch\dutch-writing-a2\js\knm\waarden_extracted.json", "r", encoding="utf-8") as f:
    waarden_data = map_waarden_images(json.load(f))

js_code = f"""// Data structure for the interactive KNM video lessons
const wonenLessonData = {json.dumps(wonen_data, indent=4, ensure_ascii=False)};
const werkLessonData = {json.dumps(werk_data, indent=4, ensure_ascii=False)};
const waardenLessonData = {json.dumps(waarden_data, indent=4, ensure_ascii=False)};

const interactiveLessons = {{
    "1": {{
        title: "Wonen (Housing)",
        description: "Learn about renting, buying, and waste separation in the Netherlands.",
        slides: wonenLessonData
    }},
    "2": {{
        title: "Werk en Inkomen (Work and Income)",
        description: "Learn about finding a job, contracts, taxes, and benefits in the Netherlands.",
        slides: werkLessonData
    }},
    "3": {{
        title: "Interactie, Waarden en Normen",
        description: "Learn about Dutch interactions, values, norms, and culture.",
        slides: waardenLessonData
    }}
}};
"""

output_path = r"C:\Learning\Dutch\dutch-writing-a2\js\knm\knm-lesson-data.js"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_code)

print(f"Successfully updated {output_path} with Chapters 1, 2, and 3.")
