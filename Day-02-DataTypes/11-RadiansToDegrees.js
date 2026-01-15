/*
 * Day 2 - Radians to Degrees
 * Instructions:
 * - Run this file with Node.js: node 11-RadiansToDegrees.js
 * - This program converts radians to degrees
 * - Try different radian values
 * - Hint: degrees = radians × (180 / π)
 */

function RadiansToDegrees(radians) {
    let degrees = Number((radians * 180) / Math.PI);
    console.log(degrees.toFixed(0));
}
RadiansToDegrees(6.2832);
