# JavaScript Basics Practice

## Overview
This repository collects my solutions for entry-level JavaScript programming exercises.  
They cover console I/O, conditionals, loops, and simple algorithmic thinking, grouped by the learning module or exam they came from.

## Repository Layout
- `Day 1`, `Day 2`, `Day-3`: Intro exercises that build familiarity with syntax, expressions, and simple logic.
- `Day 2-Exercise`, `Loops - Lab`, `Loops - JS - Exercise`, `Conditional Statements Advanced - Lab`: Focused practice sets on a single topic (loops, conditionals, etc.).
- `Exam`, `Exam-2`: Longer multi-step problems modeled after programming exams.

Each directory contains individual `.js` files where every file exports a single function named `solve` (or similar) that expects an input array of strings—matching the format used in SoftUni/JS-Basics coursework.

## Running Any Solution
1. Ensure Node.js (v14+) is installed.
2. From the repo root, run a specific exercise with:
   ```
   node "Day-3/EvenorOdd.js"
   ```
   Adjust the relative path to point at the file you want to execute.
3. Provide sample input by editing the file’s `solve` invocation at the bottom, or pipe via a simple harness:
   ```js
   const input = ["20"]; // replace with the case you want to test
   solve(input);
   ```

## Adding New Exercises
1. Create a new `.js` file in the relevant directory.
2. Follow the existing pattern:
   - Parse arguments from the input array.
   - Print results using `console.log`.
   - Call `solve` with sample input so the file can run standalone.
3. Run `node path/to/file.js` to verify the output.

## Notes
- The repository intentionally keeps dependencies minimal; only Node’s standard runtime is required.
- Feel free to open issues or PRs if you find mistakes or have a cleaner approach to a problem.