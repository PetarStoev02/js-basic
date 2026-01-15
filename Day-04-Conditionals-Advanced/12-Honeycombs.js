/*
 * Day 4 - Honeycombs (Exam Problem)
 * Instructions:
 * - Run this file with Node.js: node 12-Honeycombs.js
 * - This program calculates honey production from bees and flowers
 * - Each bee produces 0.21g of honey per flower
 * - Hint: 100g fills one honeycomb
 */

function solve(arg1, arg2) {
    let beeNumber = Number(arg1);
    let flower = Number(arg2);
    let honey = 0;

    honey = beeNumber * flower * 0.21;
    let honeyBun = Math.floor(honey / 100);
    let honeyBunLeft = honey % 100;

    console.log(`${honeyBun} honeycombs filled.`);
    console.log(`${honeyBunLeft.toFixed(2)} grams of honey left.`);
}
solve(11, 120);
