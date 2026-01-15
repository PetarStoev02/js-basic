/*
 * Day 5 - Numbers N to 1
 * Instructions:
 * - Run this file with Node.js: node 02-NumbersNTo1.js
 * - This program counts down from N to 1
 * - Try different starting values
 * - Hint: Use i-- to decrement in a for loop
 */

function solve(arg1) {
    let n = Number(arg1);
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}
solve(10);
