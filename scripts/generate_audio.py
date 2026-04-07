#!/usr/bin/env python3
"""
Generate TTS audio for all stories using Piper TTS.
Usage: python3 scripts/generate_audio.py [--story SLUG] [--all] [--regenerate]
"""
import os
import re
import subprocess
import argparse
from pathlib import Path

PIPER = os.path.expanduser("~/Library/Python/3.9/bin/piper")
MODEL = "/Users/mitch/piper-models/voices/en_US-lessac-medium.onnx"
CONFIG = "/Users/mitch/piper-models/voices/en_US-lessac-medium.onnx.json"
OUTPUT_DIR = "/Users/mitch/Documents/kids-stories-site/public/audio"
STORIES_FILE = "/Users/mitch/Documents/kids-stories-site/app/lib/stories.ts"

os.environ["PATH"] = os.path.dirname(PIPER) + ":" + os.environ.get("PATH", "")

def clean_story_text(text):
    text = re.sub(r"Welcome, little dreamers!.*?Are you ready for a wonderful adventure\?\s*", "", text, flags=re.DOTALL)
    text = re.sub(r"And so our adventure comes to an end\..*Sweet dreams[^\n]*", "", text, flags=re.DOTALL)
    text = re.sub(r"\*\*", "", text)
    text = re.sub(r"☁️💜|⭐🌟✨|🐦💜|🌊💙|🌙✨|🌳💚|📦✨|🏡💔💚|🏊‍♂️💙", "", text)
    text = re.sub(r"\.{3,}", ".", text)
    text = re.sub(r"!+", "!", text)
    text = re.sub(r"\?+", "?", text)
    text = re.sub(r"\n\n+", "\n\n", text)
    return text.strip()

def generate_audio(text, output_path):
    if not text.strip():
        return False
    text_file = output_path.with_suffix(".txt")
    with open(text_file, "w") as f:
        f.write(text)
    wav_path = output_path.with_suffix(".wav")
    cmd = [PIPER, "-m", MODEL, "-c", CONFIG, "-i", str(text_file), "-f", str(wav_path), "--sentence-silence", "0.3"]
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=300)
    if result.returncode != 0:
        print(f"  Piper error: {result.stderr[:200]}")
        return False
    mp3_path = output_path.with_suffix(".mp3")
    convert_cmd = ["ffmpeg", "-y", "-loglevel", "quiet", "-i", str(wav_path), "-codec:a", "libmp3lame", "-q:a", "4", "-ar", "22050", str(mp3_path)]
    result = subprocess.run(convert_cmd, capture_output=True, text=True, timeout=60)
    for f in [text_file, wav_path]:
        if f.exists():
            f.unlink()
    if result.returncode == 0 and mp3_path.exists():
        print(f"  -> {mp3_path.name} ({mp3_path.stat().st_size // 1024} KB)")
        return True
    print(f"  FFmpeg error: {result.stderr[:100]}")
    return False

def extract_content_from_block(block, slug):
    """Extract content from a story block, handling both backtick and double-quote formats."""
    # Pattern 1: backtick template literal
    bt_match = re.search(r'content:\s*`', block)
    if bt_match:
        start = bt_match.end()
        # Find closing backtick
        end_match = re.search(r'`', block[start:])
        if end_match:
            return block[start:start + end_match.start()]
    # Pattern 2: double-quoted string
    dq_match = re.search(r'content:\s*"', block)
    if dq_match:
        start = dq_match.end()
        # Find the closing quote, handling escaped quotes
        end_match = re.search(r'(?:[^\\]|^)"', block[start:])
        if end_match:
            return block[start:start + end_match.start()]
    # Pattern 3: single-quoted string
    sq_match = re.search(r"content:\s*'", block)
    if sq_match:
        start = sq_match.end()
        end_match = re.search(r"(?:[^\\]|^)'", block[start:])
        if end_match:
            return block[start:start + end_match.start()]
    return ""

def load_stories():
    with open(STORIES_FILE) as f:
        content = f.read()
    arr = content.split("export const localStories = [")[1].rsplit("]", 1)[0]
    # Split by slug: declarations
    blocks = re.split(r'\n    slug:\s*"', arr)
    stories = []
    for block in blocks[1:]:
        slug_match = re.match(r'([^"]+)"', block)
        if not slug_match:
            continue
        slug = slug_match.group(1)
        text = extract_content_from_block(block, slug)
        if text:
            stories.append((slug, text))
        else:
            print(f"  WARNING: No content found for {slug}")
    return stories

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--story", help="Single story slug")
    parser.add_argument("--all", action="store_true", help="All stories")
    parser.add_argument("--regenerate", action="store_true", help="Re-generate even if file exists")
    args = parser.parse_args()

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    stories = load_stories()
    print(f"Loaded {len(stories)} stories\n")

    if args.story:
        for slug, content in stories:
            if slug == args.story:
                cleaned = clean_story_text(content)
                output = Path(OUTPUT_DIR) / slug
                print(f"Generating: {slug}")
                ok = generate_audio(cleaned, output)
                print(f"  {'Done' if ok else 'Failed'}")
                return
        print(f"Not found: {args.story}")
    elif args.all:
        generated, skipped, failed = 0, 0, []
        for slug, content in stories:
            output = Path(OUTPUT_DIR) / slug
            if output.with_suffix(".mp3").exists() and not args.regenerate:
                print(f"Skipping (exists): {slug}")
                skipped += 1
                continue
            cleaned = clean_story_text(content)
            print(f"[{generated+skipped+1}/{len(stories)}] {slug}")
            if generate_audio(cleaned, output):
                generated += 1
            else:
                failed.append(slug)
        print(f"\n{generated}/{len(stories)} generated ({skipped} skipped, {len(failed)} failed)")
        if failed:
            print(f"Failed: {failed}")
    else:
        parser.print_help()

if __name__ == "__main__":
    main()