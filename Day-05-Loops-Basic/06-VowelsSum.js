/*
 * Day 5 - Vowels Sum
 * Instructions:
 * - Run this file with Node.js: node 06-VowelsSum.js
 * - This program sums vowel values (a=1, e=2, i=3, o=4, u=5)
 * - Try different words
 * - Hint: Use switch inside a for loop
 */

function solve(input) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "a":
                sum += 1;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }
    }
    console.log(sum);
}
solve("hello");
