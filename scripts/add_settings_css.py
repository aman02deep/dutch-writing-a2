import sys
from pathlib import Path

sys.stdout.reconfigure(line_buffering=True)

root = Path('c:/Learning/Dutch/dutch-writing-a2')

pages = [
    ('grammar/grammar.html', '../'),
    ('grammar/grammar-lab.html', '../'),
    ('grammar/grammar-practice.html', '../'),
    ('grammar/grammar-prepositions.html', '../'),
    ('grammar/grammar-sentences.html', '../'),
    ('grammar/grammar-verbs.html', '../'),
    ('grammar/preposition-quiz.html', '../'),
    ('grammar/verb-quiz.html', '../'),
    ('reading/reading.html', '../'),
    ('reading/reading-hub.html', '../'),
    ('knm/knm.html', '../'),
    ('knm/knm-chapter.html', '../'),
    ('vocabulary/vocabulary.html', '../'),
    ('vocabulary/vocabulary-lesson.html', '../'),
    ('writing/exam-sim.html', '../'),
    ('writing/forms-sim.html', '../'),
    ('writing/writing-templates-v2.html', '../'),
    ('index.html', './'),
]

for rel_path, prefix in pages:
    fpath = root / rel_path
    content = fpath.read_text(encoding='utf-8')

    if 'settings.css' in content:
        print(f'  SKIP (already has settings.css): {rel_path}')
        continue

    css_tag = f'    <link rel="stylesheet" href="{prefix}css/common/settings.css">'
    nav_tag = f'    <link rel="stylesheet" href="{prefix}css/common/navigation.css">'

    if nav_tag not in content:
        print(f'  WARN (navigation.css tag not found): {rel_path}')
        continue

    new_content = content.replace(nav_tag, nav_tag + '\n' + css_tag)
    fpath.write_text(new_content, encoding='utf-8')
    print(f'  OK: {rel_path}')

print('Done.')
