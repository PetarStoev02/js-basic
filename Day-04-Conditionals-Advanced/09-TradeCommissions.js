/*
 * Day 4 - Trade Commissions
 * Instructions:
 * - Run this file with Node.js: node 09-TradeCommissions.js
 * - This program calculates commission based on city and sales amount
 * - Try different cities and amounts
 * - Hint: switch + nested if-else for complex pricing
 */

function solve(city, number) {
    let num = Number(number);
    let commission = 0;
    switch (city) {
        case "Sofia":
            if (num >= 0 && num <= 500) {
                console.log((commission = num * 0.05).toFixed(2));
            } else if (num > 500 && num <= 1000) {
                console.log((commission = num * 0.07).toFixed(2));
            } else if (num > 1000 && num <= 10000) {
                console.log((commission = num * 0.08).toFixed(2));
            } else if (num > 10000) {
                console.log((commission = num * 0.12).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if (num >= 0 && num <= 500) {
                console.log((commission = num * 0.045).toFixed(2));
            } else if (num > 500 && num <= 1000) {
                console.log((commission = num * 0.075).toFixed(2));
            } else if (num > 1000 && num <= 10000) {
                console.log((commission = num * 0.1).toFixed(2));
            } else if (num > 10000) {
                console.log((commission = num * 0.13).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (num >= 0 && num <= 500) {
                console.log((commission = num * 0.055).toFixed(2));
            } else if (num > 500 && num <= 1000) {
                console.log((commission = num * 0.08).toFixed(2));
            } else if (num > 1000 && num <= 10000) {
                console.log((commission = num * 0.12).toFixed(2));
            } else if (num > 10000) {
                console.log((commission = num * 0.145).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
    }
}
solve("Sofia", 1500);
