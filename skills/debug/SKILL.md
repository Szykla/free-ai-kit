---
name: debug
description: Use when a script, tool, formula or automation misbehaves (an error, wrong output, "it worked yesterday"), to find the root cause before changing anything.
---

<!-- Adapted from anthropics/knowledge-work-plugins (Apache-2.0), engineering/skills/debug, pinned at c75fda0, and mattpocock/skills (MIT), engineering/diagnosing-bugs, pinned at 59db609. Rewritten and shortened. See THIRD_PARTY.md. -->

# Debug

Find the cause before you change anything. A fix for a symptom comes back.

1. **Reproduce.** Get the exact error text and the exact steps. If you can't make it
   fail on demand, that's the first job.
2. **Narrow.** What changed since it last worked (an update, a file, a setting, the
   input)? Cut the problem in half until one piece is left.
3. **Hypothesize, then test.** Name the most likely cause and the one check that
   would prove it wrong. Run that check. Wrong? Next hypothesis.
4. **Fix the cause**, in the smallest change. Then rerun the original failing steps
   and show it passing.
5. **Stuck?** If the same kind of fix failed twice, stop and change approach: reread
   the error, question an assumption, or search for the exact error message.

Write `<REDACTED>` in place of any key or token in what you show or save.
