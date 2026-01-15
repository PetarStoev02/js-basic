/*
 * Day 2 - Projects Creation
 * Instructions:
 * - Run this file with Node.js: node 07-ProjectsCreation.js
 * - This program calculates time needed for projects
 * - Try different architect names and project counts
 * - Hint: Each project takes 3 hours
 */

function ProjectsCreation(name, num) {
    let projectTime = Number(num * 3);
    console.log(
        `The architect ${name} will need ${projectTime} hours to complete ${num} project/s.`
    );
}
ProjectsCreation("Sanya", 9);
