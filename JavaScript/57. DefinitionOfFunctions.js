// Exercise
// Implement the capitalize function, which brings the first letter of the transferred word to uppercase:

//   const name = 'arya';
//   console.log (capitalize (name)); // => Arya
// To cut off the first character from a string, use the String.prototype.slice method


// BEGIN
const capitalize = text => `${text[0].toUpperCase()}${text.slice(1)}`;
// END

module.exports = capitalize;
