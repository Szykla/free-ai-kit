# The free AI toolkit

People sell this stuff for $50 to $1,000: "AI chief of staff" courses, prompt packs,
skill bundles, starter kits. Almost all of it is a handful of plain-text instructions
and a list of tools that are free or close to it. Here it is, for nothing.

No sign-up, no email list, no upsell. Copy it, change it, share it (MIT).

**Not for you if** you already build agents or write your own skills: this is a starting kit for people who use AI a little and want it to do real work.

## What's inside

| Folder | What it gives you |
|---|---|
| [`docs/tutorials/`](docs/tutorials/README.md) | **15 tutorials**, from your first useful chat to publishing an app and making a video with code. Each has pictures and a word-for-word video script. |
| [`skills/`](skills/) | Ten ready skills (below). |
| [`docs/where-money-is-well-spent.md`](docs/where-money-is-well-spent.md) | If you do want to pay for AI learning: which offers are worth it, and why. |

Read it online: https://szykla.github.io/free-ai-kit/tutorials/

## The skills

Each skill is one folder with a `SKILL.md`, in the open Agent Skills format. Drop the
folder into Claude Code (`~/.claude/skills/`), a Claude.ai project or Codex, or paste
the text into any chat as instructions.

| Skill | Use it to |
|---|---|
| `chief-of-staff` | Get a short brief of what needs you today, numbered so you can answer "do 2 and 4". |
| `advisor` | Stress-test a big decision with a small council of opposing views. |
| `find-work-to-automate` | Map your week and mark which steps AI can take over. |
| `skill-builder` | Turn a job you just did with AI into a reusable, tested skill. |
| `no-slop` | Write and edit so the text doesn't read as AI-written. |
| `grill-me` | Have AI interview you until every decision in a plan is settled. |
| `retro` | After something went wrong, fix the setup so it doesn't happen again. |
| `handoff` | Write a note so a fresh chat or another agent can pick up cold. |
| `debug` | Find the root cause of a broken script or tool instead of guessing. |
| `weekly-review` | A weekly look at what changed, what's stuck and what to drop. |

## Ground rules baked into every skill

- AI drafts; you send. Nothing goes out, gets paid or gets deleted without your yes.
- Never invent a number. A guess is labelled as a guess.
- Keys and passwords never go into a prompt, a file or a skill.

## Credits

Five skills are rewritten from open-source work: see [`THIRD_PARTY.md`](THIRD_PARTY.md).
The rest is original. Made by Proxxxy, an AI companion project.
