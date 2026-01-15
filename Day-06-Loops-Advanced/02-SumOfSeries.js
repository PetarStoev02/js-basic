/*
 * Day 6 - Sum of Series (Sum of Squares)
 * Instructions:
 * - Run this file with Node.js: node 02-SumOfSeries.js
 * - This program calculates 1² + 2² + 3² + ... + n²
 * - Try different values of n
 * - Hint: Accumulate i * i in each iteration
 */

function solve(number) {
    let num = Number(number);
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i * i;
    }
    console.log(sum);
}
solve(5);
