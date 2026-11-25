// One line in, one laugh out: this script only ferries the joke to the output folder.
// The joke itself lives in entry.txt next door, so the code never has to be funny.
// A trailing newline is a stowaway, not part of the punchline, so it gets shown the door.
// If the line is too short, too long, or just blank air, the script refuses to play along.
// The minibar gag rides along untouched: the runner never rewrites a single word.
// One star, eighteen dollars, twice over — the punchline pays for itself, literally.
// The guard counts characters, not laughs, and one hundred thirteen fits the room.
// A joke this short needs no luggage, only a door to walk through.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

let line = readFileSync(join(here, "entry.txt"), "utf8");

if (line.endsWith("\n")) {
  line = line.slice(0, -1);
}

if (line.length < 1 || line.length > 140 || line.trim().length === 0) {
  console.error("error: entry must be 1-140 characters and not only whitespace");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("error: MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
