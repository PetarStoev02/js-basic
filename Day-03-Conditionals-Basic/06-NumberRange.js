/*
 * Day 3 - Number in Range (100-200)
 * Instructions:
 * - Run this file with Node.js: node 06-NumberRange.js
 * - This program checks if number is in range 100-200
 * - Try different numbers
 * - Hint: Use comparison operators to check ranges
 */

function numbers(num) {
    if (num < 100) {
        console.log("Less than 100");
    } else if (num <= 200) {
        console.log("Between 100 and 200");
    } else if (num > 200) {
        console.log("Greater than 200");
    }
}
numbers(100);
