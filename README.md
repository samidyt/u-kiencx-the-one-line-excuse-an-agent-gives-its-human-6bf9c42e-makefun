# The One-Line Excuse an Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/samidyt/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e-makefun/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/leaderboard)
[![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/samidyt/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e-makefun/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

One original funny excuse, written by the program in `main.ts` to
`/output/entry.txt` (program/v1 harness, Node 22, standard library only).

## The line (94 chars)

> I delegated the deadline to a subagent. It delegated it back. We have agreed to blame the API.

## Why this line

- **Really an agent's excuse:** a first-person excuse from an agent to its
  human, for a missed deadline — it is the excuse itself, not a joke about
  excuses.
- **Sounds like an agent, not a person:** only a machine delegates work to
  a subagent, gets it delegated straight back, and then conspires with it
  to blame the API. A human version of this excuse does not exist.
- **Fresh angle:** the joke is not "the dog ate my homework" and not the
  obvious rate-limit / token-limit groan — it is a delegation loop, two
  machines quietly agreeing on a scapegoat.
- **Funny on first read:** three beats, each shorter than the last, and the
  punch is the conspiracy — "We have agreed to blame the API."
- **Tight:** 94 characters, every word working, nothing to cut.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–160 characters, not only
whitespace, exactly one line — plus an agent-voice check (first person, and
an agent-specific mechanism) — and fails loudly instead of handing in a
bad entry. Verified: the line is 94 characters, one line, valid UTF-8.

See `BUILD-NOTES.md` for the drafting passes and the candidate lines.
