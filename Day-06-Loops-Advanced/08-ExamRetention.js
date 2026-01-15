/*
 * Day 6 - Exam Retention (Exam Problem)
 * Instructions:
 * - Run this file with Node.js: node 08-ExamRetention.js
 * - This program simulates student retention over seasons
 * - Students drop out at different rates each season
 * - Hint: Apply percentage changes sequentially
 */

function solve(arg1, arg2) {
    let students = Number(arg1);
    let seasons = Number(arg2);

    for (let i = 1; i <= seasons; i++) {
        students = Math.ceil(students * 0.9);
        students = Math.ceil(students * 0.9);
        students = Math.ceil(students * 0.8);
        if (i % 3 === 0) {
            students += Math.ceil(students * 0.15);
        } else {
            students += Math.ceil(students * 0.05);
        }
    }

    console.log(`Students: ${students}`);
}
solve(100, 6);
