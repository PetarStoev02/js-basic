/*
 * Day 3 - Number 1-9 to Text
 * Instructions:
 * - Run this file with Node.js: node 07-NumberToText.js
 * - This program converts digits 1-9 to words
 * - Try different single digit numbers
 * - Hint: Use else-if chain for each number
 */

function numbers(num) {
    if (num == 1) {
        console.log("one");
    } else if (num == 2) {
        console.log("two");
    } else if (num == 3) {
        console.log("three");
    } else if (num == 4) {
        console.log("four");
    } else if (num == 5) {
        console.log("five");
    } else if (num == 6) {
        console.log("six");
    } else if (num == 7) {
        console.log("seven");
    } else if (num == 8) {
        console.log("eight");
    } else if (num == 9) {
        console.log("nine");
    } else if (num >= 10) {
        console.log("number too big");
    }
}
numbers(19);
