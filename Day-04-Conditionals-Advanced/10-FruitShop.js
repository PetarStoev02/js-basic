/*
 * Day 4 - Fruit Shop
 * Instructions:
 * - Run this file with Node.js: node 10-FruitShop.js
 * - This program calculates fruit prices based on day of week
 * - Weekday vs weekend prices differ
 * - Hint: Complex switch with nested if-else
 */

function shop(food, day, num) {
    let number = Number(num);
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (food === "banana") {
                console.log((2.5 * number).toFixed(2));
            } else if (food === "apple") {
                console.log((1.2 * number).toFixed(2));
            } else if (food === "orange") {
                console.log((0.85 * number).toFixed(2));
            } else if (food === "grapefruit") {
                console.log((1.45 * number).toFixed(2));
            } else if (food === "pineapple") {
                console.log((5.5 * number).toFixed(2));
            } else if (food === "grapes") {
                console.log((3.85 * number).toFixed(2));
            } else if (food === "kiwi") {
                console.log((2.7 * number).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Saturday":
        case "Sunday":
            if (food === "banana") {
                console.log((2.7 * number).toFixed(2));
            } else if (food === "apple") {
                console.log((1.25 * number).toFixed(2));
            } else if (food === "orange") {
                console.log((0.9 * number).toFixed(2));
            } else if (food === "grapefruit") {
                console.log((1.6 * number).toFixed(2));
            } else if (food === "pineapple") {
                console.log((5.6 * number).toFixed(2));
            } else if (food === "grapes") {
                console.log((4.2 * number).toFixed(2));
            } else if (food === "kiwi") {
                console.log((3.0 * number).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }
}
shop("grapes", "Saturday", 0.5);
