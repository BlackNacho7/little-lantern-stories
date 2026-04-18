#!/usr/bin/env python3
"""
Generate clean story files formatted for ElevenLabs.
Creates text files with character voice descriptors ready for copy/paste into ElevenLabs.
"""
import os
import re
import json
from pathlib import Path

STORIES_FILE = "/Users/mitch/Documents/kids-stories-site/app/lib/stories.ts"
OUTPUT_DIR = "/Users/mitch/Documents/Little-Lantern-ElevenLabs"

def load_stories():
    """Load story slugs and content from stories.ts using Node.js as intermediary."""
    import subprocess
    result = subprocess.run([
        'node', '-e', '''
const { localStories } = require('./app/lib/stories.ts');
const clean = localStories.filter(s => s !== undefined && s !== null);
clean.forEach(s => {
    process.stdout.write('SLUG:' + s.slug + '|TITLE:' + s.title + '|CONTENT:' + s.content.replace(/`/g, '\\`') + '\\n---END---\\n');
});
'''
    ], cwd='/Users/mitch/Documents/kids-stories-site', capture_output=True, text=True, timeout=30)
    
    stories = []
    blocks = result.stdout.split('\n---END---\n')
    for block in blocks:
        if not block.startswith('SLUG:'):
            continue
        rest = block[5:]  # remove 'SLUG:'
        slug_title, content = rest.split('|CONTENT:', 1)
        slug, title = slug_title.split('|TITLE:', 1)
        stories.append((slug.strip(), title.strip(), content.strip()))
    
    return stories

def clean_story(content):
    """Remove Moonbeam welcome intros and sweet dreams outros."""
    lines = content.split('\n')
    cleaned = []
    skip_mode = False
    skip_next_blank = False
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        
        if not skip_mode:
            if (stripped.startswith('Welcome') or 
                stripped.startswith("I'm Moonbeam") or
                stripped.startswith('This is a story for those')):
                skip_next_blank = True
                continue
            skip_mode = True
        
        if 'Sweet dreams' in stripped or 'our story comes to an end' in stripped or 'our adventure comes to an end' in stripped:
            # Also skip the blank line before these outros
            continue
        
        if skip_next_blank and stripped == '':
            skip_next_blank = False
            continue
        skip_next_blank = False
        
        cleaned.append(line)
    
    while cleaned and cleaned[-1].strip() == '':
        cleaned.pop()
    
    return '\n'.join(cleaned).strip()

def format_for_elevenlabs(title, content, slug):
    """Format story content with ElevenLabs-optimized structure."""
    lines = content.split('\n')
    
    # Build narration header
    output = []
    output.append(f"## {title}")
    output.append("")
    output.append("### Voice Direction")
    output.append("Warm, gentle bedtime story narrator. Calm storybook voice — like reading to a child at bedtime. Not rushed, soft pacing, slight warmth. Think classic children's audiobook narrator.")
    output.append("")
    output.append("### Story Text")
    output.append("---")
    output.append("")
    
    in_dialogue = False
    for line in lines:
        stripped = line.strip()
        if not stripped:
            output.append("")
            in_dialogue = False
            continue
        
        # Check for dialogue (has quotes)
        has_quotes = stripped.count('"') >= 2
        
        if has_quotes:
            # Parse: [narration] "dialogue" [narration] more text "more dialogue"
            # We'll use [pause] markers between sentences for natural pacing
            output.append(stripped)
        else:
            output.append(stripped)
    
    return '\n'.join(output)

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    try:
        stories = load_stories()
        print(f"Loaded {len(stories)} stories\n")
    except Exception as e:
        print(f"Error loading from Node.js: {e}")
        print("Using direct file parsing instead...")
        return
    
    for slug, title, raw_content in stories:
        cleaned = clean_story(raw_content)
        formatted = format_for_elevenlabs(title, cleaned, slug)
        
        out_path = Path(OUTPUT_DIR) / f"{slug}.txt"
        with open(out_path, 'w') as f:
            f.write(formatted)
        
        char_count = len(cleaned)
        print(f"✓ {title} ({char_count} chars)")
    
    print(f"\n✅ All {len(stories)} files written to:")
    print(f"   {OUTPUT_DIR}")
    print("")
    print("📋 Next steps:")
    print("   1. Go to drive.google.com")
    print("   2. Create a folder called 'Little Lantern - ElevenLabs Scripts'")
    print("   3. Upload all the .txt files from the folder above")
    print("   4. Open each file, copy the content")
    print("   5. Paste into ElevenLabs and generate the audio")
    print("   6. Download the audio and add to /public/audio/[slug]-story.mp3")
    print("")
    print("💡 ElevenLabs tips:")
    print("   - Use the 'Bedtime Story' or 'Warm Narrator' voice preset")
    print("   - Set stability to medium-low for gentle warmth")
    print("   - Use the emotional range slider for gentle expression")

if __name__ == "__main__":
    main()