/*
 * Day 6 - Beehive Defense (Exam Problem)
 * Instructions:
 * - Run this file with Node.js: node 09-BeehiveDefense.js
 * - This program simulates a battle between bees and a bear
 * - Bees attack bear, bear kills bees each round
 * - Hint: Use while loop for battle simulation
 */

function solve(arg1, arg2, arg3) {
    let bees = Number(arg1);
    let bearHealth = Number(arg2);
    let bearDamage = Number(arg3);
    let flag = 0;

    while (flag <= 0) {
        bees -= bearDamage;
        bearHealth -= bees * 5;
        if (bearHealth <= 0) {
            flag += 1;
            break;
        } else if (bees < 100) {
            flag += 1;
            break;
        }
    }

    if (bees <= 0) {
        bees = 0;
    }
    if (bearHealth <= 0) {
        console.log(`Beehive won! Bees left ${bees}.`);
    } else if (bees < 100) {
        console.log(`The bear stole the honey! Bees left ${bees}.`);
    }
}
solve(200, 1000, 10);
