/*
 * Day 6 - Lottery Statistics
 * Instructions:
 * - Run this file with Node.js: node 04-LotteryStatistics.js
 * - This program calculates percentages of different number types
 * - Tracks: odd single digits, even numbers, numbers ending in 7, divisors of 100
 * - Hint: Multiple conditions checked in one loop
 */

function solve(n) {
    let number = Number(n);
    let oddNumbers = 0;
    let evenNumbers = 0;
    let oddNumbers7 = 0;
    let number100 = 0;

    for (let i = 1; i <= number; i++) {
        if (i % 2 === 1 && i < 10) {
            oddNumbers += 1;
        }
        if (i % 2 === 0) {
            evenNumbers += 1;
        }
        if (i % 2 === 1 && i % 10 === 7) {
            oddNumbers7 += 1;
        }
        if (100 % i === 0) {
            number100 += 1;
        }
    }
    let oddNumbersPercent = (oddNumbers / number) * 100;
    let evenNumbersPercent = (evenNumbers / number) * 100;
    let oddNumbers7Percent = (oddNumbers7 / number) * 100;
    let number100Percent = (number100 / number) * 100;

    console.log(`${oddNumbersPercent.toFixed(2)}%`);
    console.log(`${evenNumbersPercent.toFixed(2)}%`);
    console.log(`${oddNumbers7Percent.toFixed(2)}%`);
    console.log(`${number100Percent.toFixed(2)}%`);
}
solve(35);
