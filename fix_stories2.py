#!/usr/bin/env python3
import re

# Read the file
with open('/Users/mitch/Documents/kids-stories-site/app/lib/stories.ts', 'r') as f:
    content = f.read()

# Fix double/triple blank lines within story content - but preserve meaningful gaps
# The issue is double blank lines between story entries - reduce to single blank lines
# Note: we need to be careful not to break template literals

# First, let's identify and fix the trailing commas issue on story objects
# The pattern }, followed by newline and , is a syntax error potentially

# Find patterns of }, with a comma on the next line - that's extra trailing comma
content = re.sub(r'\},\s*\n\s*,', '},\n,', content)

# Fix any duplicate newlines that create blank lines between array items
content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)

with open('/Users/mitch/Documents/kids-stories-site/app/lib/stories.ts', 'w') as f:
    f.write(content)

print("Cleaned!")
