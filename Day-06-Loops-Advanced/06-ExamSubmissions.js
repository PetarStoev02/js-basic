/*
 * Day 6 - Exam Submissions (Exam Problem)
 * Instructions:
 * - Run this file with Node.js: node 06-ExamSubmissions.js
 * - This program calculates total exam submissions and storage needed
 * - Parameters: students, questions
 * - Hint: Each submission takes 5KB per 10 submissions
 */

function solve(arg1, arg2) {
    let students = Number(arg1);
    let questions = Number(arg2);
    let result = students * Math.ceil(questions * 2.8);
    let bonusResult = students * Math.floor(questions / 3);
    let allResult = result + bonusResult;
    let storage = 5 * Math.ceil(allResult / 10);

    console.log(`${Math.round(storage)} KB needed`);
    console.log(`${allResult} submissions`);
}
solve(25, 10);
