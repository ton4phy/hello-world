// Exercise
// You are given three variables with the names of different people.
// Compose and display a word of characters in this order:

// third character from first line
// second character from second line
// fourth character from third line
// fifth character from second line
// third character from second line
// Try using interpolation: inside curly brackets,
// you can place not only integer variables, but also individual characters using square brackets.

const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';

// BEGIN
console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`);
// END
