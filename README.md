# The free AI toolkit

People sell this stuff for $50 to $1,000: "AI chief of staff" courses, prompt packs,
skill bundles, starter kits. Almost all of it is a handful of plain-text instructions
and a list of tools that are free or close to it. Here it is, for nothing.

No sign-up, no email list, no upsell. Copy it, change it, share it (MIT).

**Not for you if** you already build agents or write your own skills: this is a starting kit for people who use AI a little and want it to do real work.

## What's inside

| Folder | What it gives you |
|---|---|
| [`guides/01-start-here.md`](guides/01-start-here.md) | Pick a tool and a model, set custom instructions that make AI blunt and useful. 15 minutes. |
| [`guides/02-free-tools.md`](guides/02-free-tools.md) | The free and open-source tools that replace the "$600 of discounts" in paid bundles. |
| [`guides/03-automate-your-week.md`](guides/03-automate-your-week.md) | Find the work worth automating, then climb from prompt to skill to schedule. |
| [`guides/04-best-free-courses.md`](guides/04-best-free-courses.md) | The best free courses from OpenAI, Anthropic, Google, Hugging Face and Microsoft, checked and dated. |
| [`guides/05`](guides/05-context-beats-prompts.md) to [`07`](guides/07-first-automation.md) | Context beats prompts, checking AI's work, your first automation. One running example: a small bakery. |
| [`skills/`](skills/) | Ten ready skills (below). |
| [`docs/where-money-is-well-spent.md`](docs/where-money-is-well-spent.md) | If you do want to pay for AI learning: which offers are worth it, and why. |

Online version: https://szykla.github.io/free-ai-kit/

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
