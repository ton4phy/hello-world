// Exercise
// The function calculateDistanceBetweenTowns is available to you. 
// It takes one argument, which must contain the names of the two cities through a hyphen. 
// In response, it returns the distance between these cities. Here is an example of use:

// const distance = calculateDistanceBetweenTowns ('Lannisport-Bayasabhad');
// Write a program that uses the calculateDistanceBetweenTowns
// function and displays the distance between cities recorded in the from and to variables.
// const { calculateDistanceBetweenTowns } = require('hexlet/got');

const from = 'The Twins';
const to = 'The Eyrie';

// BEGIN
const distance = calculateDistanceBetweenTowns(`${from}-${to}`);
console.log(distance);
// END
