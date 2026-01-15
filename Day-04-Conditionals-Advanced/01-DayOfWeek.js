/*
 * Day 4 - Day of Week (Switch)
 * Instructions:
 * - Run this file with Node.js: node 01-DayOfWeek.js
 * - This program converts number 1-7 to day name using switch
 * - Try different numbers
 * - Hint: switch is cleaner than if-else for multiple exact matches
 */

function dayOfWeek(num) {
    let number = Number(num);

    switch (number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;
    }
}

dayOfWeek(108);
