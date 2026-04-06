# Notion CMS Integration Guide

This guide explains how to connect your Notion database to Little Lantern Stories so you can manage stories through Notion instead of editing TypeScript files.

## Overview

When configured, the site will fetch stories from your Notion database at build time. If Notion is not configured, the site falls back to the local `app/lib/stories.ts` file.

## Setup Steps

### 1. Create a Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click **"New integration"**
3. Give it a name (e.g., "Little Lantern Stories")
4. Select your workspace
5. Under **Permissions**, choose "Read content"
6. Click **Submit**
7. Copy the **Internal Integration Token** (starts with `secret_`)

### 2. Create the Stories Database

Create a new database in Notion with these exact properties:

| Property Name        | Type          | Notes                                                                 |
|----------------------|---------------|-----------------------------------------------------------------------|
| `title`              | Title         | The story title                                                       |
| `slug`               | Text          | URL-friendly identifier (e.g., `lunas-big-adventure`)                 |
| `coverImage`         | URL           | Full URL to cover image (e.g., from Unsplash or picsum)              |
| `ageRange`           | Text          | Age range (e.g., "4–7")                                               |
| `themes`             | Multi-select  | Options: `courage`, `curiosity`, `kindness`, `friendship`, `bedtime`, `imagination`, `emotions`, `adventure` |
| `readTime`           | Text          | Read time (e.g., "5 min")                                             |
| `description`        | Text          | Short description shown on story cards (1-2 sentences)                |
| `content`             | Text          | Full story text (use `\n\n` for paragraph breaks)                    |
| `discussionQuestions` | Text          | Discussion questions separated by `|` (pipe character)                |
| `parentTips`         | Text          | Parent tips section content                                            |
| `vocabulary`         | Text          | JSON array of `{word, definition, sentence}` objects                  |
| `songs`              | Text          | JSON array of `{title, lyrics}` objects                                |
| `printables`         | Text          | JSON array of `{title, type, url}` objects                            |
| `status`             | Select        | Options: `draft`, `published` — only `published` stories are shown    |
| `order`              | Number        | Sort order for stories                                                |

#### Example Vocabulary JSON
```json
[
  {"word": "whispered", "definition": "to speak very softly", "sentence": "Luna whispered to herself."},
  {"word": "twinkled", "definition": "to shine with a flickering light", "sentence": "The stars twinkled."}
]
```

#### Example Songs JSON
```json
[
  {"title": "The Brave Bunny Song", "lyrics": "Hop, hop, little bunny..."}
]
```

#### Example Printables JSON
```json
[
  {"title": "Color Luna", "type": "coloring", "url": "https://example.com/printable.pdf"}
]
```

### 3. Share the Database with Your Integration

1. Open your Notion database
2. Click the **...** (three dots) in the top right corner
3. Click **Add connections**
4. Find and select your integration
5. Click **Confirm**

### 4. Get Your Database ID

The database ID is the part of the URL between the workspace name and the question mark:

```
https://www.notion.so/YOUR_USERNAME/DATABASE_ID?v=...
```

Copy the `DATABASE_ID` (it's a 32-character string with dashes).

### 5. Configure Environment Variables

Create a file named `.env.local` in the project root (not in `app/`):

```bash
# .env.local
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

For **local development**, create `.env.local`.
For **Vercel deployment**, add these in your Vercel project settings under Environment Variables.

### 6. Test the Connection

Run the dev server and check the stories page:

```bash
npm run dev
```

If configured correctly, your Notion stories will appear. If Notion is not set up or returns an error, the site will fall back to the local stories.

## Adding a New Story in Notion

1. Create a new page in your Stories database
2. Fill in all the properties
3. Set `status` to `published`
4. The story will appear on the site on the next build

## Rebuilding the Site

- **Vercel**: Push to your GitHub repo — Vercel builds automatically
- **Local**: Run `npm run build && npm start`
- **Manual**: Run `npm run build` to test locally

## Switching Back to Local Stories

To disable Notion and use local stories only:

1. Remove or comment out the `NOTION_TOKEN` and `NOTION_DATABASE_ID` from `.env.local`
2. Rebuild the site

## Troubleshooting

### "Failed to fetch stories" error
- Check that your integration token is correct
- Verify the database has been shared with the integration
- Make sure the database ID is correct

### Stories not appearing
- Ensure `status` is set to `published` (not `draft`)
- Check that `slug` and `title` properties are filled in

### Build errors
- Make sure all required properties exist in your Notion database
- Vocabulary/songs/printables must be valid JSON (not plain text)
