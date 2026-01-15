/*
 * Day 3 - Speed Info
 * Instructions:
 * - Run this file with Node.js: node 05-SpeedInfo.js
 * - This program categorizes speed into different levels
 * - Try different speed values
 * - Hint: Use else-if chain for multiple conditions
 */

function speedInfo(speedAsString) {
    let speed = Number(speedAsString);

    if (speed <= 10) {
        console.log("slow");
    } else if (speed <= 50) {
        console.log("average");
    } else if (speed <= 150) {
        console.log("fast");
    } else if (speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}
speedInfo(0);
