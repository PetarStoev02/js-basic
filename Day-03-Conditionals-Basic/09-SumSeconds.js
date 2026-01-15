/*
 * Day 3 - Sum Seconds
 * Instructions:
 * - Run this file with Node.js: node 09-SumSeconds.js
 * - This program sums three times and formats as mm:ss
 * - Try different second values
 * - Hint: Use Math.floor() for minutes, % for remaining seconds
 */

function sumSeconds(arg1, arg2, arg3) {
    let firstTime = Number(arg1);
    let secondTime = Number(arg2);
    let thirdTime = Number(arg3);

    let totalTime = firstTime + secondTime + thirdTime;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(22, 7, 34);
