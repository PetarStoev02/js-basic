/*
 * Day 2 - Pet Shop
 * Instructions:
 * - Run this file with Node.js: node 06-PetShop.js
 * - This program calculates total price for pet food
 * - Try different quantities
 * - Hint: toFixed(2) formats numbers to 2 decimal places
 */

function PetShop(dogs, otherDogs) {
    let dogsPrize = Number(dogs * 2.5);
    let otherDogsPrize = Number(otherDogs * 4);
    console.log(Number(dogsPrize + otherDogsPrize).toFixed(2) + " lv.");
}
PetShop(13, 9);
