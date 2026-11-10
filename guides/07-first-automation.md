# Your first automation: a weekly report that writes itself

Paid courses sell "AI that works while you sleep". Here's the honest version: one
scheduled job, built step by step, that you trust because you watched it work first.

## Maria's job
Every Monday, Maria guesses how much flour, butter and seeds to order. She has a
spreadsheet of last month's sales. We'll have AI turn it into an order suggestion.

## Step 1: do it by hand, once (rung 1)
Open your AI tool, attach the sales sheet, and ask:
> Here are my sales for the last four weeks (attached). Each loaf of sourdough uses
> 500 g flour; each croissant 60 g butter. Suggest this week's order for flour, butter
> and pumpkin seeds. Show your working as a table. Round up to whole bags (25 kg flour,
> 10 kg butter, 5 kg seeds). Mark anything you had to guess.

Check the table against what you'd have ordered. Correct it ("Thursday is market day,
double it"). Those corrections are the rules.

## Step 2: turn it into a skill (rung 2)
Ask the AI to run the `skill-builder` skill from this kit on the conversation you just
had. You get a `SKILL.md` with your recipe amounts, bag sizes and the Thursday rule.
Run it next Monday on fresh data. Does it match what you'd do? If yes, that's one clean run.

## Step 3: schedule it (rung 3, after three clean runs)
Only after three Mondays in a row without corrections:
- **If your AI app offers scheduled tasks**, schedule "Run the flour-order skill on the
  newest sales sheet" for Monday 7:00.
- **If not**, a calendar reminder at Monday 7:00 that says "run flour-order" is a fine
  automation too. Honest beats fancy.

## Step 4: keep the human step
The schedule writes the suggestion. Maria still places the order herself. A schedule
never makes spending automatic.

## When it goes wrong
It will, eventually: a holiday week, a new product. When Maria corrects it, she runs
`retro` and puts the fix into the skill. A run that needed a fix drops it back to step 2
until it runs clean three times again.
