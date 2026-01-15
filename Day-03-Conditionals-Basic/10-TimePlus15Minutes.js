/*
 * Day 3 - Time + 15 Minutes
 * Instructions:
 * - Run this file with Node.js: node 10-TimePlus15Minutes.js
 * - This program adds 15 minutes to a given time
 * - Try different hour and minute values
 * - Hint: Handle overflow when minutes >= 60 or hours >= 24
 */

function time(hoursAsString, minutesAsString) {
    let hours = Number(hoursAsString);
    let minutes = Number(minutesAsString) + 15;

    if (minutes >= 60) {
        minutes = minutes - 60;
        hours += 1;
    }
    if (hours >= 24) {
        hours -= 24;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}
time(23, 59);
