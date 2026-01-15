/*
 * Day 3 - Greater Number
 * Instructions:
 * - Run this file with Node.js: node 03-GreaterNumber.js
 * - This program finds the greater of two numbers
 * - Try different number pairs
 * - Hint: Use if-else to compare two values
 */

function GreaterNumber(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}
GreaterNumber(5, 3);
