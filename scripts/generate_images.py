#!/usr/bin/env python3
"""
Generate custom illustrated cover images for stories using Stable Diffusion XL.
Uses a soft watercolor children's book aesthetic for cohesive visuals.

Usage: python3 scripts/generate_images.py [--story SLUG] [--all]
"""
import os
import sys
import argparse
from pathlib import Path
from PIL import Image

import torch
from diffusers import StableDiffusionXLPipeline

# Config
MODEL_DIR = os.path.expanduser("~/stable-diffusion/models/stabilityai/stable-diffusion-xl-base-1.0")
OUTPUT_DIR = os.path.expanduser("/Users/mitch/Documents/kids-stories-site/public/images")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Consistent children's book style prompt suffix
STYLE = (
    "children's storybook illustration, soft watercolor style, pastel color palette, "
    "gentle rounded shapes, warm and dreamy atmosphere, hand-painted texture, "
    "expressive characters, soft lighting, no sharp edges, magical and inviting, "
    "high quality digital painting, 4k"
)
NEGATIVE = (
    "photo realistic, photograph, 3d render, sharp edges, dark colors, "
    "scary, ugly, distorted, low quality, blurry, text, letters, watermark"
)

def load_pipeline():
    print("Loading SDXL model...")
    pipe = StableDiffusionXLPipeline.from_pretrained(
        MODEL_DIR,
        torch_dtype=torch.float16,
        use_safetensors=True,
        variant="fp16",
    )
    # Use Metal GPU via MPS
    pipe = pipe.to("mps")
    pipe.enable_attention_slicing()  # Reduce memory pressure
    print("Model loaded on MPS")
    return pipe

def generate_cover(pipe, title, themes, slug, output_path, steps=25, guidance=7.5):
    """Generate an illustrated cover image for a story."""
    
    # Build prompt from story metadata
    prompt = f"{title}, {', '.join(themes)}, {STYLE}"
    
    print(f"  Prompt: {prompt[:80]}...")
    print(f"  Steps: {steps}, Guidance: {guidance}")

    image = pipe(
        prompt=prompt,
        negative_prompt=NEGATIVE,
        num_inference_steps=steps,
        guidance_scale=guidance,
        height=768,
        width=1024,  # Landscape 4:3 for cover images
    ).images[0]

    # Resize to clean dimensions and save
    image = image.resize((1024, 768), Image.Resampling.LANCZOS)
    image.save(output_path, "WEBP", quality=90)
    size = output_path.stat().st_size
    print(f"  Saved: {output_path.name} ({size // 1024} KB)")
    return True

def load_stories():
    """Load story metadata from stories.ts."""
    import re
    stories_file = "/Users/mitch/Documents/kids-stories-site/app/lib/stories.ts"
    with open(stories_file) as f:
        content = f.read()
    arr = content.split("export const localStories = [")[1].rsplit("]", 1)[0]
    blocks = re.split(r'\n    slug:\s*"', arr)
    stories = []
    for block in blocks[1:]:
        slug_match = re.match(r'([^"]+)"', block)
        if not slug_match:
            continue
        slug = slug_match.group(1)
        
        title_match = re.search(r'title:\s*"([^"]+)"', block)
        title = title_match.group(1) if title_match else slug.replace("-", " ").title()
        
        themes_match = re.search(r'themes:\s*\[(.*?)\]', block)
        themes = []
        if themes_match:
            themes = re.findall(r'"([^"]+)"', themes_match.group(1))
        
        stories.append((slug, title, themes))
    return stories

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--story", help="Single story slug")
    parser.add_argument("--all", action="store_true", help="All stories")
    parser.add_argument("--regenerate", action="store_true", help="Regenerate even if exists")
    parser.add_argument("--steps", type=int, default=25, help="Inference steps (default 25)")
    parser.add_argument("--guidance", type=float, default=7.5, help="Guidance scale (default 7.5)")
    args = parser.parse_args()

    # Check if model is downloaded
    if not os.path.exists(MODEL_DIR):
        print(f"Model not found at {MODEL_DIR}")
        print("Run: python3 scripts/download_sdxl.py")
        return

    pipe = load_pipeline()

    stories = load_stories()
    print(f"Loaded {len(stories)} stories\n")

    if args.story:
        for slug, title, themes in stories:
            if slug == args.story:
                output = Path(OUTPUT_DIR) / f"{slug}.webp"
                print(f"Generating: {slug} - '{title}'")
                generate_cover(pipe, title, themes, slug, output, args.steps, args.guidance)
                return
        print(f"Not found: {args.story}")

    elif args.all:
        generated, skipped = 0, 0
        for slug, title, themes in stories:
            output = Path(OUTPUT_DIR) / f"{slug}.webp"
            if output.exists() and not args.regenerate:
                print(f"Skipping (exists): {slug}")
                skipped += 1
                continue
            print(f"[{generated+skipped+1}/{len(stories)}] {slug} - '{title}'")
            try:
                generate_cover(pipe, title, themes, slug, output, args.steps, args.guidance)
                generated += 1
            except Exception as e:
                print(f"  FAILED: {e}")
        print(f"\n{generated}/{len(stories)} generated ({skipped} skipped)")
    else:
        parser.print_help()

if __name__ == "__main__":
    main()