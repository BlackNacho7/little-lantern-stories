export interface Story {
  slug: string;
  title: string;
  coverImage: string;
  ageRange: string;
  level: number; // 1=Age 2-3, 2=Age 3-4, 3=Age 4-6, 4=Age 6-8, 5=Age 8+
  themes: string[];
  extraTags?: string[];
  readTime: string;
  description: string;
  content: string;
  discussionQuestions: string[];
  vocabulary: { word: string; definition: string; sentence: string }[];
  parentTips: string;
  printables: { title: string; type: string; url: string }[];
  songs: { title: string; lyrics: string }[];
}

// --- Notion CMS ---
// Set NOTION_TOKEN and NOTION_DATABASE_ID env vars to pull stories from Notion.
// Stories from Notion will override local stories when configured.
export function getStories(): Story[] {
  return localStories;
}

export function getStoryBySlug(slug: string): Story | undefined {
  return localStories.find((s) => s.slug === slug);
}

export const localStories = [
  {
    slug: "bennys-cozy-bed",
    title: "Benny's Cozy Bed",
    coverImage: "https://picsum.photos/seed/cozy-bed-blanket/800/600",
    ageRange: "2–3",
    level: 1,
    themes: ["bedtime", "safety", "routine"],
    extraTags: ["Calm", "Bedtime"],
    readTime: "3 min",
    description: "Benny the bear loves his cozy bed more than anything. When he can't find his favorite blanket one night, Mama Bear helps him feel safe again.",
    content: `Welcome, little dreamer! I'm so happy you're here with me tonight. Are you ready for a cozy, sleepy story?

This is a story about Benny the bear. Benny was a little bear with soft brown fur and the sleepiest eyes you ever saw.

Benny had a bed. And not just any bed — the coziest, softest, warm-est bed in the whole wide world.

In his bed, Benny had his pillow. His pillow was fluffy. Fluffy, fluffy, fluffy.

In his bed, Benny had his blanket. His blanket was warm. Warm, warm, warm.

And in his bed, Benny felt safe. Safe, safe, safe.

Every night, Benny would climb into his cozy bed. He would pull his blanket up to his ears. He would snuggle into his fluffy pillow. And he would whisper:

"My bed. My cozy, cozy bed."

One night, something went wrong.

Benny climbed into his bed. He reached for his blanket.

But — oh no! — his blanket was not there!

Benny looked left. Benny looked right. Benny looked under the pillow.

No blanket. No warm, warm, warm blanket.

Benny's eyes started to feel wibbly. His bottom lip started to feel wobbly.

"Mama?" Benny called softly. "Mama, my blanket is lost!"

Mama Bear came into the room. She sat on the edge of the bed.

"Oh, Benny," Mama Bear said softly. "Let's find your warm blanket."

They looked together. They looked under the bed.

There it was! Benny's blanket had fallen on the floor!

Benny hugged his blanket tight. It was warm again. Warm, warm, warm.

"Better?" Mama Bear asked.

"Better," Benny whispered.

Mama Bear kissed Benny's head. "Goodnight, my little bear. Sleep tight."

Benny pulled his blanket up to his ears. He snuggled into his fluffy pillow. And he whispered:

"My bed. My cozy, cozy bed."

And Benny slept. Safely. Warmly. Cozily.

And so, sweet little dreamer, it's time for you to sleep too. Close your eyes. Feel safe. And dream the dreamiest dreams. Goodnight. 🌙`,
    discussionQuestions: [
      "What made Benny feel safe?",
      "What did Benny's blanket feel like?",
      "Do you have a favorite blanket or toy that makes you feel safe?",
    ],
    vocabulary: [
      { word: "cozy", definition: "warm, soft, and comfortable like a hug", sentence: "Benny's bed was the coziest in the whole wide world." },
      { word: "safe", definition: "feeling protected and not worried", sentence: "Benny felt safe in his warm, warm bed." },
      { word: "snuggle", definition: "to curl up close and comfortable", sentence: "Benny snuggled into his fluffy pillow." },
    ],
    parentTips: "This is a perfect bedtime story for the youngest listeners. Focus on the repetitive, soothing language. The repetition of 'warm, warm, warm' and 'safe, safe, safe' helps young children feel the comfort of routine. Ask your child what makes THEM feel safe at bedtime.",
    printables: [
      { title: "Color Benny the Bear", type: "coloring", url: "/printables/benny-bear-coloring.pdf" },
      { title: "Draw Your Cozy Bed", type: "activity", url: "/printables/my-cozy-bed.pdf" },
    ],
    songs: [
      { title: "The Cozy Bed Song", lyrics: "Pull up the blanket, warm and tight, / Close your eyes and say goodnight! / Safe and sound and cozy too, / The best things happen when we're through!" },
    ],
  },
  {
    slug: "wheres-my-family",
    title: "Where's My Family?",
    coverImage: "https://picsum.photos/seed/bunny-family-meadow/800/600",
    ageRange: "2–3",
    level: 1,
    themes: ["reunion", "family", "friendship"],
    extraTags: ["Calm", "Bedtime"],
    readTime: "3 min",
    description: "Little Rabbit wanders away from his family and gets a little lost. But with the help of a friendly bird, he finds his way back — and learns that families always find each other.",
    content: `Welcome, little dreamer! I'm so happy you're here with me tonight. Are you ready for a sweet little story?

This is a story about Little Rabbit. Little Rabbit was small and soft and had the longest ears you ever saw.

Little Rabbit had a family. Mama Rabbit and Papa Rabbit and Grandma Rabbit too! They lived in a cozy burrow under the big oak tree.

One sunny morning, Little Rabbit went to explore. Hop, hop, hop! He hopped over the hill.

He saw pretty flowers. He saw butterflies. He saw mushrooms.

But then — oh no! — Little Rabbit looked around.

Where was his family? Where was the big oak tree? Where was his cozy burrow?

Little Rabbit didn't know. Little Rabbit felt small.

"I'm looking for my family," Little Rabbit said. "Have you seen them?"

A friendly bird flew down. "Chirp chirp! What do they look like?"

"My mama has soft brown fur," Little Rabbit said. "And my papa has a white tail. And my grandma makes the best carrot soup!"

The bird listened. Then the bird pointed with one wing.

"Thataway! Big tree! I hear rabbits!"

Little Rabbit hopped as fast as he could. And there it was! The big oak tree! And there was his family!

Mama Rabbit opened her arms. "Little Rabbit! There you are!"

Little Rabbit ran and ran and ran — right into Mama Rabbit's arms.

"You found your way back," Mama Rabbit said, hugging him tight. "You found your way back."

Little Rabbit felt warm. Little Rabbit felt safe.

"Never again," Little Rabbit whispered. "I'll stay close."

But he knew: even if he wandered again, his family would always be there. And they would always, always find each other.

And so our story comes to an end. But you know what? Little Rabbit is safe. And so are you. Goodnight, little dreamer. 🌙`,
    discussionQuestions: [
      "How did Little Rabbit feel when he couldn't find his family?",
      "Who helped Little Rabbit find his way back?",
      "Who helps you feel safe when you're far from home?",
    ],
    vocabulary: [
      { word: "family", definition: "the people who love you and take care of you", sentence: "Little Rabbit has a family who loves him very much." },
      { word: "explore", definition: "to go and look around somewhere new", sentence: "Little Rabbit loved to explore the meadow." },
      { word: "safe", definition: "feeling protected and loved", sentence: "Little Rabbit felt safe in Mama Rabbit's arms." },
    ],
    parentTips: "This story touches on separation anxiety — a very real concern for young children. The reassuring ending ('families always find each other') provides comfort. Read it when your child might be nervous about being away from you. Ask: 'Who is YOUR family?'",
    printables: [
      { title: "Color Little Rabbit's Family", type: "coloring", url: "/printables/little-rabbit-family-coloring.pdf" },
      { title: "Draw Your Family", type: "activity", url: "/printables/my-family.pdf" },
    ],
    songs: [
      { title: "The Family Finds Each Other Song", lyrics: "Families find each other, no matter where you've been, / Through the woods and over streams, again and again! / You've got people who love you, people who care, / And they'll always, always find you there!" },
    ],
  },
  {
    slug: "ollies-noisy-morning",
    title: "Ollie's Noisy Morning",
    coverImage: "https://picsum.photos/seed/duckling-puddle-morning/800/600",
    ageRange: "2–3",
    level: 1,
    themes: ["routine", "first experiences", "imagination"],
    extraTags: ["Calm", "Bedtime"],
    readTime: "3 min",
    description: "Ollie the duck wakes up to all kinds of sounds — splash, quack, crunch! But everything has its own special sound, and Ollie learns that morning sounds are the best way to start the day.",
    content: `Welcome, little dreamer! I'm so happy you're here with me. Are you ready for a fun, noisy story?

This is a story about Ollie the duck. Ollie was a fluffy yellow duckling with bright orange feet.

Every morning, Ollie woke up to sounds. Good morning sounds!

First — splash! Ollie opened his eyes. The sun was peeking through the window.

Splash! Ollie's feet went into his cozy pond. The water was cool. Cool, cool, cool.

Quack! Ollie's tummy was hungry. He found a worm. Crunch crunch crunch!

Splash! Ollie played in the puddles. Jump! Jump! Jump in the puddle!

Then — quack quack! Ollie's mama called. "Time to come home, Ollie!"

Ollie waddled back to Mama Duck. She gave him a big, warm hug.

"You had a busy morning," Mama Duck said.

Ollie nodded. He was tired. But he was happy.

Because the best part of every morning? Was the sounds. Splash! Quack! Crunch! And Mama Duck's hug.

And so our story comes to an end. What sounds do YOU hear in the morning? Splash! Crunch! Quack! All the good sounds! Sweet dreams, little one. 🌙`,
    discussionQuestions: [
      "What sounds did Ollie hear in the morning?",
      "What was Ollie's favorite part of the morning?",
      "What sounds do YOU hear in the morning?",
    ],
    vocabulary: [
      { word: "morning", definition: "the start of the day, when the sun comes up", sentence: "Ollie loved his busy morning routine." },
      { word: "splash", definition: "the sound water makes when something goes into it", sentence: "Splash! Ollie jumped into the cool pond." },
      { word: "routine", definition: "the same things you do every day, in the same order", sentence: "Ollie knew his morning routine — splash, eat, play, home!" },
    ],
    parentTips: "This story celebrates morning routines. The onomatopoeia (splash, quack, crunch) makes it fun to read aloud. After reading, walk through YOUR morning routine. Routines give children a sense of security and control.",
    printables: [
      { title: "Color Ollie the Duckling", type: "coloring", url: "/printables/ollie-duck-coloring.pdf" },
      { title: "Morning Sounds Matching", type: "activity", url: "/printables/morning-sounds.pdf" },
    ],
    songs: [
      { title: "The Morning Sounds Song", lyrics: "Splash in the water, cool and bright! / Quack quack quack, morning light! / Crunchy breakfast, jump and play! / Morning sounds start every day!" },
    ],
  },
  {
    slug: "the-curious-kitten",
    title: "The Curious Kitten",
    coverImage: "https://picsum.photos/seed/curious-kitten-window/800/600",
    ageRange: "3–4",
    level: 2,
    themes: ["curiosity", "exploration", "courage"],
    extraTags: ["Adventure", "Emotional Learning"],
    readTime: "4 min",
    description: "Whiskers is a tiny kitten who can't stop asking 'Why?' About everything. When she asks too many questions at once, the other cats get annoyed — until Whiskers' curiosity leads her to something wonderful.",
    content: `Welcome, little dreamer! I'm so happy you're here with me tonight. Are you ready for a cozy story?

This is a story about a little kitten named Whiskers. Whiskers was the smallest kitten in her family. She had soft gray fur and the biggest, roundest eyes.

And Whiskers was curious. Oh my, was she curious!

"Why is the sky blue?" Whiskers would ask.

"Why do birds fly?" Whiskers would ask.

"Why does the moon follow us when we walk?"

"Why, why, why, WHY?"

The big cats would sigh. "Whiskers! Too many questions!"

One day, the big cats went out. Whiskers was alone. She heard a strange sound outside.

CRICKET-CRICKET-CRICKET!

What was that sound? Whiskers had to know.

She crept to the window. She saw a little cricket sitting on a rock, making the most amazing sounds.

"Hello!" Whiskers said. "What are you?"

"I'm a cricket," said the cricket. "I make music with my wings!"

"Music? With your wings? How? Why? When did you learn?"

The cricket laughed. "I don't know why! I just can!"

Whiskers sat and listened to the cricket's music all afternoon.

When the big cats came home, they found Whiskers sitting peacefully by the window.

"What did you learn today?" they asked.

"I learned that sometimes," Whiskers said, "you don't need to know why. You can just enjoy."

And from that day on, the big cats didn't mind Whiskers' questions quite so much. Because sometimes, the best part of being curious isn't the answers — it's all the wonderful things you get to discover.

And so our story comes to an end. What sounds do YOU hear at night? Sweet dreams, little dreamer. 🌙`,
    discussionQuestions: [
      "Why did the other cats get annoyed with Whiskers?",
      "What wonderful thing did Whiskers discover?",
      "What's something YOU are curious about?",
    ],
    vocabulary: [
      { word: "curious", definition: "wanting to know why things are the way they are", sentence: "Whiskers was the most curious kitten in the whole town." },
      { word: "discover", definition: "to find something new for the first time", sentence: "Whiskers got to discover a cricket's music." },
      { word: "wonderful", definition: "so amazing and surprising that it makes you happy", sentence: "The cricket made the most wonderful music Whiskers had ever heard." },
    ],
    parentTips: "This story celebrates curiosity without giving all the answers. For very curious children, this story validates that asking questions is a wonderful thing. After reading, ask: 'What are YOU curious about?'",
    printables: [
      { title: "Color Curious Whiskers", type: "coloring", url: "/printables/whiskers-coloring.pdf" },
      { title: "Draw Something You're Curious About", type: "activity", url: "/printables/my-curiosity.pdf" },
    ],
    songs: [
      { title: "The Curious Kitten Song", lyrics: "Why, why, why — I want to know! / Why does the river softly flow? / Why does the cricket sing all day? / Curiosity lights the way!" },
    ],
  },
  {
    slug: "the-sleepy-star",
    title: "The Sleepy Star",
    coverImage: "https://picsum.photos/seed/sleepy-star/800/600",
    ageRange: "2–3",
    level: 1,
    themes: ["bedtime", "emotions", "safety"],
    extraTags: ["Calm", "Bedtime"],
    readTime: "3 min",
    description: "Twinkle the star is so tired she can't stay awake long enough to light up the night sky. But when a kind cloud wraps her in warmth, Twinkle learns that sometimes the best thing to do is rest.",
    content: `Welcome, little dreamer! I'm Moonbeam, and I'm so happy you're here with me tonight. Are you ready for a dreamy story?

High up in the velvet sky, there lived a little star named Twinkle. She was one of the smallest stars in the whole sky — but she had the warmest, brightest glow of all.

Every night, Twinkle would shine as hard as she could. She wanted to light up the whole sky for all the children on Earth who looked up at her.

But Twinkle was so small, and she worked so hard, that by midnight she would start to droop.

"Oh no," Twinkle yawned. "I'm so sleepy. But I have to keep shining!"

And she would try and try. But her light would grow dim and fluttery.

One night, a soft cloud drifted by. The cloud looked at tired little Twinkle and felt very sad.

"Little star," the cloud said gently, "why are you trying so hard?"

"I have to shine for all the children!" Twinkle said. "What if they look up and I'm not bright enough?"

The cloud smiled warmly. "Little Twinkle, you don't have to shine all night. You can rest. And when you rest, the moon will watch over the sky. And when you wake up, you'll glow even brighter."

"But what about the children?" Twinkle whispered.

"The children will be sleeping too," the cloud said softly. "And when they wake up in the morning, there you will be — bright and rested and ready for a new night."

Twinkle thought about this. She was so, so tired.

So she did something very hard. She let herself rest. She let herself be small and sleepy and not shine for just a little while.

And you know what happened?

The cloud wrapped her in the softest, warmest blanket of all — a gentle cloud hug. And Twinkle slept the sweetest little star-sleep you ever saw.

And when morning came, she woke up feeling wonderful. And that night, she glowed brighter than ever before.

And Twinkle learned something very important: rest is not lazy. Rest is how we fill back up so we can glow again.

Sweet dreams, little star. 🌙✨`,
    discussionQuestions: [
      "Why was Twinkle so tired?",
      "What did the cloud tell Twinkle about resting?",
      "Have you ever felt too tired to do something? What helped you?",
      "What did Twinkle learn about resting?",
    ],
    vocabulary: [
      { word: "velvet", definition: "very soft, like a smooth blanket", sentence: "The velvet sky was dark and full of twinkling lights." },
      { word: "fluttery", definition: "moving in a weak, shaky way", sentence: "Twinkle's light grew fluttery because she was so tired." },
      { word: "warmed", definition: "to make someone feel cozy and cared for", sentence: "The cloud hug warmed Twinkle and helped her fall asleep." },
    ],
    parentTips: "This story is perfect for bedtime or when your child is overtired and fighting sleep. Talk about how rest helps us — just like Twinkle glowed brighter after resting, we feel better after sleep. Ask: 'How do you feel after a good night's rest?'",
    printables: [
      { title: "Color Twinkle the Star", type: "coloring", url: "/printables/twinkle-star-coloring.pdf" },
      { title: "Cloud Shapes Maze", type: "activity", url: "/printables/cloud-maze.pdf" },
    ],
    songs: [
      { title: "The Sleepy Star Song", lyrics: "Twinkle, twinkle, little star, / Rest your glow, it won't go far! / When you're tired, close your eyes, / Sweet dreams come as a gentle surprise!" },
    ],
  },
  {
    slug: "the-grumpy-garden",
    title: "The Grumpy Garden",
    coverImage: "https://picsum.photos/seed/garden-flowers/800/600",
    ageRange: "3–4",
    level: 2,
    themes: ["friendship", "kindness", "problem-solving"],
    extraTags: ["Adventure", "Emotional Learning"],
    readTime: "5 min",
    description: "Oliver the gardener is in a grumpy mood and nothing is going right in his garden. But when a little mouse named Mia asks to help, Oliver learns that sometimes the best way to feel better is to share what you're doing with someone else.",
    content: `Welcome, little dreamers! I'm Moonbeam, and I'm so happy you're here with me today. Are you ready for a wonderful adventure?

Oliver had been a gardener for a very, very long time. He knew everything about growing flowers — when to plant them, how much water to give them, when to trim the leaves.

But sometimes, even the best gardeners wake up in a grumpy mood.

One gray morning, Oliver went outside to check on his garden. And nothing looked right.

The roses were droopy. The tulips were too short. The sunflowers were leaning the wrong way.

"Grumble grumble," Oliver muttered. He pulled at the weeds. He snapped at the snails. He frowned so hard his face hurt.

And the garden? The garden looked grumpy too.

That was when a little mouse named Mia peeked over the garden wall.

"Hello, Mr. Gardner," Mia said softly. "Can I help?"

Oliver looked at little Mia. She had bright eyes and dirt on her nose.

"I'm afraid this garden is too grumpy for helping," he said gruffly.

Mia didn't go away. She just sat there, watching quietly.

And slowly, something shifted. Oliver kept working. But now someone was watching. And now someone was asking questions.

"Why do the roses droop?" Mia asked.

"Because they need more water than I thought," Oliver said.

"Oh," Mia said. And she went and got a tiny bucket and brought it back, full of water.

Together, they watered the roses. And you know what? The roses looked a little less droopy right away.

"Mr. Oliver," Mia said, "I think your garden isn't grumpy. I think maybe you're just tired."

Oliver stopped and thought about this.

And you know what? She was right. He was tired. He had been working so hard, all by himself, that he forgot why he loved gardening in the first place.

"Thank you, Mia," Oliver said. And for the first time that day, he smiled.

And the garden? The garden smiled too.

And Oliver learned something important: sometimes when we're grumpy, we don't need to be alone. We just need someone kind to sit with us until we're ready to smile again.

And so our adventure comes to an end. But every end is just another beginning! Until next time, little dreamers, keep imagining, keep dreaming, and always be kind. Sweet dreams. 🌻🐭`,
    discussionQuestions: [
      "Why was Oliver so grumpy that morning?",
      "Why didn't Mia leave when Oliver was grumpy at her?",
      "What did Mia help Oliver realize?",
      "Have you ever been grumpy and felt better after someone kept you company?",
    ],
    vocabulary: [
      { word: "grumpy", definition: "in a bad mood, easily annoyed", sentence: "Oliver woke up feeling grumpy and nothing seemed to go right." },
      { word: "droopy", definition: "hanging down limply, like a flower that needs water", sentence: "The roses looked droopy because they were thirsty." },
      { word: "gruffly", definition: "speaking in a rough, unfriendly way", sentence: "Oliver spoke gruffly, but his heart wasn't really in it." },
    ],
    parentTips: "This story helps children understand that adults get grumpy too — and that sometimes the best thing isn't advice, but just presence. After reading, ask: 'What did Mia do that helped Oliver feel better?' This story is great for teaching empathy — Mia didn't try to fix Oliver, she just stayed.",
    printables: [
      { title: "Color Oliver's Garden", type: "coloring", url: "/printables/oliver-garden-coloring.pdf" },
      { title: "Garden Word Search", type: "activity", url: "/printables/garden-wordsearch.pdf" },
    ],
    songs: [
      { title: "The Garden Song", lyrics: "Dig in the dirt, plant a seed! / Water it well and watch it grow! / Some days are gray, some days are bright, / But love makes everything right!" },
    ],
  },
  {
    slug: "marina-makes-a-friend",
    title: "Marina Makes a Friend",
    coverImage: "https://picsum.photos/seed/shy-girl-garden/800/600",
    ageRange: "3–4",
    level: 2,
    themes: ["friendship", "imagination", "courage"],
    extraTags: ["Adventure", "Emotional Learning"],
    readTime: "5 min",
    description: "Marina is a quiet little girl who finds it hard to talk to other children. But when she meets an elderly gardener who is also a little lonely, they discover that friendship can bloom in the quietest moments.",
    content: `Welcome, little dreamers! I'm Moonbeam, and I'm so happy you're here with me today. Are you ready for a wonderful adventure?

Marina was a quiet little girl who loved to watch. While other children ran and shouted on the playground, Marina would sit on the bench and watch the butterflies dance.

Marina wanted to play with the other children. She did! But whenever she thought about walking over to them, her words seemed to get stuck inside her throat.

"Hello," she would try to say. But the word would only come out as a whisper. And the other children wouldn't hear her. So they would run off to play, and Marina would stay on her bench, feeling very alone.

One day, Marina was watching the butterflies as usual when she noticed something she hadn't seen before. Behind the playground, there was a beautiful garden — a garden full of sunflowers and roses and lavender.

And in the garden, there was an old woman named Mrs. Chen. She was kneeling in the dirt, planting flowers, humming a soft song to herself.

Marina watched and watched. She wasn't scared of Mrs. Chen. She wasn't scared of anything about the garden.

After a while, Mrs. Chen looked up and saw Marina.

"Hello, little one," Mrs. Chen said with a warm smile. "Would you like to come see my garden?"

Marina's words got stuck, like they always did. But she nodded her head. And she walked — slowly, carefully — into the garden.

"See this one?" Mrs. Chen said, pointing to a tiny seed. "This is a sunflower seed. Right now, it's just a seed. But give it time, and water, and sun — and it will grow into something tall and bright and beautiful."

Marina looked at the tiny seed. It looked so small. So full of possibility.

"Do you want to plant one?" Mrs. Chen asked.

And Marina — for the first time — whispered words that came out loud enough to hear.

"Yes," she said. "I would like that."

So Marina and Mrs. Chen planted sunflower seeds together. And as they planted, Mrs. Chen didn't ask Marina to talk. She didn't need Marina to say anything at all. She just worked alongside her, peaceful and kind.

Weeks went by. Marina visited Mrs. Chen every day. And slowly, very slowly, Marina started saying more and more words — not because anyone made her, but because she felt safe.

And the sunflowers grew. Tall and bright and beautiful.

One morning, when Marina was sitting by her sunflower, some children from the playground walked over.

"Wow!" said a girl named Zoe. "Your sunflower is amazing! Can we help you plant more?"

And Marina — her heart going pitter-patter — looked at the children. She looked at her sunflower. She took a deep breath.

And she said: "Yes."

And that was how Marina made her first friend. And her second. And her third.

And it all started with a tiny seed, a kind heart, and the courage to take the first quiet step.

And so our adventure comes to an end. But every end is just another beginning! Until next time, little dreamers, keep imagining, keep dreaming, and always be kind. Sweet dreams. 🌻💜`,
    discussionQuestions: [
      "Why did Marina find it hard to talk to the other children?",
      "Why was Marina not scared to visit Mrs. Chen's garden?",
      "How did Mrs. Chen make Marina feel safe enough to talk?",
      "Has there been a time when you felt shy? What helped you feel braver?",
    ],
    vocabulary: [
      { word: "quiet", definition: "making very little sound; also, someone who likes peace and calm", sentence: "Marina was quiet, but she had so much to say when she felt safe." },
      { word: "possibility", definition: "something that could become amazing with time and care", sentence: "The tiny seed was full of possibility — it could grow into something beautiful." },
      { word: "courage", definition: "doing something even when it feels scary", sentence: "It took courage for Marina to say yes, but she did it anyway." },
    ],
    parentTips: "This story validates quiet and shy children while also gently encouraging connection. Ask your child: 'What makes you feel brave when you're meeting new people?' For quiet children, focus on the message that they don't have to change who they are.",
    printables: [
      { title: "Color Marina and the Sunflower", type: "coloring", url: "/printables/marina-sunflower-coloring.pdf" },
      { title: "Plant a Seed Activity", type: "activity", url: "/printables/plant-seed-activity.pdf" },
    ],
    songs: [
      { title: "The Tiny Seed Song", lyrics: "One tiny seed, so small and round, / Plant it in the ground! / Water it with care, / Sunlight in the air! / Watch it grow and grow and grow, / Watch it bloom and steal the show!" },
    ],
  },
  {
    slug: "a-home-for-millie",
    title: "A Home for Millie",
    coverImage: "https://picsum.photos/seed/finding-home-cozy/800/600",
    ageRange: "3–4",
    level: 2,
    themes: ["belonging", "friendship", "imagination"],
    extraTags: ["Calm", "Bedtime"],
    readTime: "5 min",
    description: "Millie the moth has nowhere to go. She searches the forest for a place to belong, but every creature seems to have their own special spot. Will Millie ever find a home where she fits in?",
    content: `Welcome, little dreamers! I'm Moonbeam, and I'm so happy you're here with me today. Are you ready for a wonderful adventure?

Millie was a small, dusty-brown moth with delicate wings. And Millie was very, very lost.

She didn't have a home. She didn't have a family. She didn't have a place to belong.

Every night, Millie would fly around the forest, looking for somewhere to stay.

"Hello," she would say to the birds in their nest. "Can I stay with you?"

"Oh no," the birds said. "This nest is just for our family. But you can stay for a visit!"

But a visit wasn't enough. Millie wanted a home.

She flew to the squirrels' tree hole. "Can I live here?"

"Oh no," the squirrels said. "This hole is just for our family. But you can stay for a visit!"

She flew to the rabbits' burrow. "Can I sleep here?"

"Oh no," the rabbits said. "This burrow is just for our family. But you can stay for a visit!"

Every answer was the same. Everyone had a place, but no place was for Millie.

One rainy night, Millie was very tired. She sat on a wet leaf and cried.

An old owl named Helena landed nearby.

"Why are you crying, little moth?" Helena asked.

"I don't have a home," Millie said. "Everyone has a place but me."

Helena thought about this. Then she said: "Come with me."

Helena flew Millie to a great big oak tree — the biggest tree in the forest.

"This tree has so many places," Helena said. "Look — up there is the birds' nest. Down there is the squirrels' hole. In the roots is the rabbits' burrow. But you know what this tree has that none of those places have?"

"What?" Millie asked.

"A beautiful spot right here, in the bark, just big enough for a little moth. It's warm, and it's dry, and it has a view of the whole forest. And Millie? It's been waiting for you."

Millie looked. And there it was — a perfect little hollow in the bark, just her size. It was cozy and safe and dry.

"It's my home?" Millie whispered.

"It's your home," Helena smiled.

And Millie learned something very important: sometimes the right place is waiting for you. You just have to keep looking. And sometimes, it takes a kind friend to show you where you belong.

And so our adventure comes to an end. But every end is just another beginning! Until next time, little dreamers, keep imagining, keep dreaming, and always be kind. Sweet dreams. 🏠💛`,
    discussionQuestions: [
      "Why did Millie feel like she didn't belong anywhere?",
      "How did Helena help Millie find a home?",
      "Have you ever felt like you didn't fit in somewhere? What helped?",
      "What did Millie learn about finding where you belong?",
    ],
    vocabulary: [
      { word: "belong", definition: "to feel like you are in the right place, where you fit in", sentence: "Millie finally felt like she belonged — in her cozy little home in the oak tree." },
      { word: "cozy", definition: "warm, comfortable, and safe", sentence: "Millie's new home was the coziest spot in the whole forest." },
      { word: "hollow", definition: "a small space inside something solid, like a hole in a tree", sentence: "The tree had a perfect little hollow just right for Millie." },
    ],
    parentTips: "This story is wonderful for children who have moved, changed schools, or are struggling to fit in. It teaches that belonging isn't about being exactly like everyone else — it's about finding the place that's right for YOU. After reading, talk about how every person has a place where they belong.",
    printables: [
      { title: "Color Millie the Moth", type: "coloring", url: "/printables/millie-moth-coloring.pdf" },
      { title: "Draw Your Home Activity", type: "activity", url: "/printables/draw-your-home.pdf" },
    ],
    songs: [
      { title: "The Millie's Home Song", lyrics: "I'm looking, looking, high and low, / For a place where I can go! / But I know, and I believe, / There's a perfect spot for me! / Cozy, warm, and just my size, / Where my soul and heart lies!" },
    ],
  },
  {
    slug: "the-little-cloud-who-was-shy",
    title: "The Little Cloud Who Was Shy",
    coverImage: "https://picsum.photos/seed/shy-cloud-sky/800/600",
    ageRange: "3–6",
    level: 2,
    themes: ["emotions", "self-expression", "courage"],
    extraTags: ["Adventure", "Emotional Learning"],
    readTime: "5 min",
    description: "Cumulus is the smallest cloud in the whole sky, and she's very shy. But when the flowers below need rain, it's Cumulus's gentle, quiet rain that saves the day.",
    content: "Welcome, little dreamers! I'm Moonbeam, and I'm so happy you're here with me today. Are you ready for a wonderful adventure?\n\nHigh up in the big blue sky, there lived a little cloud named Cumulus.\n\nCumulus was the smallest cloud in the whole sky. She was soft and white and puffy — but so, so small.\n\nAnd Cumulus was very, very shy.\n\nThe big clouds — the ones who took up the whole sky — they were always showing off. They made big thunder sounds and dramatic lightning flashes. Everyone looked at them.\n\nBut Cumulus? Cumulus would hide. She would float behind the big clouds so nobody could see her.\n\n\"I don't want anyone to look at me,\" Cumulus would whisper. \"What if they think I'm too small? What if they laugh?\"\n\nSo Cumulus stayed hidden. And she watched. And she listened.\n\nOne very hot summer day, Cumulus heard something. It was a tiny voice coming from far, far below. It was the flowers in the meadow.\n\n\"Please, please,\" the flowers were crying. \"We need water so badly. We're so thirsty.\"\n\nThe big clouds heard the flowers too. But they were too busy making thunder shows for each other.\n\nCumulus felt her heart go soft. Those poor flowers! They needed help!\n\nBut... everyone was looking at the sky. What if they saw her? What if they laughed?\n\nCumulus took a deep breath. And then another.\n\nAnd then — very quietly — she floated down toward the meadow. She was so small that nobody noticed. Nobody at all.\n\nAnd then Cumulus did something she had never done before. She let herself rain.\n\nNot a big dramatic storm. Not thunder and lightning. Just a gentle, soft, quiet rain. Drop by drop by drop.\n\nThe flowers lifted their petals and smiled. \"Thank you, thank you!\" they sang. \"We feel so much better!\"\n\nAnd Cumulus? Cumulus felt something she had never felt before. She felt proud. Not because anyone was watching. But because she had done something kind — something only she could do.\n\nBecause she was small and quiet and gentle. And that was exactly what the flowers needed.\n\nWhen the other clouds finally noticed Cumulus, they didn't laugh. They applauded.\n\n\"That was beautiful!\" they said. \"You have the gentlest rain in the whole sky!\"\n\nAnd Cumulus learned something very important: you don't have to be big and loud to be wonderful. Sometimes the quietest hearts do the most beautiful things.\n\nAnd so our adventure comes to an end. But every end is just another beginning! Until next time, little dreamers, keep imagining, keep dreaming, and always be kind. Sweet dreams. ☁️💜",
    discussionQuestions: [
      "Why was Cumulus hiding from the other clouds?",
      "What made Cumulus decide to help the flowers even though she was shy?",
      "How did Cumulus's small size become an advantage?",
      "What's something you can do quietly that helps others?",
    ],
    vocabulary: [
      { word: "shy", definition: "nervous or uneasy around other people, especially when you think they might be watching", sentence: "Cumulus was shy, but her kindness was louder than her fears." },
      { word: "gentle", definition: "soft, quiet, and careful — like a whisper instead of a shout", sentence: "Cumulus's gentle rain was exactly what the flowers needed." },
      { word: "proud", definition: "feeling good about something you did because it was the right thing to do", sentence: "Cumulus felt proud not because others watched, but because she helped." },
    ],
    parentTips: "This story is a gentle celebration of quiet, introverted children — showing that being small and shy doesn't mean you can't make a big difference. After reading, talk about how different people have different strengths. Remind your child that it's okay to be quiet and gentle — those are beautiful traits, not weaknesses.",
    printables: [
      { title: "Color Cumulus the Little Cloud", type: "coloring", url: "/printables/little-cloud-coloring.pdf" },
      { title: "Cloud Shape Matching", type: "activity", url: "/printables/cloud-matching.pdf" },
    ],
    songs: [
      { title: "The Little Cloud Song", lyrics: "I'm just a little cloud, so small and shy, / But when the flowers need me, I know why! / I'll rain so gently, drop by drop, / Quiet kindness never stops!" },
    ],
  },
,

  {
    slug: "the-star-keepers-daughter",
    title: "The Star Keeper's Daughter",
    coverImage: "https://picsum.photos/seed/star-telescope-night/800/600",
    ageRange: "4–6",
    level: 3,
    themes: ["motivation", "courage", "identity"],
    extraTags: ["Adventure", "Emotional Learning"],
    readTime: "7 min",
    description: "Jess's father is the Star Keeper for the village, but he says Jess is too young to ever climb the tower. When the stars begin to disappear one by one, Jess must be brave and face the long, dark climb alone.",
    content: "Welcome, little dreamers! I'm Moonbeam, and I'm so happy you're here with me today. Are you ready for a wonderful adventure?\n\nHigh on the hill above the village of Thornwood, there stood a tower. And in the tower lived the Star Keeper.\n\nThe Star Keeper's job was important: every night, he would climb the one hundred steps to the top of the tower and light the stars. Because without the Star Keeper, the stars would forget to shine.\n\nThe Star Keeper had a daughter named Jess. Jess had dark hair and bright brown eyes, and she loved the stars more than anything in the whole world.\n\nEvery night, Jess would sit at the bottom of the tower and look up.\n\n\"Father,\" she would call up the steps, \"are the stars shining tonight?\"\n\n\"They are, my dear,\" her father would call back. \"Now come inside. It's late.\"\n\nBut Jess always wanted more. She wanted to climb the tower. She wanted to see the stars from the top — so close you could almost touch them.\n\n\"Father, please,\" Jess would say. \"Can I come up?\"\n\n\"Not yet,\" her father would say. And then, softer: \"The tower is dark and steep. And the stars only show themselves to those who are ready. You're not ready yet, Jess.\"\n\nJess didn't understand. She felt ready. She felt MORE than ready.\n\nOne autumn night, something strange happened.\n\nJess was asleep in her bed when she heard her father cry out. Not a loud cry — a quiet, scared sound. The kind of sound a person makes when something impossible has happened.\n\nJess ran to the window. She looked up at the sky.\n\nThe North Star — the brightest, most important star of all — was gone.\n\nJust... gone.\n\n\"Father!\" Jess ran to the tower. Her father was standing at the bottom, his face white as paper.\n\n\"It's happened,\" he whispered. \"The stars are disappearing. If all the stars go, the village will be lost in darkness forever.\"\n\n\"Can you fix it?\" Jess asked.\n\nHer father shook his head slowly. \"I can only light the stars that are already there. To bring back a star that's gone... you need something else.\"\n\n\"What?\"\n\n\"Courage,\" her father said. \"And a heart that wants to see.\"\n\nJess looked up at the dark patch in the sky where the North Star used to be. She thought about the village — the children who needed the stars to find their way home, the sailors who needed them to cross the sea.\n\n\"I'll go,\" Jess said.\n\nHer father looked at her. \"Jess, you're only a child. The tower is too dark, too high.\"\n\n\"But Father,\" Jess said, \"the stars only show themselves to those who are ready. I think... I think I might be ready now.\"\n\nHer father was quiet for a long time. Then he reached into his coat and pulled out a small silver lighter — the Star Flame, the tool of the Star Keeper.\n\n\"Catch the North Star,\" he said. \"And bring it back to the sky.\"\n\nJess took the silver lighter. It was warm in her hand, like a heartbeat.\n\nAnd she began to climb.\n\nThe first twenty steps were easy. The next twenty were harder. The tower was dark, and Jess could barely see.\n\nThe next twenty steps were very hard. Her legs ached. Her arms were tired. The wind howled through the cracks in the stone walls.\n\n\"I can't do this,\" Jess whispered. \"It's too hard.\"\n\nBut then she thought about the star — how it had been there every night since she was born, lighting her way home. And she thought about all the children in the village who needed it too.\n\nSo she kept climbing.\n\nTen more steps. Five more. One more.\n\nAnd then Jess reached the top.\n\nThe sky above her was vast and dark and more beautiful than she had ever imagined. And there, floating in the middle of the sky — so close she could almost touch it — was the North Star. But it was dim and tired, and it was slowly fading.\n\n\"You're disappearing,\" Jess whispered. \"What's wrong?\"\n\nAnd the star spoke back. Not in words — but in feelings. And Jess understood.\n\nThe North Star had gotten lonely. It had been the brightest star for so long, and no one had thanked it or noticed it or looked up at it. And it had decided, quietly, to stop shining.\n\n\"But we need you,\" Jess said softly. \"I need you. I see you. I thank you.\"\n\nAnd she lit the silver lighter. And she held it up to the North Star.\n\nThe star flickered. And then — slowly, gently — it began to glow again. Brighter than before. Brighter than ever.\n\n\"Thank you, little keeper,\" the star whispered. And Jess smiled, because she knew she had been right.\n\nShe was ready.\n\nWhen Jess climbed back down the tower, her father was waiting at the bottom. He looked at her face — glowing with starlight — and he smiled.\n\n\"The stars only show themselves to those who are ready,\" Jess said. \"I was ready.\"\n\n\"Yes,\" her father said. And for the first time, he stepped aside.\n\n\"Would you like to light the stars with me?\"\n\nAnd Jess climbed the tower every night after that.\n\nAnd so our adventure comes to an end. But every end is just another beginning! Until next time, little dreamers, keep imagining, keep dreaming, and always be kind. Sweet dreams. ⭐🌟✨",
    discussionQuestions: [
      "Why did Jess's father say she wasn't ready to climb the tower?",
      "What did the North Star need to start shining again?",
      "Have you ever felt like no one noticed you or thanked you? How did that feel?",
      "What helped Jess keep climbing even when it was hard?",
    ],
    vocabulary: [
      { word: "courage", definition: "doing something even when it feels scary, because you know it's the right thing to do", sentence: "Jess showed courage when she climbed the dark tower to save the star." },
      { word: "vast", definition: "very, very big — so big you can't see the edges", sentence: "The sky from the top of the tower was vast and covered in thousands of stars." },
      { word: "disappear", definition: "to vanish, to be there one moment and gone the next", sentence: "When the North Star disappeared, the sky felt empty and wrong." },
    ],
    parentTips: "This story explores the motivation to prove yourself and be recognized — a common theme for children this age. Talk about a time your child felt they were ready for something new but had to wait. Ask: 'How did it feel when you finally got to try it?' The story also introduces the idea that sometimes the people we admire (like parents or older siblings) need our help too.",
    printables: [
      { title: "Color Jess and the Star Tower", type: "coloring", url: "/printables/star-keeper-coloring.pdf" },
      { title: "Draw Your Own Constellation", type: "activity", url: "/printables/my-constellation.pdf" },
    ],
    songs: [
      { title: "The Star Keeper's Song", lyrics: "Step by step, I'm climbing high, / To catch a star in the dark night sky! / Courage will light the way for me, / The best things in life are never free!" },
    ],
  },
,

  {
    slug: "sams-big-jump",
    title: "Sam's Big Jump",
    coverImage: "https://picsum.photos/seed/swimming-pool-kid/800/600",
    ageRange: "4-6",
    level: 3,
    themes: ["courage", "identity", "friendship"],
    extraTags: ["Adventure", "Emotional Learning"],
    readTime: "7 min",
    description: "Sam has been swimming all summer but can't jump into the deep end. Everyone else seems fearless. But when his friend Aisha shows him what courage really means, Sam takes the biggest jump of his life.",
    content: "Welcome, little dreamers! I'm Moonbeam, and I'm so happy you're here with me today. Are you ready for a wonderful adventure?\n\nSam loved swimming. He loved the way the water felt cool on his face. He loved kicking his legs and splashing his arms. He loved the feeling of gliding through the blue.\n\nBut there was one thing Sam could not do.\n\nThe deep end.\n\nEvery Saturday, Sam's swim class would practice in the shallow end. And every Saturday, Sam would watch the other kids stand on the edge of the deep end and jump.\n\nSPLASH! They would disappear into the water. And then — TA-DA! — they would pop back up, laughing and grinning.\n\n\"I want to do that,\" Sam said to his friend Aisha. Aisha was the best swimmer in the class.\n\n\"You should!\" Aisha said. \"It's so fun!\"\n\n\"But what if I sink?\" Sam said. \"What if I can't get back up?\"\n\nAisha thought about this. \"Sam, you CAN swim. You swim all the way across the pool. The deep end isn't different water — it's just deeper. You're already a swimmer.\"\n\nWeek after week, Sam watched the others jump in. Every time he walked past the deep end, his stomach would feel wobbly and his hands would get cold.\n\n\"Why am I the only one who's scared?\" Sam asked his mom on the car ride home.\n\n\"You're not,\" his mom said. \"Lots of people are scared of things. Even grown-ups.\"\n\n\"But it doesn't seem that way.\"\n\n\"I know,\" his mom said. \"Sometimes people who are scared still do brave things. And we don't always see the scared part.\"\n\nThe next Saturday, Coach Rivera called everyone to the deep end.\n\n\"Today, we're all going to jump.\"\n\nSam's heart went THUMP-THUMP-THUMP.\n\n\"But Coach,\" Sam said, his voice very small, \"I'm scared.\"\n\nCoach Rivera knelt down to Sam's level.\n\n\"Sam, do you know what courage is?\"\n\n\"Doing something even when it's scary?\" Sam said.\n\n\"That's exactly right. Being brave doesn't mean you're not scared. It means you're scared, and you do it anyway. Because it's important to you.\"\n\n\"But what if I sink?\"\n\n\"You won't sink. You know how to swim. And Aisha will be right there.\"\n\nAisha appeared next to Sam. \"I'll jump with you. You go first, I'll go right after.\"\n\nSam stood at the edge. The deep end looked very deep. Very very deep.\n\nHe didn't want to go. He wanted to run away and hide.\n\nBut he thought about what Coach Rivera had said. Being brave doesn't mean you're not scared. It means you're scared, and you do it anyway.\n\nSam took a deep breath.\n\nAnd he jumped.\n\nFor a moment, Sam felt the scariest feeling in the world. The water rushed up around him and he couldn't see and he couldn't feel the bottom.\n\nAnd then his feet found the surface and he kicked and his arms moved and his head popped up above the water and —\n\nHe was swimming.\n\nHe was SWIMMING in the deep end!\n\n\"SAAAAAM!\" Aisha jumped in next to him. \"YOU DID IT!\"\n\nSam laughed. He laughed so hard he nearly went under. But he didn't care.\n\n\"I did it,\" he said. \"I was scared and I did it anyway.\"\n\n\"That's courage,\" Aisha said, grinning.\n\nAnd Sam knew she was right.\n\nAnd so our adventure comes to an end. But every end is just another beginning! Until next time, little dreamers, keep imagining, keep dreaming, and always be kind. Sweet dreams. 🏊‍♂️💙",
    discussionQuestions: [
      "Why was Sam scared of the deep end even though he knew how to swim?",
      "What did Coach Rivera say courage really means?",
      "Have you ever done something even though you were scared? What happened?",
      "Do you think it's possible to be brave and scared at the same time?",
    ],
    vocabulary: [
      { word: "courage", definition: "doing something even when you are scared, because it is important to you", sentence: "Sam showed courage when he jumped into the deep end, even though he was terrified." },
      { word: "fearless", definition: "feeling no fear at all — not even a little bit", sentence: "The kids who jumped in first looked fearless, but they might have been scared too." },
      { word: "scared", definition: "feeling afraid or worried that something bad might happen", sentence: "Sam was scared of the deep end, but he jumped anyway." },
    ],
    parentTips: "This story is about the difference between being brave and being fearless — an important distinction for this age group. Ask your child: 'What is the bravest thing you have ever done?' Talk about how courage is not the absence of fear, but action despite fear. This is a great story for building resilience.",
    printables: [
      { title: "Color Sam in the Pool", type: "coloring", url: "/printables/sam-swimming-coloring.pdf" },
      { title: "Swimming Badge Reward", type: "activity", url: "/printables/swimming-badge.pdf" },
    ],
    songs: [
      { title: "The Brave Swimmer Song", lyrics: "Splash! I jump into the deep! / My heart goes thump, but I'm still in the swim! / Courage is doing it anyway, / I found my strength in the water today!" },
    ],
  },
,

  {
    slug: "the-mystery-of-the-missing-song",
    title: "The Mystery of the Missing Song",
    coverImage: "https://picsum.photos/seed/singing-bird-forest/800/600",
    ageRange: "6-8",
    level: 4,
    themes: ['identity', 'loss', 'hope', 'emotions'],
    extraTags: ['Adventure', 'Emotional Learning'],
    readTime: "10 min",
    description: "Every morning, a girl named Mira hears the most beautiful song in the world — sung by a small brown bird in the oak tree outside her window. One morning, the song is gone. Mira must follow the clues and face an unexpected truth about loss.",
    content: "Welcome, little dreamers! I'm Moonbeam, and I'm so happy you're here with me today. Are you ready for a wonderful adventure?\n\nEvery morning for as long as Mira could remember, she woke up to the same sound.\n\nTweet-tweet-tee-ooo! Tweet-tweet-tee-ooo!\n\nIt was the brown bird in the old oak tree. The one with the cracked beak and the feathers that never quite lay flat. Mira didn't know the bird's name, but she knew its song the way she knew her own heartbeat.\n\nEvery morning, Mira would open her window — even in winter, even when it was raining — and she would listen. And every morning, the bird would sing.\n\n\"Good morning, little bird,\" Mira would say.\n\nThe bird never answered. But Mira always felt like it heard her anyway.\n\nOne spring morning, Mira woke up and reached for the window. She opened it. She waited.\n\nSilence.\n\nThe oak tree stood there, empty. No brown bird. No cracked-beak song.\n\nMira waited all day. Nothing.\n\nMira waited the next day. Nothing.\n\nMira waited a whole week. Still nothing.\n\n\"The bird is gone,\" her father said gently. \"Sometimes birds go. That's what birds do.\"\n\nBut Mira couldn't accept that. There had to be an answer.\n\nSo she did what any good detective does: she looked for clues.\n\nCLUE NUMBER ONE: A single brown feather, caught in a branch just below the bird's favorite perch. The feather was bent and dull. It looked like it had been there for days.\n\nCLUE NUMBER TWO: Mira found it on the ground beneath the tree. A small, torn piece of nest — the kind of nest the brown bird built every year. Only this one was different. It had been torn apart. Not carefully dismantled. Torn.\n\nCLUE NUMBER THREE: On the far side of the oak tree, pressed into the soft earth, Mira found a footprint. It was small and round, with a deep heel mark. It was not a human footprint. It was not an animal footprint.\n\nMira didn't know whose footprint it was. But she knew one thing: something had happened to the bird's nest. Something had happened to the song.\n\nMira kept searching. She talked to the sparrows, who chirped nervously and flew away. She talked to the old crow who sat on the chimney, who looked at her with one black eye and said nothing.\n\n\"Have you seen the brown bird?\" Mira asked everyone.\n\n\"What brown bird?\" the sparrows asked.\n\n\"The one with the cracked beak. The one who sings.\"\n\n\"Oh,\" the sparrows said. And then, quietly: \"We're sorry about the song.\"\n\n\"What do you mean?\" Mira asked. \"What happened?\"\n\nBut the sparrows just flew away.\n\nFinally, Mira went to see Old Nora — the oldest person in the village, who knew more about the forest than anyone.\n\n\"The brown bird?\" Old Nora said, when Mira asked. \"I remember him. He sang the same song for forty years. Same melody. Same rhythm. Same beautiful notes.\"\n\n\"What happened to him?\" Mira asked.\n\nOld Nora was quiet for a long time.\n\n\"He didn't leave,\" she said finally. \"He died.\"\n\nMira felt her eyes sting. \"But — but —\"\n\n\"The nest was torn because something took the eggs. A cat, maybe. Or a snake. The bird tried to protect them, but...\" Old Nora shook her head. \"He was old, Mira. And broken in more ways than his beak. Sometimes the heart gives out when it can't protect what it loves.\"\n\nMira cried. She cried for the bird. She cried for the song. She cried because some things end and there's nothing you can do to stop them.\n\nBut Old Nora put a hand on Mira's shoulder.\n\n\"Mira,\" she said. \"I want you to look at the oak tree again. Really look.\"\n\nMira wiped her eyes. She walked back to the tree. And she looked — really looked.\n\nAnd there, in a new branch, just a little higher than before, she saw something.\n\nTwo small brown birds. Both with cracked beaks. Both sitting side by side. And then — one of them opened its beak.\n\nTweet-tweet-tee-ooo! Tweet-tweet-tee-ooo!\n\n\"The song isn't gone,\" Mira whispered.\n\nThe birds had found each other. The song had found new wings.\n\nAnd Mira learned something that week that she would carry with her forever: some things we love leave us. But love doesn't stop. It finds new ways to sing.\n\nAnd so our adventure comes to an end. But every end is just another beginning! Until next time, little dreamers, keep imagining, keep dreaming, and always be kind. Sweet dreams. 🐦💜",
    discussionQuestions: ["Why did Mira keep searching even though everyone told her the bird was just 'gone'?", "Old Nora said the bird's heart gave out. What do you think she meant by that?", "How is Mira's story about loss different from losing something small vs. losing someone you love deeply?", 'What do you think the song meant to Mira? What did it mean to the bird?'],
    vocabulary: [{'word': 'mystery', 'definition': "something that hasn't been explained yet — you have to use clues to figure it out", 'sentence': 'The missing song was a mystery that Mira was determined to solve.'}, {'word': 'grief', 'definition': 'the deep sadness you feel when something or someone you love is gone', 'sentence': 'Mira felt grief when she realized the bird would never sing again.'}, {'word': 'determine', 'definition': 'to decide firmly that you will do something, no matter what', 'sentence': 'Mira was determined to find out what happened to the brown bird.'}],
    parentTips: "This story gently introduces the concept of loss and grief — something children this age often encounter for the first time with pets, grandparents, or even wildlife. Use it as a starting point to talk about a time your child experienced something being 'gone.' The story also models healthy grief: crying, asking questions, and eventually finding hope. Remind your child: it's okay to miss things and people, and it's okay to cry.",
    printables: [{'title': 'Color Mira and the Brown Bird', 'type': 'coloring', 'url': '/printables/mira-bird-coloring.pdf'}, {'title': 'Bird Footprint Mystery Clues', 'type': 'activity', 'url': '/printables/bird-mystery.pdf'}],
    songs: [{'title': 'The Missing Song Melody', 'lyrics': 'Tweet-tweet-tee-ooo, tweet-tweet-tee-ooo! / The song is gone, but love stays true! / When one bird stops, another starts, / And love finds new wings and new hearts!'}],
  },
,

  {
    slug: "the-wrong-side-of-the-river",
    title: "The Wrong Side of the River",
    coverImage: "https://picsum.photos/seed/river-village-opposite/800/600",
    ageRange: "6-8",
    level: 4,
    themes: ['prejudice', 'trust', 'courage', 'friendship'],
    extraTags: ['Adventure', 'Emotional Learning'],
    readTime: "10 min",
    description: "The kids on the east side of the river and the west side have been rivals for a hundred years — ever since an old rhyme said one side was better than the other. But when Eli from the east side and Pip from the west both lose their puppies in a flood, they have to work together, breaking a hundred years of rules.",
    content: "Welcome, little dreamers! I'm Moonbeam, and I'm so happy you're here with me today. Are you ready for a wonderful adventure?\n\nThe River Hallow ran right through the middle of everything.\n\nOn the east side lived the Eastons. On the west side lived the Westfalls. And for one hundred years, they had not been friends.\n\nIt started with a rhyme — nobody even remembered why anymore. But the children on both sides grew up knowing it by heart:\n\nEastons are the BEST, we're tall above the rest!\nWestfalls are the LEAST, we're the cream of the crest!\n\nEli was nine. He lived on the east side. And he had never, not once, spoken to a Westfall.\n\nHis father had told him: Westfalls were tricky. They would smile at you and then steal your things. They didn't work as hard. They weren't as honest.\n\nEli believed his father. Everyone on the east side believed their fathers. And everyone on the west side believed their fathers too.\n\nThen one spring, something terrible happened.\n\nA huge storm rolled through the valley. It rained for three days without stopping. The River Hallow — which was usually calm and shallow — grew and grew and grew until it was a roaring, crashing wall of water.\n\nEli's puppy, Biscuit, had gotten out of the yard. And Pip's puppy, Beans, had too.\n\nBoth dogs had run to the river to play in the shallows. And both dogs had been swept away.\n\nEli ran to the riverbank. He screamed for Biscuit. He could see the puppy's white spot in the water — spinning, spinning, spinning — caught on a log in the middle of the flood.\n\nAnd then he heard a voice from the other side.\n\n\"BEANS! BEANS, NO!\"\n\nA girl from the west side. A Westfall. She was screaming for her puppy too. And she was pointing at a different spot in the water — where a small brown puppy with floppy ears was caught against the rocks.\n\nTwo puppies. Both stuck. The river was rising too fast.\n\n\"WE HAVE TO DO SOMETHING!\" Eli shouted across the water.\n\nThe girl — Pip — looked at him. Her face was scared and wet with tears.\n\n\"THERE'S A ROPE IN THE OLD MILL!\" she shouted. \"MEET AT THE BRIDGE!\"\n\nEli's first instinct was: NO. He was not supposed to talk to Westfalls. He was not supposed to help Westfalls. His father would be furious.\n\nBut then he looked at the water. He looked at Biscuit, spinning in the current. And he ran.\n\nHe ran to the old mill. Pip was already there, yanking on a rope that was tangled around a post.\n\n\"HELP ME!\" she shouted.\n\nEli grabbed the rope and pulled. Together — an Easton and a Westfall — they untangled the rope and ran to the bridge.\n\n\"YOU GO LEFT!\" Eli shouted. \"I'LL GO RIGHT!\"\n\nPip didn't argue. She just ran.\n\nEli climbed down the slippery bank on the east side. The water was up to his knees now, crashing against his legs. It took everything he had to stay standing.\n\nPip was doing the same on the west side.\n\nThey were so close. Just a few feet apart.\n\nPip reached Beans first. She grabbed the puppy's collar and pulled. Beans whimpered but kicked. Pip pulled harder.\n\nAnd then — SNAP! The rope broke. Pip fell backwards into the water.\n\nEli didn't think. He lunged. He grabbed Pip's arm. And he pulled as hard as he could.\n\nPip came up gasping. Beans was still in her other arm.\n\n\"I'VE GOT BEANS!\" Eli shouted. \"I'VE GOT YOU!\"\n\nOn the other side of the bridge, Eli heard a bark. Biscuit had gotten free from the log somehow — was swimming toward the bank. Toward ELI'S bank.\n\nEli waded into the water and grabbed Biscuit's collar. The puppy was shaking and wet and alive.\n\nBoth puppies. Both saved.\n\nEli and Pip sat on the bridge, soaked and shaking, the puppies in their arms.\n\nFor a long moment, neither of them said anything.\n\nThen Pip said: \"Thank you.\"\n\nEli shook his head. \"You saved Beans AND Biscuit. If you hadn't known about the rope...\"\n\n\"WE did it,\" Pip said. And she said it in a way that made Eli feel something strange. Something he had never felt before about a Westfall.\n\n\"We did it,\" Eli agreed.\n\nThey sat there a while longer, the puppies whimpering softly between them.\n\nThen Eli said: \"My dad says Westfalls are tricky and dishonest.\"\n\nPip nodded slowly. \"My dad says Eastons are arrogant and lazy.\"\n\n\"That doesn't seem right,\" Eli said.\n\n\"No,\" Pip agreed. \"It doesn't.\"\n\nThey looked at each other. A nine-year-old Easton and a nine-year-old Westfall, both soaked, both tired, both alive.\n\n\"Same time tomorrow?\" Pip asked.\n\nEli hesitated. This was against every rule. Every rhyme. Every thing he had ever been told.\n\nBut he thought about Biscuit spinning in the water. And he thought about Pip falling in. And he thought about how, in the end, none of it had mattered — east or west, they had needed each other.\n\n\"Same time tomorrow,\" Eli said.\n\nAnd for the first time in one hundred years, an Easton and a Westfall sat together on the bridge.\n\nAnd so our adventure comes to an end. But every end is just another beginning! Until next time, little dreamers, keep imagining, keep dreaming, and always be kind. Sweet dreams. 🌊💙",
    discussionQuestions: ["Why did Eli and Pip's fathers tell them the other side was bad?", 'When Eli ran to help, he went against what he was taught. What gave him the courage to do that?', 'What do you think the rhyme about Eastons and Westfalls was really about?', 'Has there ever been a time when you judged someone before you really knew them? What happened?'],
    vocabulary: [{'word': 'prejudice', 'definition': 'a judgment you make about a group of people before you actually know them — usually a negative one', 'sentence': 'The children had prejudice against each other even though they had never actually met.'}, {'word': 'courage', 'definition': "doing the right thing even when it's hard, even when it goes against what everyone around you believes", 'sentence': 'It took courage for Eli to help Pip, even though he had been taught not to trust Westfalls.'}, {'word': 'rival', 'definition': 'someone you compete with or feel competitive toward — sometimes unfairly', 'sentence': 'The Eastons and Westfalls had been rivals for a hundred years without really knowing why.'}],
    parentTips: "This story introduces prejudice and group identity in a way children this age can grapple with. Ask: 'Where do we learn who to like and who to not like?' Talk about how sometimes the rules we grow up with don't match what we see with our own eyes. Use it as a starting point for conversations about fairness, first impressions, and the difference between what we're told and what we experience.",
    printables: [{'title': 'Color Eli and Pip on the Bridge', 'type': 'coloring', 'url': '/printables/eli-pip-bridge-coloring.pdf'}, {'title': 'The River Rhyme Rewritten', 'type': 'activity', 'url': '/printables/rewrite-the-rhyme.pdf'}],
    songs: [{'title': 'The Bridge Song', 'lyrics': 'East side, west side, sitting by the stream! / All our years of fighting — was it just a dream? / Ropes and rain and puppies in the water below, / Teaching us that kindness is all we need to know!'}],
  },


  {
    slug: "lunas-big-adventure",
    title: "Luna's Big Adventure",
    coverImage: "https://picsum.photos/seed/luna-nightsky/800/600",
    ageRange: "4-6",
    level: 3,
    themes: ['courage', 'curiosity', 'friendship'],
    extraTags: ['Adventure', 'Emotional Learning'],
    readTime: "8 min",
    description: "Luna the bunny dreams of seeing the stars up close but the forest at night is dark and scary. With a new friend, she discovers the bravest thing is just taking the first step.",
    content: "Welcome, little dreamers! I'm Moonbeam, and I'm so happy you're here with me today. Are you ready for a wonderful adventure?\n\nDeep in the Whispering Woods, there lived a little bunny named Luna. Luna had soft gray fur and the biggest, brightest eyes you ever saw.\n\nEvery night, Luna would sit outside her cozy burrow and look up at the stars. They twinkled and glowed like tiny lanterns in the sky.\n\n\"Oh, how I wish I could see the stars up close,\" Luna whispered. \"I bet they're magical!\"\n\nBut every time Luna thought about going into the forest at night, her heart would go pitter-patter like rain on a roof. The forest was so dark! What if she got lost? What if something scary was hiding in the shadows?\n\nOne evening, as the sun dipped below the treetops, a wise old owl named Oliver landed softly on a branch nearby.\n\n\"Hello, little one,\" Oliver said with a gentle hoot. \"Why so glum?\"\n\n\"I want to see the stars,\" Luna said. \"But I'm too scared to go into the forest at night.\"\n\nOliver thought for a moment. Then he smiled.\n\n\"The forest at night isn't scary,\" he said. \"It just looks different. The moon and stars light the way. Would you like me to walk with you?\"\n\nLuna's heart went pitter-patter. But then she thought about the beautiful stars. And she thought about Oliver's warm, wise eyes.\n\n\"Okay,\" she said. \"I'll try.\"\n\nTogether, Luna and Oliver hopped and flew into the forest. And you know what? The forest wasn't dark at all! The moon hung big and bright in the sky, and the stars sparkled like diamonds.\n\nThe trees looked silver. The mushrooms glowed softly. Everything was peaceful and magical.\n\n\"See?\" Oliver said gently. \"The night is beautiful when you're not afraid.\"\n\nLuna looked up. The stars were everywhere! They were even more beautiful than she had imagined.\n\n\"Thank you, Oliver,\" Luna said softly. \"I was so scared of the dark. But now I see — the stars were always there. I just needed someone to walk with me.\"\n\nAnd so Luna went home, her heart full of starlight. From that night on, she never felt quite so scared of the dark again. Because she knew: brave doesn't mean not being scared. Brave means taking the first step, even when your heart goes pitter-patter.\n\nAnd so our adventure comes to an end. But every end is just another beginning! Until next time, little dreamers, keep imagining, keep dreaming, and always be kind. Sweet dreams.",
    discussionQuestions: ['Why was Luna scared to go into the forest at night?', 'What made Luna feel brave enough to try?', 'Have you ever been scared of something, but felt better when a friend was with you?', 'What do you think brave means?'],
    vocabulary: [{'word': 'whispered', 'definition': 'to speak very softly, so only someone nearby can hear', 'sentence': 'Luna whispered to herself about the beautiful stars.'}, {'word': 'twinkled', 'definition': 'to shine with a soft, flickering light', 'sentence': 'The stars twinkled like little flashlights in the sky.'}, {'word': 'peaceful', 'definition': 'calm and quiet, with no worry or fear', 'sentence': 'The forest was peaceful and magical under the moonlight.'}],
    parentTips: "After reading, ask: 'What was Luna scared of, and what helped her?' Talk about how having a friend can make scary things feel smaller. Ask your child if they've ever felt brave with help from someone they trust.",
    printables: [{'title': 'Color Luna Under the Stars', 'type': 'coloring', 'url': '/printables/luna-stars-coloring.pdf'}, {'title': 'Moonbeam Maze', 'type': 'activity', 'url': '/printables/moonbeam-maze.pdf'}],
    songs: [{'title': 'The Brave Little Bunny Song', 'lyrics': "Hop, hop, little bunny, / Don't be scared of the dark! / The stars will light your way, / And leave a glow in your heart!"}],
  },


  {
    slug: "the-talking-tree",
    title: "The Talking Tree",
    coverImage: "https://picsum.photos/seed/tree-forest-magical/800/600",
    ageRange: "4-6",
    level: 3,
    themes: ['kindness', 'nature', 'identity'],
    extraTags: ['Adventure', 'Learning'],
    readTime: "8 min",
    description: "A boy named Theo refuses to share his toys. Then he meets an ancient tree who can't share its leaves or shade, and slowly learns that holding onto things too tightly only makes you feel more alone.",
    content: "Welcome, little dreamers! I'm Moonbeam, and I'm so happy you're here with me today. Are you ready for a wonderful adventure?\n\nTheo had a problem.\n\nIt wasn't that he didn't have friends. He had plenty of friends. But every time a friend came over to play, Theo would clutch his toys tightly and say: \"No, you can't play with that. It's mine.\"\n\nHis toy robot? Mine. His building blocks? Mine. His favorite book? DEFINITELY mine.\n\n\"Why won't you share?\" asked his friend Maya.\n\n\"Because if I share, I might not get it back,\" Theo said. \"And then I won't have it anymore.\"\n\nMaya left that day and didn't come back for a week.\n\nOne afternoon, Theo was walking in the forest near his house. And then he saw it. The biggest tree he had ever seen. It was enormous — so tall that its top disappeared into the clouds. And carved into its trunk were words: I AM THE KEEPER.\n\n\"Hello?\" Theo said nervously.\n\n\"Hello, little one,\" said a voice. It came from everywhere — from the roots beneath his feet, from the bark beneath his fingers.\n\n\"Tree, can I have one of your leaves?\"\n\n\"No,\" the tree said.\n\n\"Can I have one of your acorns?\"\n\n\"No.\"\n\n\"Can I have some of your shade?\"\n\n\"No.\"\n\n\"That's not fair!\" Theo said. \"You have SO MUCH. What's the harm in sharing?\"\n\nThe tree was quiet for a long time.\n\nThen it said: \"You are right. I cannot move. But do you know what happens when I give away my leaves every autumn? They fall down. And then the soil beneath me grows weak. And the birds leave. And the squirrels go elsewhere. I stand here, year after year, more alone each season. I am not unkind, little one. I simply cannot give away the things that keep me alive.\"\n\nTheo pulled his hand back from the trunk. He thought about his toys — his robot, his blocks, his books. He thought about how he clutched them so tightly.\n\n\"Tree, do you think I'm being like you? Holding on too tight?\"\n\n\"I think you are holding on because you are afraid of being empty. But Theo — the more you hold, the more alone you feel. That is the nature of clutching. It does not fill you up. It empties you.\"\n\nTheo walked home slowly. He thought about Maya. About his other friends who had stopped coming over.\n\nThe next day, when Maya came to his door, Theo took a deep breath.\n\n\"Maya, do you want to play with my robot?\"\n\nMaya's eyes went wide. \"Really?\"\n\n\"Really,\" Theo said. And even though it made his stomach feel wobbly, he handed her the robot.\n\nAnd you know what happened? Maya built a robot fortress and it was the COOLEST THING THEO HAD EVER SEEN. And when Theo picked up his building blocks, Maya helped him build something better than anything either of them could have made alone.\n\n\"Thank you for sharing,\" Maya said.\n\n\"Thank you for coming back,\" Theo said.\n\nAnd deep in the forest, the great old tree rustled its branches — even though there was no wind. Because sometimes, when someone learns to let go, even the oldest trees feel a little less alone.\n\nAnd so our adventure comes to an end. But every end is just another beginning! Until next time, little dreamers, keep imagining, keep dreaming, and always be kind. Sweet dreams.",
    discussionQuestions: ['Why was Theo so scared to share his toys?', "What did the tree mean when it said 'the more you hold, the more alone you feel'?", 'What happened when Theo finally shared his robot with Maya?', 'Is there something you have a hard time sharing? Why?'],
    vocabulary: [{'word': 'clutch', 'definition': "to hold onto something very tightly because you're afraid of losing it", 'sentence': 'Theo would clutch his toys tightly and refuse to let anyone else play with them.'}, {'word': 'empties', 'definition': 'to feel like something is missing inside — like a hole that gets bigger', 'sentence': 'Theo realized that holding on so tightly actually made him feel more empty inside.'}, {'word': 'fortress', 'definition': 'a very strong building that is hard to get into — like a castle', 'sentence': 'Maya built a robot fortress that was the coolest thing Theo had ever seen.'}],
    parentTips: "This story works well for children who struggle with sharing or possessiveness. Talk about WHY sharing feels hard (fear of losing the item). Ask: 'When you share something, what do you usually get back?' Focus on the emotional reward of connection.",
    printables: [{'title': 'Color Theo and the Great Tree', 'type': 'coloring', 'url': '/printables/talking-tree-coloring.pdf'}, {'title': 'Design Your Own Tree House', 'type': 'activity', 'url': '/printables/tree-house-design.pdf'}],
    songs: [{'title': 'The Sharing Tree Song', 'lyrics': 'I hold on tight, but it makes me feel small! / I share with you, and I feel ten feet tall! / The more I give, the more I grow, / Kindness is the best thing I know!'}],
  },


  {
    slug: "the-merchants-empty-box",
    title: "The Merchant's Empty Box",
    coverImage: "https://picsum.photos/seed/market-square-old-town/800/600",
    ageRange: "8-10",
    level: 5,
    themes: ['integrity', 'honesty', 'consequence'],
    extraTags: ['Adventure', 'Learning'],
    readTime: "15 min",
    description: "A wealthy merchant tears apart his life searching for a legendary treasure. When he finally finds the ornate box, it's empty. He must face an uncomfortable truth about what he actually lost.",
    content: "This is a story for those of you who are ready to think deeply. Are you ready?\n\nIn the market town of Velan, there lived a merchant named Corin.\n\nCorin sold spices. His shop was the most famous in all of Velan. But Corin was not happy.\n\n\"I want to be RICH,\" he would say. \"World-changingly rich.\"\n\nOne winter evening, an old sailor came into the shop.\n\n\"I hear you seek the Velan Treasure,\" the sailor said. \"I have a map. One thousand gold coins.\"\n\nCorin paid. The map showed a hidden chamber beneath his own shop.\n\nFor the next three months, Corin tore apart his shop. He ripped up floorboards. He smashed through walls. He stopped ordering spices, stopped serving customers, stopped doing everything that made his shop great.\n\nCustomers stopped coming. His reputation crumbled. His best clerks quit.\n\n\"The treasure is HERE,\" Corin insisted.\n\nOne night, his pickaxe hit something solid. A box — old, ornate, covered in gold leaf.\n\nCorin's hands shook as he opened it.\n\nIt was empty.\n\nCompletely, utterly empty.\n\nCorin sat on the cold stone floor and stared at the empty box. He had given up everything for nothing. His shop. His reputation. His wife. His customers. His clerks. All sacrificed for an empty box.\n\nCorin walked home in the dark. Maren was still awake, waiting.\n\n\"I knew the box would be empty,\" she said quietly.\n\n\"What?\"\n\n\"The Velan Treasure is not gold. It's a metaphor. The 'treasure' was the prosperity that comes from honest work and good relationships. It was never meant to be found — it was meant to be BUILT.\"\n\n\"You knew? And you didn't tell me?\"\n\n\"I tried,\" Maren said. And then her voice broke. \"But you wouldn't listen. You never listen anymore.\"\n\nCorin felt something crack open inside him. He looked at his wife — at the dark circles under her eyes, at the way she held her teacup like she was holding onto something that might disappear.\n\n\"I'm sorry,\" Corin said. Not because he had lost the treasure. But because he had lost her. And he hadn't even noticed.\n\nThey sat together for a long time that night. And slowly, they began to rebuild.\n\nCorin's shop reopened six months later. Smaller than before. Simpler. He no longer had the finest spices in Velan. But he had something more important: his wife beside him, his customers back, and a deep understanding that the real treasure had been there all along.\n\nWas it worth it? The years lost, the reputation destroyed, the friends who never came back?\n\nCorin didn't know. He suspected he never would.\n\nBut he knew this: he would never chase an empty box again.\n\nAnd so our adventure comes to an end. But every end is just another beginning! Until next time, little dreamers, keep imagining, keep dreaming, and always be kind. Sweet dreams.",
    discussionQuestions: ['Do you think Maren was right to keep the truth about the treasure from Corin? Why or why not?', "Was Corin's obsession ever justified? At what point did his pursuit become harmful?", 'The story ends with Corin rebuilding but with permanent losses. Is that a fair ending?', "What is the 'real treasure' in the story — and do you agree that honest work is its own reward?"],
    vocabulary: [{'word': 'integrity', 'definition': 'doing the right thing even when no one is watching', 'sentence': "Corin's integrity crumbled when he started deceiving customers to fund his search."}, {'word': 'obsessed', 'definition': "thinking about something so much that you can't think about anything else", 'sentence': 'Corin was so obsessed with the treasure that he stopped seeing what mattered.'}, {'word': 'bankruptcy', 'definition': 'when a person has lost so much money they cannot pay their debts', 'sentence': 'Corin had to declare bankruptcy after destroying his business for an empty box.'}],
    parentTips: "This story is for older children (8-10) who can grapple with moral complexity. Corin is neither purely good nor evil — he makes choices that compound into disaster. Discuss: 'At what point could Corin have made a different choice?' The story raises uncomfortable questions about whether good people can make catastrophic mistakes — and whether those mistakes can ever be fully repaired.",
    printables: [{'title': 'Color the Empty Treasure Box', 'type': 'coloring', 'url': '/printables/empty-box-coloring.pdf'}, {'title': 'Design Your Own Treasure Map', 'type': 'activity', 'url': '/printables/treasure-map-design.pdf'}],
    songs: [{'title': 'The Empty Box Song', 'lyrics': "I searched for gold in the earth and the stone, / But the real treasure was the love I'd already known! / I chased and I chased and I lost my way, / Now I know that the gold was the people who stay!"}],
  },


  {
    slug: "two-houses-one-heart",
    title: "Two Houses, One Heart",
    coverImage: "https://picsum.photos/seed/two-houses-different-colors/800/600",
    ageRange: "8-10",
    level: 5,
    themes: ['family', 'loyalty', 'grief', 'growing up'],
    extraTags: ['Adventure', 'Emotional Learning'],
    readTime: "18 min",
    description: "After her parents divorce, twelve-year-old Sasha must live two lives. A summer with her grandmother forces her to finally confront the grief she's been hiding — and ask: is it possible to belong fully to two places at once?",
    content: "I'm Moonbeam, and I'm here to tell you a story. But this isn't a magical story. This is a true one. Are you ready?\n\nSasha was twelve when her parents told her they were getting a divorce.\n\n\"We want you to know that we both love you very much,\" her mother said. \"Nothing will change that.\"\n\nSasha nodded. She went to her room and closed the door and sat on her bed for a very long time.\n\nBut everything had already changed.\n\nHer father moved into an apartment across town. Her mother started working longer hours and crying in the bathroom. And Sasha started living two lives.\n\nAt Dad's apartment: Sasha was easy-going Sasha. She didn't talk about school much. Dad seemed happiest when Sasha was cheerful, so Sasha was cheerful.\n\nAt Mom's house: Sasha was studious Sasha. She threw herself into homework and books. Mom seemed happiest when Sasha was productive, so Sasha was productive.\n\nBut here is the thing about living two lives: eventually, you forget which one is real.\n\nSummer came. Mom suggested Sasha spend August at Grandma's farm.\n\nGrandma met Sasha at the train station. She hugged the same way: tight and warm, like she was trying to hold all your worries inside her own body.\n\n\"How are you, child?\" Grandma asked.\n\n\"I'm fine,\" Sasha said.\n\nGrandma looked at her. Her silence said something.\n\nThat night, Sasha lay in her old bedroom. She thought about what Grandma had said about grief being a room you go into and stay until you're ready to come out.\n\nSasha had not cried about the divorce. Not once. Not when her parents told her. Not when Dad moved out. Not when Mom cried in the bathroom.\n\nShe had been strong. She had been brave. She had been FINE.\n\nBut standing there in the dark, Sasha realized something terrible: she hadn't been fine. She had been hiding. And the grief was still there. It had just been waiting.\n\nSasha went outside to the old apple tree. She put her hand on the carved initials — D + S + M — and felt something crack open in her chest.\n\nAnd then she cried. The kind of cry that children cry when they finally let themselves feel what they've been holding. She cried for her father, who she saw only half the time now. She cried for her mother, who was trying so hard to hold everything together. She cried for the family she had lost.\n\nGrandma came outside. She sat down next to Sasha in the grass and put an arm around her.\n\nThey stayed like that until the moon was high.\n\n\"Is it possible,\" Sasha asked later, \"to love two houses? To belong to two places at once?\"\n\nGrandma thought about this for a long time.\n\n\"I don't know, child,\" she said honestly. \"I think it's hard. I think it hurts. I think there are days when you feel like you're letting everyone down no matter what you do.\"\n\n\"Then what's the point?\" Sasha whispered.\n\n\"The point is not doing it right, Sasha. The point is doing it HONESTLY. Being real in both places, even when it's hard. The point is not the two houses. The point is your one heart — and being true to it, wherever you are.\"\n\nSasha spent the rest of the summer being honest. She told her father she missed Mom sometimes. She told her mother she felt like a guest in her own life. She stopped pretending to be fine.\n\nAnd here is what happened: it got harder before it got easier. Her father got upset. Her mother got defensive.\n\nBut then — slowly — things started to change. Because being honest meant people could actually help. Her father stopped trying so hard to be entertaining and started just being present. Her mother stopped trying so hard to be strong and started just being there.\n\nIt wasn't a perfect solution. There was still a divorce. There were still two houses. There was still the ache of something lost.\n\nBut Sasha was real in both places now. And that, it turned out, was the only thing she could actually control.\n\nAnd so our adventure comes to an end. But every end is just another beginning! Until next time, little dreamers, keep imagining, keep dreaming, and always be kind. Sweet dreams.",
    discussionQuestions: ['Sasha hid her grief to protect her parents. Was that the right thing to do? Who was it really protecting?', 'Grandma said grief is a room you go into. What do you think about that metaphor?', "The story doesn't resolve the divorce — Sasha still has two houses and an ache. Is that a satisfying ending? Why or why not?", "Is being 'real' in both places actually possible? What would Sasha have to sacrifice to do that?"],
    vocabulary: [{'word': 'divorce', 'definition': 'when two people who are married decide to live apart permanently', 'sentence': "Sasha's parents' divorce meant she suddenly had two homes instead of one."}, {'word': 'authenticity', 'definition': "being your real, honest self — not pretending to be someone you're not", 'sentence': "Sasha's authenticity grew when she stopped pretending to be fine all the time."}, {'word': 'compartmentalize', 'definition': 'to keep different parts of your life completely separate', 'sentence': "Sasha had been compartmentalizing her life, acting one way at Dad's and another at Mom's."}],
    parentTips: "This story is for older children ready to grapple with emotionally complex situations. Divorce and the pressure to 'be okay' are real. The story validates that it's normal to feel grief and anger about family changes — and that hiding those feelings doesn't make them go away. Use it as a starting point for honest conversation. Ask: 'What do you wish you could tell me about how our family is doing?'",
    printables: [{'title': 'Color the Two Houses', 'type': 'coloring', 'url': '/printables/two-houses-coloring.pdf'}, {'title': 'Draw Your Life in Two Pictures', 'type': 'activity', 'url': '/printables/my-two-homes.pdf'}],
    songs: [{'title': 'Two Houses Lullaby', 'lyrics': "Two houses, one heart, / Trying so hard to belong. / I'm learning that love doesn't mean / Pretending nothing's wrong. / Two houses, one heart, / And the truth will set me free. / I don't have to be okay — / Just honest, just real, just me."}],
  },
] as Story[]