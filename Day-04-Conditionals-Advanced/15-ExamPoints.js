/*
 * Day 4 - Exam Points (Exam Problem)
 * Instructions:
 * - Run this file with Node.js: node 15-ExamPoints.js
 * - This program calculates exam points based on problem number and course
 * - Different courses have different point multipliers
 * - Hint: switch for course, if-else for problem number
 */

function solve(arg1, arg2, arg3) {
    let zad = Number(arg1);
    let points = Number(arg2);
    let course = arg3;

    switch (course) {
        case "Basics":
            if (zad === 1) {
                points *= 0.08;
                points -= points * 0.2;
            } else if (zad === 2) {
                points *= 0.09;
            } else if (zad === 3) {
                points *= 0.09;
            } else if (zad === 4) {
                points *= 0.1;
            }
            break;
        case "Fundamentals":
            if (zad === 1) {
                points *= 0.11;
            } else if (zad === 2) {
                points *= 0.11;
            } else if (zad === 3) {
                points *= 0.12;
            } else if (zad === 4) {
                points *= 0.13;
            }
            break;
        case "Advanced":
            if (zad === 1) {
                points *= 0.14;
            } else if (zad === 2) {
                points *= 0.14;
            } else if (zad === 3) {
                points *= 0.15;
            } else if (zad === 4) {
                points *= 0.16;
            }
            points += points * 0.2;
            break;
    }
    console.log(`Total points: ${points.toFixed(2)}`);
}
solve(2, 95, "Advanced");
