/*
 * Day 6 - Honey Winter Reserves (Exam Problem)
 * Instructions:
 * - Run this file with Node.js: node 11-HoneyWinterReserves.js
 * - This program tracks honey gathering for winter
 * - Bees gather honey over 6 days, negative values mean eating
 * - Hint: Process array input with while loop
 */

function solve(input) {
    let honey = Number(input.shift());
    let flag = 0;
    let honeyGathered = 0;
    let counter = 0;

    while (flag <= 0) {
        let beeName = input.shift();
        if (beeName === "Winter has come") {
            flag += 1;
            break;
        }
        for (let i = 0; i < 6; i++) {
            honeyGathered += Number(input.shift());
            if (honeyGathered < 0 && counter <= 0) {
                console.log(`${beeName} was banished for gluttony`);
                counter += 1;
            }
        }
    }
    let needHoney = honey - honeyGathered;
    let honeySurplus = honeyGathered - honey;
    if (honey > honeyGathered) {
        console.log(`Hard Winter! Honey needed ${needHoney.toFixed(2)}.`);
    } else if (honeyGathered >= honey) {
        console.log(`Well done! Honey surplus ${honeySurplus.toFixed(2)}.`);
    }
}
solve([
    "1000",
    "Maya",
    "-50",
    "-10",
    "-20.70",
    "20.40",
    "10.30",
    "40",
    "Yama",
    "50",
    "10",
    "20",
    "30",
    "100",
    "100",
    "Winter has come",
]);
