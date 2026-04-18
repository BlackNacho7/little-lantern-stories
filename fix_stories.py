#!/usr/bin/env python3
import re

# Read the original file
with open('/Users/mitch/Documents/kids-stories-site/app/lib/stories.ts', 'r') as f:
    content = f.read()

# Fix empty themes
content = content.replace(
    'themes: []',
    'themes: ["belonging", "resilience"]'
)

# Fix themes that only have "curiosity, courage" -> more balanced
content = content.replace(
    'themes: ["curiosity", "courage"]',
    'themes: ["curiosity", "courage", "identity"]'
)

# Fix themes that have only "friendship, courage" -> add kindness
content = content.replace(
    'themes: ["friendship", "courage"]',
    'themes: ["friendship", "kindness", "identity"]'
)

# Fix themes that have "family, friendship, imagination" -> more focused
content = content.replace(
    'themes: ["family", "friendship", "imagination"]',
    'themes: ["belonging", "kindness", "friendship"]'
)

# Fix themes that have "emotions, courage" -> add kindness
content = content.replace(
    'themes: ["emotions", "courage"]',
    'themes: ["emotions", "kindness", "courage"]'
)

# Fix themes that have only "courage, family" -> add identity
content = content.replace(
    'themes: ["courage", "family"]',
    'themes: ["courage", "family", "identity"]'
)

# Fix themes that have "courage, family, friendship" -> add emotions
content = content.replace(
    'themes: ["courage", "family", "friendship"]',
    'themes: ["courage", "family", "friendship", "emotions"]'
)

# Fix themes that have 'family', 'emotions' -> more complete
content = content.replace(
    "themes: ['family', 'emotions']",
    "themes: ['loss', 'grief', 'emotions']"
)

# Fix themes that have 'courage', 'friendship' -> add identity
content = content.replace(
    "themes: ['courage', 'friendship']",
    "themes: ['courage', 'friendship', 'identity']"
)

# Fix themes that have 'courage', 'curiosity', 'friendship' -> add emotions
content = content.replace(
    "themes: ['courage', 'curiosity', 'friendship']",
    "themes: ['courage', 'curiosity', 'friendship', 'emotions']"
)

# Fix themes that have 'friendship', 'nature', 'family' -> more focused
content = content.replace(
    "themes: ['friendship', 'nature', 'family']",
    "themes: ['friendship', 'identity', 'kindness']"
)

# Fix themes that have 'courage' (merchant story) -> more complete
content = content.replace(
    "themes: ['courage']",
    "themes: ['identity', 'loss', 'emotions', 'family']"
)

# Fix double blank lines - reduce to single blank lines
content = re.sub(r'\n\n\n+', '\n\n', content)

# Write the corrected file
with open('/Users/mitch/Documents/kids-stories-site/app/lib/stories.ts', 'w') as f:
    f.write(content)

print("Done!")
