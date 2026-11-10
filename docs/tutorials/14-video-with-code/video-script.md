Title: Make a 10-second video with code

Target length: 4 min 45 s · Written version: [README.md](README.md) · App/version checked: November 2026 (from the HyperFrames docs; not yet run end to end by us, so do a full dry run before recording)

Chapters (YouTube description): 00:00 Result · 00:20 What you need · 00:45 Step 1 Install · 01:05 Step 2 Create the project · 01:35 Step 3 Doctor · 01:55 Step 4 Brief the AI · 02:45 Step 5 Lint and preview · 03:25 Step 6 Render · 03:50 Step 7 Watch it · 04:15 Practice

| # | Time | Visual (screen action, zoom/crop, callout, on-screen label) | Audio (exact narration) | Notes |
|---|---|---|---|---|
| 1 | 0:00-0:20 | The finished bakery video plays full screen in portrait. Then a split: left the plain-text brief, right the playing MP4. Label: "Text in. Video out." | "This ten-second video for a bakery's Instagram was written as a web page by a free AI. My own computer turned it into an MP4. In under five minutes, you'll make one too." | Hook; brief vs video is the before/after |
| 2 | 0:20-0:45 | Card: "A computer you can install programs on · Node.js 22 or newer · FFmpeg · any free chat AI · no paid account" | "You need a computer where you can install programs, and a free chat AI. HyperFrames is open source, and rendering on your own computer is free with no account." | Cost stated plainly |
| 3 | 0:45-1:05 | Terminal at large zoom. Type node --version; highlight the output. | "First, install Node.js version twenty-two or newer, and FFmpeg. Then open a new terminal and type node, space, dash dash version." *(pause 2 s)* "You should see a number that starts with v22 or higher." | Links to both download pages in the description |
| 4 | 1:05-1:35 | Type the init line, then cd, then telemetry disable. Show the folder listing with index.html, AGENTS.md, CLAUDE.md and hyperframes.json. | "Now make the project. Type npx hyperframes init bakery-intro, dash dash resolution portrait." *(pause 3 s)* "Move into the folder with cd bakery-intro. Then turn off usage data with npx hyperframes telemetry disable." *(pause 2 s)* "The folder now holds index-dot-html and a file called AGENTS-dot-md." | Say every command in full for captions |
| 5 | 1:35-1:55 | Run npx hyperframes doctor. Pink box around the Node.js, FFmpeg, FFprobe and Chrome lines. Label: "1". | "Check your computer with npx hyperframes doctor." *(pause 3 s)* "Node.js, FFmpeg, FFprobe and Chrome should each have a tick. You don't need Docker for this." | |
| 6 | 1:55-2:45 | Copy index.html to index-original.html. Open a chat AI. Paste the brief, then AGENTS.md and index.html. Show a sample reply with the label "Example: yours will differ". Copy the code block into index.html. | "First, make a backup copy of index-dot-html." *(pause 2 s)* "Open your chat AI. Paste the brief from the written guide. It asks for three lines over ten seconds, in portrait, using CSS animation only. Under it, paste the full text of AGENTS-dot-md and index-dot-html." *(pause 3 s)* "Your reply will be worded differently. Check that it gives one code block with all three lines of text. Save it over index-dot-html." | Structure checkpoint |
| 7 | 2:45-3:25 | Run npx hyperframes lint. Then npx hyperframes preview; the browser preview plays. Then type one change request in the chat. | "Run npx hyperframes lint. If it shows errors, paste them into the same chat and ask for a fixed file." *(pause 2 s)* "When lint is clean, run npx hyperframes preview. The video plays in your browser." *(pause 3 s)* "Ask for one change at a time, like: make the last line twice as big." | |
| 8 | 3:25-3:50 | Ctrl+C in the terminal. Type the render line. Progress output, then the MP4 appears in the folder. | "Stop the preview with Control C. Then type npx hyperframes render, dash dash output bakery-intro-dot-mp4." *(pause 3 s)* "For a quick test, add dash dash quality draft." | |
| 9 | 3:50-4:15 | The MP4 plays in a normal video player. Callout over the text on screen. | "Watch the whole video before you post it. AI can get spelling and dates wrong. And only add music or fonts you're allowed to share." | Safety beat |
| 10 | 4:15-4:45 | Recap card: "1. Init and doctor 2. Brief, lint, preview 3. Render and watch". Then the practice card. End card to lesson 15. | "Recap: create the project and check your computer, brief the AI and preview, then render and watch. Now make a ten-second video for something of your own, like a club meeting, in square format. The written guide, with the full brief, is linked below." | Practice + end card |

## Production notes

- **Dry run first.** The kit has not run this recipe end to end. Run every command on a clean machine before recording, and update the README and this script together if any output or flag differs.
- Record the terminal at a large font size, in a demo user account with no personal folder names in the prompt.
- Use the same free chat AI in the recording that you recommend in the description, and show its reply as a labelled example.
- Read commands aloud in full ("dash dash", "dot") so the captions and audio description match the screen.
- Do not show HeyGen sign-in or paid features; this lesson is local only.
- Upload this narration as the caption file and publish it as the transcript with the written lesson.
