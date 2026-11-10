# Skills 101

A skill is a text file that teaches your AI one job, so you never explain it twice.
Paid groups sell libraries of hundreds. You need a few good ones, and you can write them.

## What a skill is
A folder with one file, `SKILL.md`:

```markdown
---
name: weekly-review
description: Use for a weekly review or on a weekly schedule, to show what changed, what's stuck and what to drop.
---

# Weekly review
1. Read their goals file and last week's review...
```

The **description** is what makes it work. The AI reads every skill's description and
loads the skill only when the request matches. So describe *when* to use it, in the
words you'd actually say.

## Install one (2 minutes)
- **Claude Code:** copy the folder into `~/.claude/skills/` (all projects) or
  `.claude/skills/` in one project. Ask for the job; it picks the skill up.
- **Claude app:** upload the skill under Settings > Capabilities > Skills, where your
  plan offers it.
- **Any other chat:** paste the file's text and say "follow this for the rest of the chat".

Start with `chief-of-staff` and `no-slop` from this kit.

## Write your own (20 minutes)
1. **Do the job once with AI**, by hand, correcting it as you go.
2. **Run `skill-builder`** on that conversation. Your corrections become the rules.
3. **Check the description**: would it trigger on how you'd phrase the request? Would
   it wrongly trigger on something else?
4. **Test it on a fresh case** and compare with doing it by hand.

## What makes a good skill
- One job. "Write my weekly post" beats "handle my marketing".
- Steps with a short why, so the AI can handle cases you didn't foresee.
- An approval step before anything that sends, pays or deletes.
- Short. Under 100 lines; long detail goes in a `reference/` file next to it.
- "Never invent a number." It belongs in almost every skill.

## Before installing someone else's skill
A skill is instructions your AI will follow, and a skill folder can include scripts.
Read the whole thing first, like you'd read a contract. Skip any that download and
run code, ask for keys, or send data somewhere without saying why.

Go deeper: Claude Academy's free [Introduction to agent skills](https://academy.claude.com/courses/introduction-to-agent-skills).
