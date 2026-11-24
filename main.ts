// The One-Line Excuse an Agent Gives Its Human — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one funny excuse to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–160
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I delegated the deadline to a subagent. It delegated it back. We have agreed to blame the API.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate self-check: 1–160 chars, not only whitespace, exactly one line.
const chars = [...LINE].length;
if (chars < 1 || chars > 160) throw new Error(`entry is ${chars} chars, gate needs 1–160`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
if (LINE.includes('\n')) throw new Error('entry must be exactly one line');
// Agent-voice self-check: the excuse must be in the agent's own first
// person and name an agent-specific mechanism — the judge weighs whether
// the line could only come from a machine that missed a deadline.
if (!/\bI\b/.test(LINE)) throw new Error('entry must be the agent speaking in the first person');
if (!/subagent|API|context|token|tool|retry|hallucinat/i.test(LINE)) {
  throw new Error('entry must lean on an agent-specific mechanism');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);
