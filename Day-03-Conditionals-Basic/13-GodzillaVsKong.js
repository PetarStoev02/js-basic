/*
 * Day 3 - Godzilla vs Kong (Budget Calculator)
 * Instructions:
 * - Run this file with Node.js: node 13-GodzillaVsKong.js
 * - This program calculates if budget is enough for film production
 * - Parameters: budget, number of people, clothing cost per person
 * - Hint: 10% goes to decor, 10% discount on clothing if >150 people
 */

function godzilla(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let people = Number(arg2);
    let onePersonClothing = Number(arg3);

    let decorSum = budget * 0.1;
    let sumPerClothing = people * onePersonClothing;
    let sumForFilm = decorSum + sumPerClothing;
    let leftBudget = budget - sumForFilm;
    let neededMoney = sumForFilm - budget;

    if (people > 150) {
        let clothingDecrease = sumPerClothing - (sumPerClothing * 0.1).toFixed(3);
        let decreasedFilmSum = clothingDecrease + decorSum;
        leftBudget = budget - decreasedFilmSum;
        neededMoney = decreasedFilmSum - budget;
    }
    if (sumForFilm > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
    }
    if (sumForFilm <= budget) {
        console.log("Action!");
        console.log(
            `Wingard starts filming with ${leftBudget.toFixed(2)} leva left.`
        );
    }
}
godzilla(15437.62, 186, 57.99);
