/*
 * Day 5 - Sum of Numbers (Digits)
 * Instructions:
 * - Run this file with Node.js: node 07-SumOfNumbers.js
 * - This program sums all digits in a string
 * - Try different number strings
 * - Hint: Parse each character as a digit
 */

function solve(input) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "1":
                sum += 1;
                break;
            case "2":
                sum += 2;
                break;
            case "3":
                sum += 3;
                break;
            case "4":
                sum += 4;
                break;
            case "5":
                sum += 5;
                break;
            case "6":
                sum += 6;
                break;
            case "7":
                sum += 7;
                break;
            case "8":
                sum += 8;
                break;
            case "9":
                sum += 9;
                break;
            case "0":
                sum += 0;
                break;
        }
    }
    console.log(`The sum of the digits is:` + sum);
}
solve("1234");
