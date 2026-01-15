/*
 * Day 4 - Ski Trip
 * Instructions:
 * - Run this file with Node.js: node 11-SkiTrip.js
 * - This program calculates ski trip cost based on room type and days
 * - Includes discounts based on stay length and review type
 * - Hint: Complex pricing with multiple discount tiers
 */

function solve(day, roomType, grade) {
    let days = Number(day);
    let prize = 0;
    let saleprize = 0;
    switch (roomType) {
        case "room for one person":
            prize = (days - 1) * 18;
            saleprize = prize;
            if (grade == "positive") {
                console.log((saleprize + saleprize * 0.25).toFixed(2));
            }
            if (grade == "negative") {
                console.log((saleprize - saleprize * 0.1).toFixed(2));
            }
            break;
        case "apartment":
            prize = (days - 1) * 25;
            if (days > 0 && days < 10) {
                saleprize = prize - prize * 0.3;
            } else if (days >= 10 && days <= 15) {
                saleprize = prize - prize * 0.35;
            } else if (days > 15) {
                saleprize = prize - prize * 0.5;
            }
            if (grade == "positive") {
                console.log((saleprize + saleprize * 0.25).toFixed(2));
            }
            if (grade == "negative") {
                console.log((saleprize - saleprize * 0.1).toFixed(2));
            }
            break;
        case "president apartment":
            prize = (days - 1) * 35;
            if (days > 0 && days < 10) {
                saleprize = prize - prize * 0.1;
            } else if (days >= 10 && days <= 15) {
                saleprize = prize - prize * 0.15;
            } else if (days > 15) {
                saleprize = prize - prize * 0.2;
            }
            if (grade == "positive") {
                console.log((saleprize + saleprize * 0.25).toFixed(2));
            }
            if (grade == "negative") {
                console.log((saleprize - saleprize * 0.1).toFixed(2));
            }
            break;
        default:
            console.log("error");
    }
}
solve(10, "room for one person", "positive");
