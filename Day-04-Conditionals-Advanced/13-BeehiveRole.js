/*
 * Day 4 - Beehive Role (Exam Problem)
 * Instructions:
 * - Run this file with Node.js: node 13-BeehiveRole.js
 * - This program assigns bee roles based on intellect, strength, and gender
 * - Different thresholds determine different roles
 * - Hint: Order of conditions matters!
 */

function solve(arg1, arg2, arg3) {
    let intellect = Number(arg1);
    let strength = Number(arg2);
    let sex = arg3;

    if (intellect >= 80 && strength >= 80 && sex === "female") {
        console.log(`Queen Bee`);
    } else if (intellect >= 80) {
        console.log(`Repairing Bee`);
    } else if (intellect >= 60) {
        console.log("Cleaning Bee");
    } else if (strength >= 80 && sex === "male") {
        console.log("Drone Bee");
    } else if (strength >= 60) {
        console.log(`Guard Bee`);
    } else {
        console.log(`Worker Bee`);
    }
}
solve(90, 65, "male");
