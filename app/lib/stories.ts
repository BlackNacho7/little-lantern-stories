export interface Story {
  slug: string;
  title: string;
  coverImage: string;
  ageRange: string;
  themes: string[];
  readTime: string;
  description: string;
  content: string;
  songs?: { title: string; lyrics: string }[];
  printables?: { title: string; type: string; url: string }[];
  activities?: { title: string; description: string }[];
  discussionQuestions?: string[];
  vocabulary?: { word: string; definition: string; sentence: string }[];
  learnWithMeFacts?: { fact: string; explanation: string }[];
  parentTips?: string;
}

const storyFiles: Story[] = [
  {
    slug: "the-brave-little-lantern",
    title: "The Brave Little Lantern",
    coverImage:
      "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800&q=80",
    ageRange: "4–6",
    themes: ["courage", "emotions"],
    readTime: "5 min",
    description:
      "A small lantern named Lum fears the dark but discovers her light helps others find their way home.",
    content: `Once upon a time, in a little village at the edge of the Whispering Woods, there lived a tiny lantern named Lum. She was the smallest lantern in the whole village — no bigger than a teacup — and her light was soft and golden, like honey in a jar.

Every evening, the big lanterns would climb to the tops of the houses and light up the streets. They shone so bright that people could read books by their glow. But Lum? Lum was only allowed to sit on windowsills, where her light could barely reach past the curtains.

"I wish I were bigger," Lum would whisper to herself. "Then I could help too."

One evening, the sky grew darker than usual. The big lanterns tried their hardest, but the clouds were too thick, and the whole village slipped into shadow. People stumbled. Children cried. Even the bravest lanterns flickered with worry.

That's when Lum remembered something her grandmother had told her long ago: "It isn't about how bright your light is, dear. It's about how brave you are to let it shine."

So Lum climbed down from her windowsill. She wobbled through the muddy streets, past the boots of sleeping farmers and the legs of drowsy dogs. She climbed the hill behind the village, all the way to the old oak tree where the lost travelers always got confused.

When she got there, she didn't try to be bright. She just glowed — softly, gently, warmly — like a tiny sun in the darkness.

And guess what? It was enough. One by one, the lost travelers saw her glow and followed it back to the village. They found their way home because of a tiny lantern no bigger than a teacup.

From that day on, Lum never sat on a windowsill again. She lived on top of the old oak tree, glowing softly into the night, helping anyone who ever felt lost find their way back.

And whenever a little light feels too small to matter, someone in the village tells them the story of Lum — and they all remember: **bravery isn't about how bright you shine. It's about having the courage to shine at all.**`,
    discussionQuestions: [
      "How do you think Lum felt when she couldn't help like the big lanterns?",
      "Have you ever felt too small to make a difference? What happened?",
      "What does it mean to be brave even when you're scared?",
    ],
    vocabulary: [
      {
        word: "whisper",
        definition: "to speak very softly, barely louder than a breath",
        sentence: "Lum whispered to herself every night before bed.",
      },
      {
        word: "shadow",
        definition: "a dark shape that appears when something blocks light",
        sentence: "The clouds were so thick they filled the sky with shadow.",
      },
      {
        word: "courage",
        definition: "the ability to do something that frightens you",
        sentence: "Lum showed courage when she climbed the hill in the dark.",
      },
    ],
    parentTips:
      "After reading, ask your child: 'What's something small you've done that helped someone?' Remind them that helping isn't about being the biggest or the loudest — it's about caring enough to try.",
    printables: [
      {
        title: "Color Lum the Lantern",
        type: "coloring",
        url: "#",
      },
      {
        title: "Find the Lost Travelers",
        type: "game",
        url: "#",
      },
    ],
  },
  {
    slug: "the-cloud-who-learned-to-cry",
    title: "The Cloud Who Learned to Cry",
    coverImage:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    ageRange: "3–5",
    themes: ["emotions", "kindness"],
    readTime: "4 min",
    description:
      "Cloudy can make rain but feels embarrassed. A wise owl helps her understand that all feelings are okay, even the messy ones.",
    content: `High up in the sky, where the blue turns to navy and the stars come out to twinkle, there lived a small cloud named Cloudy. Cloudy was soft and white and fluffy — the softest cloud in the whole sky.

But Cloudy had a problem. Sometimes, when the seasons changed and the flowers needed water, Cloudy would feel a rumble deep inside. A rumble that grew and grew until —

*plip plip plip* — rain would fall.

And every time it did, the other clouds would giggle.

"Oh look, Cloudy's leaking again," they would say, drifting past in their perfect gray formations.

"I'm not leaking!" Cloudy would shout, her edges going pink with embarrassment. "It's just... I can't control it!"

Cloudy tried everything. She held her rumbles in so tight that her whole body shook. She practiced making only mist — just a gentle, invisible dampness. But every spring, no matter what she did, the feelings inside her would build up until they had to come out.

One night, a little owl landed on a branch near Cloudy.

"Dear Cloud," the owl said softly, "why are you so afraid of what the others think?"

"Because crying feels so messy," Cloudy whispered. "And everyone laughs."

The owl ruffled her feathers and thought for a long moment.

"Cloudy," she said at last, "do you know what happens when you let your feelings out? The flowers below — they grow. The little rivers that the deer drink from — they fill. The roots beneath the old oak tree — they drink deep. Your 'mess' is the very thing that makes life possible."

Cloudy thought about this for a long time.

"So... my rumbling isn't something to be embarrassed about?"

"Little Cloud," the owl said warmly, "your heart is so full that it overflows. That's not weakness. That's what makes you powerful."

From that day on, Cloudy stopped holding her feelings in. When she felt the rumble, she let it grow — and she let it go. And whenever the other clouds giggled, Cloudy simply smiled to herself and thought about the wildflowers blooming below.

Because Cloudy knew something the other clouds hadn't learned yet: **the most beautiful things in the world often start with a feeling that looks a lot like tears.**`,
    discussionQuestions: [
      "Why was Cloudy embarrassed about the rain?",
      "How did the owl help Cloudy feel better about her feelings?",
      "What feelings make you want to cry? Is that okay?",
    ],
    vocabulary: [
      {
        word: "embarrassed",
        definition: "feeling shy or ashamed about something",
        sentence: "Cloudy felt embarrassed when the other clouds giggled.",
      },
      {
        word: "overflows",
        definition: "when something is so full it spills over the edges",
        sentence: "The glass overflowed when she poured too much juice.",
      },
      {
        word: "powerful",
        definition: "very strong; having great strength or influence",
        sentence: "Rain is powerful — it helps everything on Earth grow.",
      },
    ],
    parentTips:
      "Use this story to open a conversation about 'messy feelings' — sadness, frustration, and even anger. Explain that all feelings are okay, and that crying is one way our bodies let out feelings that are too big to hold. Ask: 'What do you do when you feel too much inside?'",
    printables: [
      {
        title: "Color Cloudy the Cloud",
        type: "coloring",
        url: "#",
      },
      {
        title: "Rain Cloud Maze",
        type: "activity",
        url: "#",
      },
    ],
  },
  {
    slug: "the-rock-who-wanted-to-roll",
    title: "The Rock Who Wanted to Roll",
    coverImage:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    ageRange: "4–7",
    themes: ["identity", "curiosity"],
    readTime: "5 min",
    description:
      "Rocky the rock is jealous of rolling things until he learns to appreciate his own stability and the view from one place.",
    content: `On the very top of Pebble Hill, right where the grass met the sky, there sat a small round rock named Rocky. Rocky was gray and smooth and perfectly round — the most perfectly round rock in the entire meadow.

But Rocky wasn't happy about being round.

Every day, he watched the dandelions tumble past, spinning and twirling in the breeze. He watched the soccer balls bounce across the field. He watched the tumbleweeds roll right by his spot — big, busy, important tumbleweeds going places.

"I wish I could roll," Rocky sighed. "I wish I could see what they see."

One spring morning, a strong wind came along — the kind of wind that carries tumbleweeds for miles.

"Mr. Rock!" the wind called out. "Would you like to roll with me today?"

Rocky's heart leaped. "Yes! Oh yes! Please!"

So the wind scooped Rocky up — whoosh! — and off they went.

Rocky rolled down the hill! He rolled through the meadow! He rolled past the stream and over the bridge and through the tall grass where the rabbits live!

It was wonderful. It was terrifying. It was everything Rocky had ever wanted.

And then, after what felt like a hundred rolls, Rocky stopped. He looked around. He didn't know where he was. He didn't recognize anything. The view from the bottom of the hill looked nothing like the view from the top.

"I'm... lost," Rocky whispered.

The wind, kind as always, carried him back to the very top of Pebble Hill. And there — there was the view. The whole meadow spread out below him. The creek glittering in the distance. The sun setting in ribbons of orange and pink.

"I'd never have seen this if I'd kept rolling," Rocky said quietly. And for the first time, he looked at his round, still, stable self and thought: *Maybe there's a reason I'm exactly where I am.*

From that day on, Rocky stopped wishing he could roll. He still watched the dandelions and the tumbleweeds — but now, when they passed by, he'd wave goodbye with a small, satisfied wobble.

Because Rocky had learned something important: **not everyone is meant to roll through life. Some of us are meant to sit still, watch the world go by, and notice all the beautiful things we can see from right where we are.**`,
    discussionQuestions: [
      "Why was Rocky jealous of things that could roll?",
      "What happened when Rocky finally got to roll? Was it what he expected?",
      "What do you like about your life that makes you special?",
    ],
    vocabulary: [
      {
        word: "stable",
        definition: "firm and steady; not likely to move or fall",
        sentence: "The old tree was so stable that Rocky could sit on it all day.",
      },
      {
        word: "tumbleweed",
        definition: "a plant that breaks off and rolls with the wind",
        sentence: "The tumbleweed rolled across the empty road in the dust.",
      },
      {
        word: "appreciate",
        definition: "to recognize the value or worth of something",
        sentence: "After the hike, Rocky began to appreciate how high the hill really was.",
      },
    ],
    parentTips:
      "This story is wonderful for children who compare themselves to others or who feel restless. After reading, ask: 'What can you do really well that someone else might wish they could do?' Help your child notice the unique strengths they already have — just like Rocky.",
    printables: [
      {
        title: "Rocky's Journey Maze",
        type: "activity",
        url: "#",
      },
      {
        title: "Color the Meadow Scene",
        type: "coloring",
        url: "#",
      },
    ],
  },
];

export function getStories(): Story[] {
  return storyFiles;
}

export function getStoryBySlug(slug: string): Story | null {
  return storyFiles.find((s) => s.slug === slug) || null;
}

export function getFeaturedStories(): Story[] {
  return storyFiles.slice(0, 3);
}

export const themes = [
  { id: "emotions", label: "Emotions", emoji: "💛" },
  { id: "adventure", label: "Adventure", emoji: "🌿" },
  { id: "kindness", label: "Kindness", emoji: "🌸" },
  { id: "bedtime", label: "Bedtime", emoji: "🌙" },
  { id: "curiosity", label: "Curiosity", emoji: "🔭" },
  { id: "friendship", label: "Friendship", emoji: "🤝" },
  { id: "courage", label: "Courage", emoji: "⭐" },
];
