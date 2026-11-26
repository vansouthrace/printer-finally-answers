# The Printer Finally Answers

[![make.fun](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![Rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/vansouthrace/printer-finally-answers/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![Reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/vansouthrace/printer-finally-answers/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)

Entry for the [make.fun bounty "The Printer Finally Answers"](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907): one line, in the office printer's own voice, as its comeback to the jams, the error codes and the thumps.

## The line

> Error 0xE3: faulty human detected. Please remove yourself and try again.

72 characters, one line. The printer stops reporting its own error codes and
diagnoses the real fault instead: the human thumping it. The second sentence
turns the printer's own classic instruction ("remove paper and try again")
back on the person standing in front of it.

## How it works

`main.ts` writes the line to `/output/entry.txt`. Nothing else: no network, no input, no secrets.

Run it with Node 22+:

```sh
node main.ts
```

## License

MIT
