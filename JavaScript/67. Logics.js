// Exercise
// Implement the convertText function that accepts a string as input and,
// if the first letter is not capitalized, returns an inverted version of the original string. 
// If the first letter is capitalized, the string is returned unchanged.

// Call examples:
// 
// convertText ('Hello'); // => 'Hello'
// convertText ('hello'); // => 'olleh'
// You can flip the line using the reverse function.

// There are different approaches to solving this problem. 
// You may need the toUpperCase method and the ability to get a character from a string (for example, str [0]).

// Try to write two variants of the function: with the usual if-else, and with the ternary operator.


const { reverse } = require('hexlet/string');

// BEGIN
const convertText = text => (text[0] === text[0].toUpperCase() ? text : reverse(text));
// END

module.exports = convertText;
