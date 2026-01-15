/*
 * Day 4 - Fruit or Vegetable
 * Instructions:
 * - Run this file with Node.js: node 04-FruitOrVegetable.js
 * - This program classifies food as fruit, vegetable, or unknown
 * - Try different food names
 * - Hint: Use || (OR) operator to check multiple values
 */

function shop(arg1) {
    if (
        arg1 === "banana" ||
        arg1 === "apple" ||
        arg1 === "kiwi" ||
        arg1 === "cherry" ||
        arg1 === "lemon" ||
        arg1 === "grapes"
    ) {
        console.log("fruit");
    } else if (
        arg1 === "tomato" ||
        arg1 === "cucumber" ||
        arg1 === "pepper" ||
        arg1 === "carrot"
    ) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}
shop("pepper");
