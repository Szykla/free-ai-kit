# Check AI's work in ten minutes

AI is confidently wrong often enough that you need a habit for checking it. "Evals"
sound like engineering. For everyday use they're simple: **look at real outputs and
write down what's wrong.** The best AI builders spend most of their time doing exactly that.

## Maria's case
Maria wants AI to answer customer messages ("Do you have gluten-free?", "Can I order a
cake for Saturday?"). Before she lets it draft replies, she checks it.

## The ten-minute check
1. **Collect 10 real questions.** Not invented ones. Copy them from last week's messages,
   including the awkward ones.
2. **Run all 10** with your setup (your instructions + context file).
3. **Read every answer** and mark it: ✅ would send as is, ✏️ needs a fix, ❌ wrong.
4. **For each ✏️ and ❌, write one line on why.** "Promised a Saturday cake without
   checking orders." "Said we have vegan croissants. We don't."
5. **Group the reasons.** Usually two or three causes explain most mistakes. Maria's:
   the AI didn't know the menu, and it promised things only she can promise.
6. **Fix the cause, not the answer.** Add the menu to the context file. Add a rule:
   "Never confirm an order or a date. Say Maria will confirm."
7. **Run the same 10 again.** Count the ✅. Keep the 10 questions: every time you change
   your setup, rerun them.

## Three rules that save you
- **Never trust a number, date, price or quote you didn't give it.** Check them every time.
- **Ask it where an answer came from.** "Which line of my menu says that?" If it can't
  point to one, it made it up.
- **Anything that leaves your hands stays your job.** AI drafts the reply; you press send.

Going further: Claude Academy's free [Introduction to evals](https://academy.claude.com/courses/introduction-to-evals),
and Hamel Husain's free writing on evals, which this method follows ("look at your data first").
