/*
 * Day 3 - Bonus Score
 * Instructions:
 * - Run this file with Node.js: node 08-BonusScore.js
 * - This program calculates bonus points based on score
 * - Try different point values
 * - Hint: Multiple conditions can add different bonuses
 */

function bonusScore(num) {
    let points = Number(num);
    let bonusPoints = 0;
    if (points <= 100) {
        bonusPoints += 5;
    } else if (points > 1000) {
        bonusPoints += points * 0.1;
    } else if (points > 100) {
        bonusPoints += points * 0.2;
    }

    if (points % 2 === 0) {
        bonusPoints += 1;
    } else if (points % 10 === 5) {
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(points + bonusPoints);
}
bonusScore(2703);
