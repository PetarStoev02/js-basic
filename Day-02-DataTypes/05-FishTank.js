/*
 * Day 2 - Fish Tank Volume
 * Instructions:
 * - Run this file with Node.js: node 05-FishTank.js
 * - This program calculates fish tank volume in liters
 * - Parameters: length, width, height (cm), percent filled
 * - Hint: Volume in liters = (l × w × h) / 1000
 */

function FishTank(length, width, hight, percent) {
    let volume = Number(length * width * hight);
    let volumeInLiters = Number(volume * 0.001);
    let percents = Number(percent * 0.01);

    console.log(Number(volumeInLiters * (1 - percents)).toFixed(3));
}
FishTank(105, 77, 89, 18.5);
