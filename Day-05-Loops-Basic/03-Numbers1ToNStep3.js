/*
 * Day 5 - Numbers 1 to N with Step 3
 * Instructions:
 * - Run this file with Node.js: node 03-Numbers1ToNStep3.js
 * - This program prints 1, 4, 7, 10... up to N
 * - Try different values of N
 * - Hint: Use i += 3 to increment by 3
 */

function solve(arg1) {
    let n = Number(arg1);
    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}
solve(10);
