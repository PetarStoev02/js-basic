/*
 * Day 3 - Area of Figures
 * Instructions:
 * - Run this file with Node.js: node 12-AreaOfFigures.js
 * - This program calculates area for different shapes
 * - Try: "square", "rectangle", "circle", "triangle"
 * - Hint: Each shape has its own formula
 */

function AreaOfFigures(arg1, arg2, arg3) {
    let type = arg1;
    let result = 0;

    if (type === "square") {
        let side = Number(arg2);
        result = side * side;
    } else if (type === "rectangle") {
        let sideA = Number(arg2);
        let sideB = Number(arg3);
        result = sideA * sideB;
    } else if (type === "circle") {
        let radius = Number(arg2);
        result = Math.PI * radius * radius;
    } else if (type === "triangle") {
        let sideA = Number(arg2);
        let sideB = Number(arg3);
        result = (sideA * sideB) / 2;
    }
    console.log(result.toFixed(3));
}
AreaOfFigures("triangle", 4.5, 20);
