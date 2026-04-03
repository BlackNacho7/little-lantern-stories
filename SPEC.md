# Little Lantern Stories — Kids Storytelling Hub

## 1. Concept & Vision

Little Lantern Stories is a digital storytelling hub for young children (ages 3–8) and their parents. It's warm, calm, and intentional — a sanctuary from the overstimulating internet. Every story is a mini learning experience with supporting content for parents to extend the reading into real life. The site should feel like opening a favorite storybook: safe, cozy, and full of wonder.

Core feeling: like a warm bedside lamp on a rainy night.

## 2. Design Language

### Aesthetic Direction
Storybook warmth meets modern clarity. Think: hand-illustrated children's book meets Scandinavian minimalism. Soft, organic, and human — not digital-feeling or corporate.

### Color Palette
- **Primary:** `#E8A87C` (warm peach/amber — warmth, lantern glow)
- **Secondary:** `#85B8CB` (soft sky blue — calm, trustworthy)
- **Accent:** `#C38D9E` (dusty rose — gentle, nurturing)
- **Background:** `#FFF8F0` (warm cream — like aged paper)
- **Surface:** `#FFFFFF` (white cards)
- **Text Primary:** `#3D2C29` (warm dark brown — softer than black)
- **Text Secondary:** `#7A6B68` (warm gray-brown)
- **Success/Safe:** `#85C1A3` (soft sage green)

### Typography
- **Headings:** "Fraunces" (Google Font) — warm, characterful serif with optical sizing
- **Body:** "Nunito" (Google Font) — friendly, rounded sans-serif, excellent readability
- **Scale:** 16px base, 1.25 ratio

### Spatial System
- Base unit: 8px
- Generous whitespace — the design breathes
- Max content width: 800px for story text (readability)
- Cards: rounded-2xl (16px radius), soft shadows

### Motion Philosophy
- Subtle, purposeful — nothing flashy or fast
- Page entrance: gentle fade-up (opacity 0→1, y 12→0, 500ms ease-out)
- Cards: soft hover lift (y -2px, shadow grows, 200ms)
- No bouncy or jumpy animations — this is a calm space
- Stagger children: 80ms delay between items

### Visual Assets
- Icons: Phosphor Icons (duotone style) — warm, friendly
- Illustrations: Soft, hand-drawn aesthetic — use Unsplash nature/character illustrations for sample content
- Decorative: subtle star/sparkle SVGs, soft cloud shapes as section dividers
- No harsh lines or sharp geometric shapes

## 3. Layout & Structure

### Site Architecture
```
/ (Homepage)
/stories (Stories Library)
/stories/[slug] (Individual Story Page)
```

### Homepage Structure
1. **Navigation** — Simple top nav: Logo + Stories link + soft "For Parents" section
2. **Hero** — Warm headline, short description, featured story card
3. **What We Offer** — 3-column visual breakdown (Stories, Songs, Activities)
4. **Featured Stories** — 3 card horizontal scroll on mobile, grid on desktop
5. **Browse by Theme** — Icon-based theme filter tiles
6. **For Parents Teaser** — Brief "why this site exists" section
7. **Footer** — Simple, warm

### Stories Library Structure
1. **Header** — "Our Stories" with story count
2. **Filter Bar** — Age, theme, story length filters
3. **Story Grid** — Cards with cover image, title, age range, theme icons
4. **Pagination or Load More**

### Story Page Structure
1. **Story Hero** — Title, age range, themes, estimated read time
2. **Story Content** — Large readable text, warm styling
3. **Audio Player** — Play/pause narration (placeholder for now)
4. **Related Songs** — 1-2 songs with lyrics/embed
5. **Printables** — Coloring pages + hidden object game links (PDF)
6. **Activity Sheets** — Printable activities
7. **Discussion Questions** — Parent-guided Q&A
8. **Vocabulary Builder** — Word list with definitions
9. **Learn-With-Me Facts** — Educational tie-ins
10. **Parent Tips** — Highlighted parent-only section
11. **Navigation** — Prev/next story links

### Responsive Strategy
- Mobile-first (parents on phones)
- Single column mobile, 2-3 column desktop
- Touch-friendly tap targets (min 44px)
- Story text always readable width (max 800px, centered on large screens)

## 4. Features & Interactions

### Homepage
- Featured story card: hover lifts, click navigates
- Theme tiles: hover brightens, click filters library
- Smooth scroll between sections

### Stories Library
- Filter pills: active state highlighted, deselect clears
- Story cards: cover image, title, age badge, theme icons, description preview
- Hover: card lifts, "Read Story →" appears
- Empty state: friendly message if no matches

### Story Page
- Audio player: play/pause button, progress bar (placeholder UI)
- Printables: click downloads PDF (mock links for now)
- Discussion questions: numbered, expandable
- Vocabulary: hover highlights word
- Parent tips: visually distinct section with different background
- Prev/Next: story cards at bottom

### Error States
- 404: Friendly "Story not found" with lantern illustration
- Empty library: "Stories coming soon" with warm message

## 5. Component Inventory

### Navigation
- Logo (lantern SVG + "Little Lantern")
- Nav links: Stories, For Parents
- Mobile: hamburger → slide-in menu
- States: default, scrolled (subtle shadow), mobile-open

### StoryCard
- Cover image (aspect 4:3)
- Title (Fraunces, text-xl)
- Age range badge (e.g., "Ages 3–5")
- Theme icons (small, row)
- Short description (2-line clamp)
- States: default, hover (lift + shadow), loading (skeleton)

### ThemePill / FilterPill
- Icon + label
- States: default, active (filled background), hover

### StoryHero
- Large title
- Meta row: age range, read time, themes
- Soft gradient background

### AudioPlayer
- Play/pause button (large, centered)
- Progress bar (scrubber)
- Time display
- States: idle, playing, paused, loading

### PrintableCard
- Thumbnail preview
- Title (coloring page, activity sheet, etc.)
- Download button
- States: default, hover, downloading

### VocabularyItem
- Word (bold)
- Definition (regular)
- Example sentence (italic)

### DiscussionQuestion
- Numbered
- Expandable on mobile
- Parent icon indicator

### ParentTipsBox
- Visually distinct (warm amber background, different from content)
- "For Parents" label
- Warm, encouraging tone

### Button
- Primary: warm peach background, dark text
- Secondary: outlined, peach border
- Ghost: text only
- States: default, hover, active, disabled

## 6. Technical Approach

### Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Content:** Local JSON/Markdown files in `/content/stories/`
- **Icons:** Phosphor Icons via `@phosphor-icons/react`
- **Fonts:** Google Fonts (Fraunces, Nunito)

### Content Model (Story)
```typescript
interface Story {
  slug: string;
  title: string;
  coverImage: string;
  ageRange: string; // "3–5", "5–7", "6–8"
  themes: string[]; // ["friendship", "courage", "emotions"]
  readTime: string; // "5 min", "10 min"
  description: string;
  content: string; // Markdown story text
  audioUrl?: string;
  songs?: Song[];
  printables?: Printable[];
  activities?: Activity[];
  discussionQuestions?: string[];
  vocabulary?: VocabularyWord[];
  learnWithMeFacts?: Fact[];
  parentTips?: string;
}
```

### File Structure
```
/app
  /page.tsx (homepage)
  /stories/page.tsx (library)
  /stories/[slug]/page.tsx (story page)
  /layout.tsx
  /globals.css
/components
  Navigation.tsx
  StoryCard.tsx
  ThemePill.tsx
  AudioPlayer.tsx
  PrintableCard.tsx
  VocabularyList.tsx
  DiscussionQuestions.tsx
  ParentTipsBox.tsx
  Footer.tsx
/content
  /stories
    /the-brave-little-lantern.json
    /the-cloud-who-learned-to-cry.json
    ... (3 sample stories)
/lib
  stories.ts (data fetching)
```

### Sample Stories (3 for MVP)
1. **"The Brave Little Lantern"** — Courage, finding your light, ages 4-6
2. **"The Cloud Who Learned to Cry"** — Emotions, vulnerability, ages 3-5
3. **"The Rock Who Wanted to Roll"** — Identity, contentment, ages 4-7

Each story will have: full text, 2 discussion questions, 3 vocabulary words, 1 parent tip, 1 printable placeholder.

### Deployment
- Vercel-ready (same as Curated Growth)
- Push to GitHub → auto-deploy
