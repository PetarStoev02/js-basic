/*
 * Day 4 - Personal Titles
 * Instructions:
 * - Run this file with Node.js: node 07-PersonalTitles.js
 * - This program assigns title based on age and gender
 * - Try different age/gender combinations
 * - Hint: Nested if statements for complex logic
 */

function title(age, sex) {
    age = Number(age);

    if (sex == "f") {
        if (age >= 16) {
            console.log("Ms.");
        }
        if (age < 16) {
            console.log("Miss");
        }
    }

    if (sex == "m") {
        if (age >= 16) {
            console.log("Mr.");
        }
        if (age < 16) {
            console.log("Master");
        }
    }
}
title(25, "f");
