// Exercise
// Sansa wants to hang a request on his door that no one should enter without knocking.
// She asked Sam to print a sheet that says “KNOCK!”. 
// Help Sam translate the word to uppercase using the toUpperCase function, which accepts a string as input, 
// and returns the same, but with all the letters in uppercase. 
// Print the text recorded in the text constant on the screen, not forgetting to convert it to upper case.

const { toUpperCase } = require('hexlet/string');

const text = 'стучать!';
// BEGIN
console.log(toUpperCase(text));
// END
