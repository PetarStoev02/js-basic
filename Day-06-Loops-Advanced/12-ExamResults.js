/*
 * Day 6 - Exam Results (Exam Problem)
 * Instructions:
 * - Run this file with Node.js: node 12-ExamResults.js
 * - This program processes exam results and issues certificates
 * - Reads student names and scores until "Midnight"
 * - Hint: Complex input processing with nested loops
 */

function solve(input) {
    let index = 0;
    let totalPoints = 0;
    let name = input[index];
    let flag = false;

    while (flag === false) {
        if (index !== 0) {
            name = input[index - 1];
            totalPoints = 0;
        } else {
            index++;
        }
        if (name === "Midnight") {
            flag === true;
            break;
        }

        for (let i = 0; i <= 6; i++) {
            let grade = Math.floor((totalPoints / 600) * 100) * 0.06;

            let currentNumber = Number(input[index]);
            index++;
            if (isNaN(currentNumber) === true) {
                if (grade >= 5) {
                    console.log("===================");
                    console.log("|   CERTIFICATE   |");
                    console.log(`|    ${grade.toFixed(2)}/6.00    |`);
                    console.log("===================");
                    console.log(`Issued to ${name}`);
                    break;
                } else if (grade < 3) {
                    grade = 2;
                    console.log(`${name} - ${grade.toFixed(2)}`);
                    break;
                } else {
                    console.log(`${name} - ${grade.toFixed(2)}`);
                }
                break;
            }

            totalPoints += currentNumber;
            if (currentNumber < 0) {
                console.log(`${name} was cheating!`);
                name = input[index];
                index++;
                break;
            }
        }
    }
}
solve(["Andy", "50", "50", "20", "10", "10", "0", "Midnight"]);
