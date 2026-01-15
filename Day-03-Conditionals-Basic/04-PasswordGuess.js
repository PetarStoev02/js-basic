/*
 * Day 3 - Password Guess
 * Instructions:
 * - Run this file with Node.js: node 04-PasswordGuess.js
 * - This program checks if password is correct
 * - Try different password strings
 * - Hint: Use === for exact string comparison
 */

function PasswordGuess(pass) {
    if (pass == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
PasswordGuess("s3cr3t!P@ssw0rd");
