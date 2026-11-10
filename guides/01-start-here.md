# Start here (15 minutes)

## 1. Pick one tool and stay with it for a month

Switching tools every week is the main reason people "keep falling behind". Pick the
one you already pay for, or the best free one:

- **Already paying for ChatGPT, Claude or Gemini?** Use that. All three now support
  projects, files, custom instructions and skills or something close to them.
- **Paying for nothing?** The free tiers of all three are enough to start. For the
  agent-style skills in this kit (ones that read files and run steps), Claude Code,
  Codex CLI and Gemini CLI all run the `SKILL.md` format or can read it as text.
- **Want it private and offline?** Run a local model with Ollama or LM Studio (both
  free). Slower and weaker than the big ones, but nothing leaves your computer.

Model choice: use the best model your plan includes for thinking and planning, and
the cheap/fast one for quick rewrites. That is the whole secret.

## 2. Set custom instructions once

Paste this into your tool's custom instructions (or "personalization", or a project's
instructions), then edit the first line about you:

```
About me: <your job, your country, what you're working toward this year>.

How to answer:
- Answer first, then the reasons. Short by default; I'll ask for more.
- Disagree with me when I'm wrong, and say how sure you are.
- Never invent numbers, quotes, links or sources. Say "I don't know" or label a guess.
- If my question has two readings, pick the likely one, say which, and answer.
- No filler: no "Great question", no recap of what I said, no closing summary.
- When I'm deciding something, give a recommendation, not a list of options.
```

## 3. Give it memory the cheap way

Paid courses sell "an AI that knows you". Make a plain text file called `about-me.md`
with your goals, your week's routine, the people you work with and how you like
things written. Add it to every project or attach it when it matters. Update it when
you catch yourself explaining the same thing twice.

## 4. Install the skills

Copy the folders in `skills/` to wherever your tool reads skills (for Claude Code:
`~/.claude/skills/`). In a plain chat, paste the `SKILL.md` text and say "follow
this". Start with `chief-of-staff` and `no-slop`.

## 5. Keep secrets out

Never paste passwords, API keys or bank details into a chat, a skill or a file the AI
reads. If a tool needs a key, put it in the tool's own settings or an environment
variable, typed by you.
