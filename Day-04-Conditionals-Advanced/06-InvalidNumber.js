/*
 * Day 4 - Invalid Number
 * Instructions:
 * - Run this file with Node.js: node 06-InvalidNumber.js
 * - This program validates if number is in range 100-200 or is 0
 * - Try different numbers
 * - Hint: Valid numbers don't print anything
 */

function solve(arg1) {
    let num = Number(arg1);

    if (num >= 100 && num <= 200 || num == 0) {
        // Valid - no output
    } else {
        console.log("invalid");
    }
}
solve(123);
