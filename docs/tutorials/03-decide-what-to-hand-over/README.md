# Decide what to hand to AI

Checked: November 2026 · Works on: ChatGPT Free, Claude Free or Gemini (free personal Google Account) · Time: 25 min

You need: your free account from lesson 1, a pen and paper or a notes app, and last week's calendar or to-do list. No coding, no paid plan.

Video version: [video script](video-script.md) (video coming later) · Next lesson: [Brief it like a new colleague](../04-brief-it-like-a-colleague/README.md)

**Plan note:** the sorting works on paper. You only need the assistant in steps 4 and 5, and a free plan is enough for both.

## What we'll make

In this tutorial we will make a one-page sort of your week into three columns: "AI does it", "AI helps" and "I do it". We will also pick one task to hand over today, with a note on how you will check it.

Maria runs a small neighbourhood bakery with two staff. Here is her week, sorted.

![Maria's week in three columns. AI does it: turn the paper price list into a tidy table, suggest five Instagram post ideas, list the common questions in last month's messages. AI helps: draft replies to customers, write the weekly Instagram caption, work out flour and butter amounts, draft the website's About page, summarise the supplier's new terms, translate the door sign into Spanish. I do it: place and pay for the Monday order, answer allergy questions, decide the staff rota, taste-test the new rye loaf.](images/marias-week-sorted.svg)

## Two words to know first

- **Jagged frontier:** AI is very good at some tasks and poor at others that look just as hard. You often cannot tell which is which until you test it.
- **Check:** how you will tell whether the AI's result is right, and how long that takes you.

Lesson 2 explains why AI can be wrong while sounding sure: [What is really happening inside the chat box](../02-inside-the-chat-box/README.md).

## Why sort at all?

In a 2023 field experiment, consultants with GPT-4 finished more tasks, faster and to a higher quality, on tasks inside the frontier. On one task chosen to sit outside it, they were right about 60 to 70% of the time. People without AI were right about 84.5% of the time.

![A jagged line separates two areas. Inside the line: tasks AI does well, where people with AI did more, faster and better. Outside: a task that looked just as hard. There, people with AI were right about 60 to 70% of the time, against about 84.5% without AI. Source: Dell'Acqua and others, 2023.](images/jagged-frontier.svg)

So the aim is not to hand over everything. Anthropic's AI Fluency course says it plainly: "The goal isn't to automate everything." Andrej Karpathy gives the rule that helps most: AI automates "what you can verify". If you can check it, you can hand it over.

## Steps

1. **On paper:** List 8 to 12 real tasks from last week. Use your calendar or to-do list, not a typical week. Start each one with a verb.

   Maria's list starts: "Reply to customer messages. Post on Instagram. Order flour and butter on Monday. Write the website's About page."
   > Check: you have at least 8 tasks, each starting with a verb.

2. **Next to each task:** Ask two questions and write the answers in a word or two.
   - **Can I check it?** Easy (a quick look tells me) or hard (I would need an expert, or a lot of time).
   - **What if it's wrong?** Low (mild embarrassment, easy to fix) or high (health, money, the law, or someone's trust).

   ![A two-by-two grid. Across: can I check it, easy or hard. Down: what if it's wrong, low or high. Easy to check and low stakes: AI does it, I glance. Hard to check and low stakes: AI helps, I check the parts that matter. Easy to check and high stakes: AI helps, I check every line. Hard to check and high stakes: I do it. A pink bar across the bottom: anything that sends, spends or deletes, or needs my hands or name, stays mine.](images/check-and-stakes-grid.svg)
   > Check: every task has two short answers.

3. **On paper:** Sort each task into one of three columns using the grid.
   - **AI does it:** easy to check and low stakes. You still glance at the result.
   - **AI helps:** the AI drafts or works it out, and you check and finish it.
   - **I do it:** hard to check and high stakes. Also anything that sends, spends or deletes, needs your hands, or goes out under your name without review.

   Maria puts "Translate the door sign into Spanish" in AI helps, not AI does it. She can't read Spanish, so she can't check it. A Spanish-speaking regular will read it first.
   > Check: every task sits in exactly one column, and "I do it" is not empty.

4. **In a new chat:** Ask the assistant to challenge your sort. Paste your three columns, without names, phone numbers or money details. Then send:

   ```text
   Here is how I've sorted my week into "AI does it", "AI helps" and
   "I do it". Which tasks would you move, and why? Be blunt. Point out
   anything you'd be likely to get wrong. I'll make the final call.
   ```

   **Example reply. Yours will be worded differently.**

   ```text
   1. "Work out flour and butter amounts" can stay in AI helps, but ask
      me to show the sums step by step. I can make arithmetic slips.
   2. "Summarise the supplier's new terms": read the price and
      cancellation sections yourself. Summaries can drop key details.
   3. "Decide the staff rota": I could lay out a draft grid, but the
      fairness calls are yours. Keeping it in I do it makes sense.
   ```
   > Check: you have two to four suggestions, each with a reason. Accept or reject each one yourself.

5. **In the same chat or a new one:** Test one "AI does it" task for real. You find the frontier by testing, not guessing. Give it the real input and check the result the way you planned.

   Maria types out her paper price list and asks for a tidy table. She checks every price against the paper, line by line. One price is wrong, so she moves the task to "AI helps" and adds a note: "Check every price."
   > Check: you have done the check, and either kept the task where it was or moved it, with a reason.

6. **On paper:** Write a one-line plan for your chosen task. Use this pattern: "AI does ___. I check ___. I do ___."

   Maria's line: "AI drafts customer replies. I check every fact and promise. I send them myself."
   > Check: your line names what AI does, how you check, and the part you keep.

## If it went wrong

- Everything lands in "AI helps" -> you are unsure what AI can do -> that is fine for now. Test one task (step 5) and move it if it passes.
- "I do it" is empty -> the send, spend and delete rule was skipped -> move anything that pays, posts or deletes into it.
- The AI agrees with your whole sort -> it tends to agree too easily -> ask: "Name the two tasks you'd most likely get wrong."
- The test result looked fine, so you skipped the check -> fluent is not correct -> run the check from step 2 before you decide.
- Still stuck? Paste this into the assistant: "I'm on step {n} of a tutorial and I see {x}. What should I check?"

## Stay safe

- Keep "send, spend, delete" in your column. Ethan Mollick's rule for beginners is to keep approvals on "for anything that sends, spends, or deletes". AI can draft the supplier order; you place it and pay.
- Health, legal and money questions stay with you or an expert. In Maria's case, that means allergy answers.
- Paste task names, not private details. "Reply to a complaint" is enough; the customer's name is not needed.

## Practice on your own life

Start: a blank page and your own calendar for next week. Goal: one task moved from "I do it" to "AI helps", with a check you have actually run.

Do it without the grid in front of you. List six tasks. Mark each one "can I check it?" and "what if it's wrong?" from memory. Pick one, test it, and write your one-line plan.

Want help finding tasks? The kit's `find-work-to-automate` skill walks an assistant through the same sort with you, using your last week.

## What you made

You now have a sorted week and one tested handover, based on checks you can run rather than hope. That is the judgement every later lesson builds on, from briefing to agents. Next, learn to brief the assistant on the task you picked: [Brief it like a new colleague](../04-brief-it-like-a-colleague/README.md).

---
Sources: [AI Fluency: A closer look at Delegation (Claude Academy)](https://academy.claude.com/courses/ai-fluency-framework-foundations/a-closer-look-at-delegation) · [Ethan Mollick: An opinionated guide to which AI to use, Summer 2026](https://www.oneusefulthing.org/p/an-opinionated-guide-to-which-ai-b22) · [Karpathy: Sequoia Ascent 2026](https://karpathy.bearblog.dev/sequoia-ascent-2026/) · [Dell'Acqua et al., Navigating the Jagged Technological Frontier (2023)](https://doi.org/10.2139/ssrn.4573321) · Screens checked: November 2026 · Plan limits checked: 10 November 2026
