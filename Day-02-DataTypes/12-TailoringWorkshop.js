/*
 * Day 2 - Tailoring Workshop
 * Instructions:
 * - Run this file with Node.js: node 12-TailoringWorkshop.js
 * - This program calculates fabric costs for tables
 * - Try different table counts and dimensions
 * - Hint: Converts USD to BGN using exchange rate
 */

function workshop(tables, length, width) {
    tables = Number(tables);
    length = Number(length);
    width = Number(width);

    let rab = 0.3;
    let usd = 1.85;

    let tablespace = tables * (length + 2 * rab) * (width + 2 * rab);
    let blanketspace = tables * (length / 2) * (length / 2);

    let priceusd = tablespace * 7 + blanketspace * 9;
    let priceleva = priceusd * usd;

    console.log(`${priceusd.toFixed(2)} USD`);
    console.log(`${priceleva.toFixed(2)} BGN`);
}
workshop(10, 1.2, 0.65);
