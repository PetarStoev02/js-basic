/*
 * Day 5 - Even Powers of 2
 * Instructions:
 * - Run this file with Node.js: node 04-EvenPowersOf2.js
 * - This program prints powers of 2 at even positions (2^0, 2^2, 2^4...)
 * - Try different values of N
 * - Hint: Multiply by 4 each iteration (2^2 = 4)
 */

function solve(arg1) {
    let n = Number(arg1);
    let num = 1;
    for (let i = 0; i <= n; i += 2) {
        console.log(num);
        num = num * 2 * 2;
    }
}
solve(4);
