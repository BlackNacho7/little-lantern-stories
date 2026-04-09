#!/usr/bin/env python3
"""
Download Stable Diffusion XL Base 1.0 model files.
Run this once before using generate_images.py
"""
from huggingface_hub import snapshot_download

print("Downloading SDXL Base 1.0 (~6.6GB)... this may take a while.")
snapshot_download(
    repo_id="stabilityai/stable-diffusion-xl-base-1.0",
    local_dir="~/stable-diffusion/models/stabilityai/stable-diffusion-xl-base-1.0",
    local_dir_use_symlinks=False,
)
print("Done!")