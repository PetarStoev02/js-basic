/*
 * Day 2 - Yard Greening
 * Instructions:
 * - Run this file with Node.js: node 08-YardGreening.js
 * - This program calculates greening cost with discount
 * - Try different square meter values
 * - Hint: 18% discount is applied to the base price
 */

function YardGreening(squereM) {
    let Prize = Number(squereM * 7.61).toFixed(2);
    let discountPrice = Number(Prize * 0.18).toFixed(2);
    let finalPrice = Number(Prize - discountPrice).toFixed(2);
    console.log(
        `The final price is: ${finalPrice} lv.
        The discount is: ${discountPrice} lv.`
    );
}
YardGreening(540);
