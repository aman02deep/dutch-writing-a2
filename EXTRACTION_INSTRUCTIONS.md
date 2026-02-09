# PDF Text Extraction for Writing Assignments

## Prerequisites

1. **Python Installation**
   - Download from: https://www.python.org/downloads/
   - During installation, **check "Add Python to PATH"**

2. **Install PyMuPDF Library**
   ```bash
   pip install PyMuPDF
   ```

## How to Run

### Option 1: Using the Batch File (Easiest)
1. Double-click `run_extraction.bat`
2. The script will automatically try different Python commands
3. Check the output file: `writing_assignments_extracted.txt`

### Option 2: Manual Command Line
1. Open Command Prompt or PowerShell
2. Navigate to this directory:
   ```bash
   cd C:\Learning\Dutch\app
   ```
3. Run the script:
   ```bash
   python extract_writing_pdf.py
   ```

## What It Does

The script will:
1. Read the PDF: `C:\Learning\Dutch\Inburgering Writing Exam Assignments.pdf`
2. Extract all text content
3. Save to: `writing_assignments_extracted.txt`
4. Display a preview of the first 2000 characters

## Troubleshooting

**Error: "Python was not found"**
- Python is not installed or not in PATH
- Install Python and make sure to check "Add Python to PATH"

**Error: "No module named 'fitz'"**
- PyMuPDF is not installed
- Run: `pip install PyMuPDF`

**Error: "Cannot open PDF"**
- Check that the PDF file exists at the specified path
- Make sure the file is not corrupted or password-protected

## Next Steps

After extraction, we will:
1. Review the extracted writing assignments
2. Compare with current app content (`js/questions-exam-sim.js`)
3. Identify any missing assignments
4. Add any missing content to the app
