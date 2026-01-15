/*
 * Day 6 - Special Sum of Numbers
 * Instructions:
 * - Run this file with Node.js: node 03-SpecialSumOfNumbers.js
 * - This program sums numbers in a range that are divisible by a divider
 * - Parameters: start, end, divider
 * - Hint: Use modulo to check divisibility
 */

function solve(startn, endn, dividerr) {
    let start = Number(startn);
    let end = Number(endn);
    let divider = Number(dividerr);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % divider === 0) {
            sum += i;
        }
    }
    console.log(sum);
}
solve(10, 30, 7);
