/*
 * Day 6 - Numbers Ending in 7
 * Instructions:
 * - Run this file with Node.js: node 01-NumbersEndingIn7.js
 * - This program prints all numbers from 7 to 997 that end in 7
 * - Hint: Use modulo 10 to check the last digit
 */

function solve() {
    for (let i = 7; i <= 997; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}
solve();
