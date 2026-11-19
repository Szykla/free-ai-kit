# The screenshot check

`node tests/visual/visual.mjs` builds the site on main and in this tree, opens
the key pages of both in the same browser on the same machine, and lists every
page that looks different. Both sides are built with GitHub Pages' own gem set,
at the version Pages runs (`Gemfile` here), so the pages come out as they do
live. Nothing is ever accepted on its own.

## What it covers

Home, the money page, the tutorial list, the first tutorial and "Where money is
well spent", each as a whole page on a 1280×800 window and on a 390×844 phone.
`screens.mjs` lists them.

## Setup, once per machine

    npm ci --prefix tests/visual
    bundle install --gemfile tests/visual/Gemfile

It needs Ruby 3.3, Node 20 or newer, and a Chromium: the one a cloud session
has installed, `PW_EXE=<path to Chrome or Chromium>`, or
`npx --prefix tests/visual playwright install chromium`.

## When a page changed

1. Commit, then run `node tests/visual/visual.mjs`. It writes `.visual/review/`:
   a folder per changed page with the parts of it that differ (`before-N.png`
   from main, `after-N.png` and `diff-N.png`), and `README.md`, the reviewer's
   brief. Paste the pull request's title and description under "The pull
   request" (CI fills it in from the PR).
2. A blind reviewer labels each change as intended or a regression: a fresh
   agent that gets only that folder, nothing about the code or who changed it.
   For Proxxxy: `sessions_spawn` a reviewer with the folder. In a Claude Code
   session: a helper (Agent tool, with its model set) told to read
   `.visual/review/README.md` and do what it says. It writes
   `.visual/review/labels.json`.
3. Accept on purpose: `node tests/visual/visual.mjs accept <page>...`. It
   refuses a page labelled regression or not labelled at all, and ties the
   accept to the sources it was reviewed on. Commit `tests/visual/accepted.json`.

A label is advice; only step 3 changes the result. A later change to the site
(`docs/`) or to this folder voids the accept and the pages need another look;
the skills, the README and workflows don't.

## In CI

The Screens workflow runs it on every pull request, on GitHub's own runners
(free for a public repository) with their Google Chrome:
`node tests/visual/visual.mjs HEAD^1`, the merge's first parent being main. It
is red while a changed page has no accept for the PR's own head. Nothing is
uploaded; run the check where you work to get the review folder.

Main is the baseline: its look only changes through a pull request whose
changed pages were accepted. So no pictures live in the repo, and both sides
always come from one machine.
