/*
 * Day 2 - USD to BGN
 * Instructions:
 * - Run this file with Node.js: node 13-USDtoBGN.js
 * - This program converts Bulgarian Lev to USD
 * - Try different amounts
 * - Hint: Exchange rate is approximately 1.79549
 */

function money(lv) {
    let usd = Number(lv * 1.79549).toFixed(2);
    console.log(usd);
}
money(12.5);
