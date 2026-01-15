/*
 * Day 2 - 2D Rectangle Area
 * Instructions:
 * - Run this file with Node.js: node 10-RectangleArea2D.js
 * - This program calculates area and perimeter from coordinates
 * - Try different coordinate pairs
 * - Hint: Math.abs() gives absolute value (removes negative sign)
 */

function rectangleArea(x1, y1, x2, y2) {
    let length = Number(Math.abs(x1 - x2));
    let width = Number(Math.abs(y1 - y2));
    let area = length * width;
    let perimeter = 2 * (length + width);
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
rectangleArea(30, 40, 70, -10);
