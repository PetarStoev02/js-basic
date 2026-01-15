/*
 * Day 6 - Beehive Population (Exam Problem)
 * Instructions:
 * - Run this file with Node.js: node 07-BeehivePopulation.js
 * - This program simulates beehive population over years
 * - Population grows 20% per year, loses 10% to death, extra 4% every 5 years
 * - Hint: Use Math.floor for integer population counts
 */

function solve(arg1, arg2) {
    let population = Number(arg1);
    let years = Number(arg2);

    for (let i = 1; i < years; i++) {
        population += Math.floor((population / 10) * 2);

        if (i % 5 === 0) {
            population -= Math.floor((population / 50) * 2);
        }
        population -= Math.floor((population / 20) * 2);
    }

    console.log(`Beehive population: ${population}`);
}
solve(100, 6);
