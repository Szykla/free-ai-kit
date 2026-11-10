# Context beats clever prompts

**The example used in tutorials 5 to 7:** Maria runs a small bakery. She answers the
same customer questions all day, writes a weekly Instagram post, and orders flour on
gut feeling. We'll use AI for all three.

## The one idea
Models are good enough now that "prompt tricks" barely matter. What matters is what
the model *knows* when it answers. A short request with the right context beats a
long clever prompt with none.

## Bad vs good, side by side

**Without context:**
> Write an Instagram post for my bakery.

You get a generic post with emoji, "Indulge in our delicious treats!", and three
hashtags nobody searches.

**With context:**
> Write this week's Instagram post for my bakery.
> - Who reads it: regulars from the neighbourhood, mostly parents, some students.
> - This week: pumpkin seed sourdough is back (Thu-Sat only), the shop closes at 2 pm on Saturday.
> - How I write: short, a bit dry, no emoji, never "indulge" or "treat yourself".
> - Two past posts I liked: <paste them>.
> - Give me two versions, under 60 words each.

The second takes 60 seconds longer to write and you'll actually post it.

## The five things worth telling it
1. **Who it's for**: the reader, not you.
2. **What's true right now**: facts, dates, numbers it can't know.
3. **What good looks like**: one or two examples you liked. Examples beat descriptions.
4. **What to avoid**: the words or habits that annoy you.
5. **The shape**: length, format, how many versions.

## Make it stick
Don't retype this each time. Put points 1, 3 and 4 into a project's instructions or
an `about-my-business.md` file (see tutorial 1, step 3). Then each week Maria only types
point 2: "pumpkin seed sourdough is back, closing at 2 on Saturday".

## Try it now
Take something you asked AI for this week and didn't like. Add the five things.
Compare the two answers. That gap is the whole lesson.

Want the full theory? Anthropic's [prompt engineering tutorial](https://github.com/anthropics/courses/tree/master/prompt_engineering_interactive_tutorial)
and OpenAI's AI Foundations course (see tutorial 4) go deeper.
