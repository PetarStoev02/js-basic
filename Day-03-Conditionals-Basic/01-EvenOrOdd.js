/*
 * Day 3 - Even or Odd
 * Instructions:
 * - Run this file with Node.js: node 01-EvenOrOdd.js
 * - This program checks if a number is even or odd
 * - Try different numbers
 * - Hint: Use modulo operator (%) - if num % 2 === 0, it's even
 */

function EvenOrOdd(number) {
    let num = Number(number);
    if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
EvenOrOdd(1);
