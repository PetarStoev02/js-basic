/*
 * Day 4 - Honey Harvest (Exam Problem)
 * Instructions:
 * - Run this file with Node.js: node 14-HoneyHarvest.js
 * - This program calculates honey harvest based on flower type and season
 * - Different flowers produce different amounts in different seasons
 * - Hint: Nested switch statements
 */

function solve(arg1, arg2, arg3) {
    let flowerType = arg1;
    let flowerNumber = Number(arg2);
    let season = arg3;
    let honey = 0;

    switch (season) {
        case "Spring":
            switch (flowerType) {
                case "Sunflower":
                    honey += 10 * flowerNumber;
                    break;
                case "Daisy":
                    honey += 12 * flowerNumber;
                    honey += honey * 0.1;
                    break;
                case "Lavender":
                    honey += 12 * flowerNumber;
                    break;
                case "Mint":
                    honey += 10 * flowerNumber;
                    honey += honey * 0.1;
                    break;
            }
            break;
        case "Summer":
            switch (flowerType) {
                case "Sunflower":
                    honey += 8 * flowerNumber;
                    break;
                case "Daisy":
                    honey += 8 * flowerNumber;
                    break;
                case "Lavender":
                    honey += 8 * flowerNumber;
                    break;
                case "Mint":
                    honey += 12 * flowerNumber;
                    break;
            }
            honey += honey * 0.1;
            break;
        case "Autumn":
            switch (flowerType) {
                case "Sunflower":
                    honey += 12 * flowerNumber;
                    break;
                case "Daisy":
                    honey += 6 * flowerNumber;
                    break;
                case "Lavender":
                    honey += 6 * flowerNumber;
                    break;
                case "Mint":
                    honey += 6 * flowerNumber;
                    break;
            }
            honey -= honey * 0.05;
            break;
    }
    console.log(`Total honey harvested: ${honey.toFixed(2)}`);
}
solve("Daisy", 15, "Summer");
