import fitz  # PyMuPDF
import sys

def extract_pdf_text(pdf_path):
    """Extract text from PDF file"""
    try:
        doc = fitz.open(pdf_path)
        full_text = ""
        
        print(f"Total pages: {len(doc)}")
        print("=" * 80)
        
        for page_num in range(len(doc)):
            page = doc[page_num]
            text = page.get_text()
            full_text += f"\n\n{'='*80}\nPAGE {page_num + 1}\n{'='*80}\n\n"
            full_text += text
            
        doc.close()
        return full_text
        
    except Exception as e:
        print(f"Error: {e}")
        return None

if __name__ == "__main__":
    pdf_path = r"C:\Learning\Dutch\Inburgering Writing Exam Assignments.pdf"
    
    print(f"Extracting text from: {pdf_path}\n")
    
    text = extract_pdf_text(pdf_path)
    
    if text:
        # Save to file
        output_file = r"C:\Learning\Dutch\app\writing_assignments_extracted.txt"
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(text)
        
        print(f"\n\nText extracted successfully!")
        print(f"Saved to: {output_file}")
        print(f"\nTotal characters: {len(text)}")
        
        # Print first 2000 characters as preview
        print("\n" + "="*80)
        print("PREVIEW (first 2000 characters):")
        print("="*80)
        print(text[:2000])
    else:
        print("Failed to extract text")
