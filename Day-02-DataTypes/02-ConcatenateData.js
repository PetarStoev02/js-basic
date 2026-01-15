/*
 * Day 2 - Concatenate Data
 * Instructions:
 * - Run this file with Node.js: node 02-ConcatenateData.js
 * - This program demonstrates template literals (backtick strings)
 * - Try changing the parameters
 * - Hint: Template literals use ${variable} to insert values
 */

function concatenateData(fName, lName, sAge, incomeTown) {
    let firstName = fName;
    let lastName = lName;
    let age = Number(sAge);
    let town = incomeTown;

    console.log(
        `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`
    );
}
concatenateData("Todor", "Stoqnov", "35", "Pazardzhik");
