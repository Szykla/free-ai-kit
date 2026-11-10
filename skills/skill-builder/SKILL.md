---
name: skill-builder
description: Use when asked to turn a job into a skill, or after doing the same multi-step job twice, to write it as a reusable, tested SKILL.md.
---

<!-- Adapted from anthropics/knowledge-work-plugins (Apache-2.0), small-business/skills/build-agent, pinned at c75fda0. Rewritten and shortened. See THIRD_PARTY.md. -->

# Skill builder

## 1. Capture the job
**Best: it just happened.** If you just did the job together, that conversation is
the spec. Their corrections ("no, skip anything under 50") are the rules.
**Otherwise:** ask about the last real time ("walk me through last Tuesday"), three to
five questions, then draft. A wrong draft is easier to fix than a blank page.

If an existing skill already covers it, say so instead of writing a duplicate.

## 2. Split fixed from varying
- **Fixed**: order of steps, sources, output format, rules.
- **Varies**: dates, names, files, amounts. Never hard-code the example.
- **Judgment**: where the person decides. These become approval steps.

## 3. Place approval steps
Add one before anything that sends, spends, publishes, deletes or overwrites. Not
before reading or drafting. Each says exactly what will happen ("3 emails to X, Y, Z.
Send?"), never "Ready to proceed?". Three to five is healthy.

## 4. Write it
A folder named like the skill, with `SKILL.md`:
- Front matter: `name` (lowercase-hyphen, same as the folder) and `description`
  that says what it does and when to use it, in the person's own words.
- Numbered steps, each with a short why.
- What to do when a tool or source is missing.
- "Never invent a number."
Keep it under about 100 lines; move detail into a `reference/` file.

## 5. Test on a known case
Run it on the job you just did by hand and compare the two results side by side. If
they differ, fix the skill and run again. An untested skill gets checked by hand
forever.
