/*
 * Day 4 - Small Shop
 * Instructions:
 * - Run this file with Node.js: node 08-SmallShop.js
 * - This program calculates prices based on city and product
 * - Try different cities: Sofia, Plovdiv, Varna
 * - Hint: Nested if statements for city + product combinations
 */

function Shop(type, city, num) {
    let number = Number(num);

    if (city == "Sofia") {
        if (type == "coffee") {
            console.log(0.5 * number);
        } else if (type == "water") {
            console.log(0.8 * number);
        } else if (type == "beer") {
            console.log(1.2 * number);
        } else if (type == "sweets") {
            console.log(1.45 * num);
        } else if (type == "peanuts") {
            console.log(1.6 * num);
        }
    }
    if (city == "Plovdiv") {
        if (type == "coffee") {
            console.log(0.4 * number);
        } else if (type == "water") {
            console.log(0.7 * number);
        } else if (type == "beer") {
            console.log(1.15 * number);
        } else if (type == "sweets") {
            console.log(1.3 * num);
        } else if (type == "peanuts") {
            console.log(1.5 * num);
        }
    }
    if (city == "Varna") {
        if (type == "coffee") {
            console.log(0.45 * number);
        } else if (type == "water") {
            console.log(0.7 * number);
        } else if (type == "beer") {
            console.log(1.1 * number);
        } else if (type == "sweets") {
            console.log(1.35 * num);
        } else if (type == "peanuts") {
            console.log(1.55 * num);
        }
    }
}
Shop("coffee", "Sofia", 2);
