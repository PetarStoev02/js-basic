/*
 * Day 4 - Animal Type
 * Instructions:
 * - Run this file with Node.js: node 03-AnimalType.js
 * - This program classifies animals as mammal, reptile, or unknown
 * - Try: "dog", "crocodile", "tortoise", "snake"
 * - Hint: Multiple cases can share the same code block
 */

function animalType(animal) {
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}
animalType("dog");
