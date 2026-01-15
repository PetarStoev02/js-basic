/*
 * Day 4 - Weekend or Working Day
 * Instructions:
 * - Run this file with Node.js: node 02-WeekendOrWorkingDay.js
 * - This program checks if a day is weekend or working day
 * - Try different day names
 * - Hint: Use switch with string cases
 */

function WeekendOrWorking(day) {
    switch (day) {
        case "Monday":
            console.log("Working day");
            break;
        case "Tuesday":
            console.log("Working day");
            break;
        case "Wednesday":
            console.log("Working day");
            break;
        case "Thursday":
            console.log("Working day");
            break;
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
            console.log("Weekend");
            break;
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }
}
WeekendOrWorking("Monday");
