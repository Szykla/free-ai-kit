# Give your AI a memory with plain text files

People sell "second brain" systems for AI. The version that works best is free: a
folder of Markdown notes that any AI tool can read, and you can read too.

## Why plain files
- Every tool reads them: Claude, ChatGPT, Gemini, local models, coding agents.
- You can open, fix and delete anything. No hidden memory you can't inspect.
- They outlive any app. Switch tools and your memory comes with you.

## The setup (15 minutes)
```
memory/
  INDEX.md          one line per file: what's in it
  about-me.md       who you are, goals, how you like things
  people.md         the people who matter, one line each
  projects/
    bakery-site.md  one file per ongoing thing
  decisions.md      what you decided and why, with dates
```

`INDEX.md` is the trick. The AI reads the index first (it's short), then opens only
the files it needs. That keeps answers fast and cheap even when memory grows.

## The rules that keep it useful
1. **One subject per file.** Update the file; don't start a second one on the same thing.
2. **Facts, not diaries.** "Supplier changed to Müller, 3 Nov, cheaper butter" beats a
   page about how the week went.
3. **Dates on everything that can go stale.** Prices, plans, who's doing what.
4. **Delete what's wrong.** A wrong memory is worse than none.
5. **Never store passwords, keys or card numbers** in memory files.

## Make the AI keep it
Add to your custom instructions or project instructions:

```
Before answering, read memory/INDEX.md and open the files that matter.
When I tell you a lasting fact or decision, propose the exact line to add or change,
and in which file. Don't write it until I say yes.
```

With a tool that can edit files (Claude Code, Codex, the desktop apps with folder
access), it will maintain the files itself after your yes. In a plain chat, it gives
you the line to paste.

## Check it monthly
Ask: "Read my memory folder. What's out of date, duplicated or contradicting?" Fix
what it finds. Ten minutes a month keeps the memory honest.
