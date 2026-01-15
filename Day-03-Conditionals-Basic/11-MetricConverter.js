/*
 * Day 3 - Metric Converter
 * Instructions:
 * - Run this file with Node.js: node 11-MetricConverter.js
 * - This program converts between m, cm, and mm
 * - Try different unit combinations
 * - Hint: Use nested if-else for input/output unit pairs
 */

function converter(num, input, output) {
    let number = Number(num);

    if (input === "m" && output === "mm") {
        number = number * 1000;
    } else if (input === "m" && output === "cm") {
        number = number * 100;
    } else if (input === "mm" && output === "m") {
        number = number / 1000;
    } else if (input === "mm" && output === "cm") {
        number = number / 10;
    } else if (input === "cm" && output === "m") {
        number = number / 100;
    } else if (input === "cm" && output === "mm") {
        number = number * 10;
    }
    console.log(number.toFixed(3));
}
converter(5000, "cm", "m");
