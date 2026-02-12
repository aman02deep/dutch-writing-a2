import sys
import os
import fitz  # PyMuPDF

def extract_text_from_pdf(pdf_path, output_path):
    print(f"Opening PDF: {pdf_path}")
    
    if not os.path.exists(pdf_path):
        print(f"Error: File not found at {pdf_path}")
        return

    try:
        doc = fitz.open(pdf_path)
        print(f"Number of pages: {doc.page_count}")
        print(f"Metadata: {doc.metadata}")
        
        full_text = []
        
        for page_num, page in enumerate(doc):
            text = page.get_text()
            full_text.append(f"--- Page {page_num + 1} ---\n")
            full_text.append(text)
            full_text.append("\n")
            
        extracted_content = "".join(full_text)
        
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(extracted_content)
            
        print(f"\nExtraction complete! Saved to {output_path}")
        print(f"Extracted {len(extracted_content)} characters.")
        
        # Preview first 500 chars
        print("\n--- Preview ---")
        print(extracted_content[:500])
        
    except Exception as e:
        print(f"Error extracting PDF: {e}")

if __name__ == "__main__":
    pdf_file = r'C:\Learning\Dutch\Dutch_Book.pdf'
    output_file = r'C:\Learning\Dutch\Dutch_Book_Extracted.txt'
    extract_text_from_pdf(pdf_file, output_file)
