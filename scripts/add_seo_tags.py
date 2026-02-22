import os
import re
from pathlib import Path

# Base directory
BASE_DIR = Path(".")

# SEO Tags template
KEYWORDS = "Dutch A2, Inburgeringsexamen, NT2, learn Dutch, Dutch grammar, Dutch vocabulary, KNM practice"
AUTHOR = ""
DEFAULT_DESC = "Interactive Dutch A2 practice exercises for the Inburgeringsexamen. Master grammar, vocabulary, KNM, and writing with AI-powered feedback."

def add_seo_to_file(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='surrogateescape') as f:
        content = f.read()

    # Skip if already has SEO tags OR specific copyright tag
    if '<meta name="copyright"' in content:
        print(f"Skipping (already has copyright): {filepath}")
        return

    # Extract title
    title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
    title = title_match.group(1) if title_match else "Dutch A2 Practice Hub"

    # Construct the tags
    seo_tags = f"""
    <meta name="copyright" content="© 2026 Dutch A2 Practice App. All rights reserved.">"""

    # We want to insert 'seo_tags' right after '<meta name="viewport" ... >'
    viewport_pattern = r'(<meta name="viewport"[^>]*>)'
    
    if re.search(viewport_pattern, content):
        new_content = re.sub(viewport_pattern, r'\1' + seo_tags, content)
        
        with open(filepath, 'w', encoding='utf-8', errors='surrogateescape') as f:
            f.write(new_content)
        print(f"ADDED SEO tags to: {filepath}")
    else:
        print(f"WARNING: No viewport meta tag found in {filepath} — skipping")

def main():
    html_files = list(BASE_DIR.glob("**/*.html"))
    for file in html_files:
        # Ignore files outside expected subdirectories if needed, or just run on all
        if "node_modules" in str(file) or ".git" in str(file):
            continue
        add_seo_to_file(file)

if __name__ == "__main__":
    main()
