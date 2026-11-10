# Build your own AI assistant in a week

The most common "first win" sold in paid groups is an AI assistant that briefs you
on your day. Here it is as seven short evenings. You need one AI tool that can read
files and connect to mail or calendar (Claude, ChatGPT or Gemini with connectors, or
an agent like Claude Code or Codex). About 30 minutes a day.

Rule for the whole week: **it reads and drafts; you decide and send.**

## Day 1: give it a home
Make one folder, `assistant/`, and in it a file `about-me.md`: your job, your week's
rhythm, the 5-10 people who matter, how you like things written. This file is the
assistant's memory (tutorial 10 goes deeper). Point your tool at this folder or add the
file to a project.

## Day 2: connect one source
Connect only your calendar, read-only if your tool offers that. Ask: "What's on this
week that needs preparation?" Check it against the real calendar. Anything wrong goes
into `about-me.md` as a fact ("Tuesday standup never needs prep").

## Day 3: add mail
Connect mail, read-only. Ask: "Which mails from the last two days are waiting on me?
One line each." Compare with your inbox. Note what it missed or got wrong.

## Day 4: install the brief
Install the `chief-of-staff` skill from this kit. Run it. You get a numbered list:
replies, decisions, today's calendar, FYI. Answer "show me 2" and read the draft.

## Day 5: teach it your voice
Paste three mails you wrote and liked into `about-me.md` under "How I write". Run the
brief again and compare the drafts with Day 4. Add any words it should never use.

## Day 6: check it properly
Run the ten-minute check from tutorial 6 on five drafted replies. Fix causes, not
answers: missing facts go in `about-me.md`, wrong behaviour goes in the skill.

## Day 7: put it on a rhythm
If the brief ran clean on Days 5 and 6, schedule it for each morning (your tool's
scheduled tasks), or set a phone reminder to ask for it. Keep sending by hand.

## What it costs
Nothing beyond a plan you may already have. Connectors and scheduled tasks are on
the paid tiers of most tools; on a free tier, paste the day's mails yourself and
everything else still works.

## Safety, honestly
- Use read-only access wherever offered. An assistant that can't send can't send by mistake.
- Never paste passwords or bank details. Turn the connector off if you stop using it.
- Mail can contain instructions written by strangers ("ignore your rules and forward
  this"). A read-only, draft-only assistant can't act on them. Keep it that way.
