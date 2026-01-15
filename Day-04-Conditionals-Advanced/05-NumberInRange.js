/*
 * Day 4 - Number in Range
 * Instructions:
 * - Run this file with Node.js: node 05-NumberInRange.js
 * - This program checks if number is in range -100 to 100 (excluding 0)
 * - Try different numbers
 * - Hint: Use && (AND) operator to combine conditions
 */

function NumberR(num) {
    num = Number(num);
    if (num >= -100 && num <= 100 && num != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
NumberR(-101);
