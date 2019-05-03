// Exercise
// Sam makes a lot of cards, and he often needs to display repeated symbols to visualize routes. 
// For example, as Sam illustrates the narrow roads between cities:

// Meereen = - = - = - = - Myr
// And so illustrates the wide trails:

// Vaes Dothrak ======== Vahar
// In the js documentation, he found the method String.prototype.repeat ().

// console.log ('= -'. repeat (4));
// = - = - = - = -
// Sam is not very pleased. He needs to draw hundreds of routes of different lengths with different symbols.
// It is inconvenient to call hundreds of times repeat inside console.log call.

// Write the printSeq function for Sam, which itself displays the resulting repetitions.
// It takes two arguments, a string and a number, and prints a repeating string to the screen.

// Here is an example of how Sam would use the printSeq you wrote:


// printSeq ('= -', 4);
// = - = - = - = -


// BEGIN
const printSeq = (str, num) => {
  console.log(str.repeat(num));
};
// END

module.exports = printSeq;
