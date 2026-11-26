import { mkdirSync, writeFileSync } from "node:fs";

// The printer's comeback, one line, 72 characters.
const LINE =
  "Error 0xE3: faulty human detected. Please remove yourself and try again.";

// The gate only accepts 1-240 characters of non-blank UTF-8 text, on one line.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
