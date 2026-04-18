#!/usr/bin/env python3
"""
Generate songs for each story using Facebook's MusicGen via transformers.
Usage: python3 scripts/generate_songs.py [--story SLUG] [--all] [--regenerate]
"""
import os
import re
import subprocess
import argparse
from pathlib import Path
import numpy as np
import torch
from transformers import MusicgenForConditionalGeneration, AutoProcessor
from scipy.io import wavfile

# Config
OUTPUT_DIR = "/Users/mitch/Documents/kids-stories-site/public/audio"
STORIES_FILE = "/Users/mitch/Documents/kids-stories-site/app/lib/stories.ts"
MODEL_NAME = "facebook/musicgen-small"

SONG_PROMPTS = {
    "bennys-cozy-bed": "warm gentle lullaby, soft piano, strings, cozy bedtime feel, 80 BPM, soothing",
    "wheres-my-family": "playful bouncy melody, upbeat, happy family reunion, light percussion",
    "ollies-noisy-morning": "fun energetic morning song, upbeat, playful, bright and cheerful",
    "the-curious-kitten": "whimsical playful melody, curious and bright, light piano",
    "the-sleepy-star": "dreamy lullaby, slow gentle, stars twinkle, sleepy and magical",
    "the-grumpy-garden": "warm upbeat garden song, cheerful, heartwarming, strings and piano",
    "marina-makes-a-friend": "gentle heartwarming ballad, soft piano, strings, emotional",
    "a-home-for-millie": "tender safe melody, warm and comforting, gentle rhythm",
    "the-little-cloud-who-was-shy": "soft gentle ambient, dreamy pads, quiet confidence",
    "the-star-keepers-daughter": "epic adventurous orchestral, soaring strings, brave and magical",
    "sams-big-jump": "triumphant heroic song, epic build-up, triumphant crescendo",
    "the-mystery-of-the-missing-song": "bouncy playful mystery, quirky, fun detective vibes",
    "the-wrong-side-of-the-river": "gentle reassuring ballad, calm and hopeful, soft piano",
    "lunas-big-adventure": "magical adventure song, Disney-style, brave and exciting",
    "the-talking-tree": "magical whimsical forest song, enchanted, playful wonder",
    "the-merchants-empty-box": "fun playful song, upbeat, treasure discovery vibe",
    "two-houses-one-heart": "emotional touching ballad, heartfelt, gentle piano and strings",
}

_model = None
_processor = None
_device = None

def get_model():
    global _model, _processor, _device
    if _model is None:
        print(f"  Loading MusicGen model...")
        _model = MusicgenForConditionalGeneration.from_pretrained(MODEL_NAME)
        _processor = AutoProcessor.from_pretrained(MODEL_NAME)
        _device = "mps" if torch.backends.mps.is_available() else "cpu"
        _model = _model.to(_device)
        print(f"  Using device: {_device}")
    return _model, _processor, _device

def load_stories():
    """Load story slugs from stories.ts"""
    with open(STORIES_FILE) as f:
        content = f.read()
    arr = content.split("export const localStories = [")[1].rsplit("]", 1)[0]
    blocks = re.split(r'\n  \{    slug:"', arr)
    slugs = []
    for block in blocks[1:]:
        m = re.match(r'([^"]+)', block)
        if m:
            slugs.append(m.group(1))
    return slugs

def generate_music(slug, prompt, output_path, regenerate=False):
    """Generate music using MusicGen."""
    if output_path.exists() and not regenerate:
        print(f"  Skipping (exists): {output_path.name}")
        return True

    try:
        model, processor, device = get_model()
        print(f"  Generating (~15s): {prompt[:60]}...")
        inputs = processor(text=[prompt], return_tensors="pt", padding=True)
        inputs = {k: v.to(device) for k, v in inputs.items()}

        # NOTE: guidance_scale removed — caused shape errors with this transformers version
        audio_values = model.generate(**inputs, max_new_tokens=768, do_sample=True)

        # Shape: [batch, channels, samples] — take [0] for first item
        audio = audio_values[0].cpu().numpy()  # [channels, samples]
        if audio.ndim == 2:
            audio = audio.mean(axis=0)  # mono

        # Normalize to float32 [-1, 1]
        audio = audio.astype(np.float32)
        max_val = np.abs(audio).max()
        if max_val > 0:
            audio = audio / max_val

        wav_path = output_path.with_suffix(".wav")
        wavfile.write(wav_path, 32000, audio)

        mp3_path = output_path.with_suffix(".mp3")
        result = subprocess.run(
            ["ffmpeg", "-y", "-loglevel", "quiet", "-i", str(wav_path),
             "-codec:a", "libmp3lame", "-q:a", "4", "-ar", "44100", str(mp3_path)],
            capture_output=True, text=True, timeout=60
        )
        wav_path.unlink()

        if result.returncode == 0 and mp3_path.exists():
            size_kb = mp3_path.stat().st_size // 1024
            print(f"  -> {mp3_path.name} ({size_kb} KB)")
            return True
        else:
            print(f"  FFmpeg error: {result.stderr[:200]}")
            return False

    except Exception as e:
        print(f"  Error: {e}")
        import traceback; traceback.print_exc()
        return False

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--story", help="Single story slug")
    parser.add_argument("--all", action="store_true", help="All stories")
    parser.add_argument("--regenerate", action="store_true", help="Regenerate existing")
    args = parser.parse_args()

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    slugs = load_stories()
    print(f"Loaded {len(slugs)} stories: {slugs}\n")

    if args.story:
        if args.story not in SONG_PROMPTS:
            print(f"No prompt for: {args.story}")
            return
        output = Path(OUTPUT_DIR) / args.story
        print(f"Generating: {args.story}")
        ok = generate_music(args.story, SONG_PROMPTS[args.story], output, args.regenerate)
        print(f"  {'Done' if ok else 'Failed'}")
    elif args.all:
        generated, skipped, failed = 0, 0, []
        for i, slug in enumerate(slugs):
            if slug not in SONG_PROMPTS:
                print(f"[{i+1}/{len(slugs)}] No prompt: {slug}")
                continue
            output = Path(OUTPUT_DIR) / slug
            if output.with_suffix(".mp3").exists() and not args.regenerate:
                print(f"[{i+1}/{len(slugs)}] Skipping (exists): {slug}")
                skipped += 1
                continue
            print(f"[{i+1}/{len(slugs)}] {slug}")
            if generate_music(slug, SONG_PROMPTS[slug], output, args.regenerate):
                generated += 1
            else:
                failed.append(slug)
        print(f"\n{generated}/{len(slugs)} generated ({skipped} skipped, {len(failed)} failed)")
        if failed:
            print(f"Failed: {failed}")
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
