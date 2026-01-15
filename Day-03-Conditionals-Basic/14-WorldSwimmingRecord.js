/*
 * Day 3 - World Swimming Record
 * Instructions:
 * - Run this file with Node.js: node 14-WorldSwimmingRecord.js
 * - This program checks if a swimmer beats the world record
 * - Parameters: current record (seconds), distance (meters), speed (m/s)
 * - Hint: Add 12.5 seconds delay every 15 meters
 */

function records(seconds, metres, metresPerSecond) {
    seconds = Number(seconds);
    metres = Number(metres);
    metresPerSecond = Number(metresPerSecond);

    let time = metres * metresPerSecond;
    let bonusTime = Math.floor(metres / 15) * 12.5;

    let fulltime = time + bonusTime;

    if (seconds < fulltime) {
        let needTime = fulltime - seconds;
        console.log(
            ` No, he failed! He was ${needTime.toFixed(2)} seconds slower.`
        );
    }
    if (seconds > fulltime) {
        console.log(
            ` Yes, he succeeded! The new world record is ${fulltime.toFixed(2)} seconds.`
        );
    }
}

records(55555.67, 3017, 5.03);
