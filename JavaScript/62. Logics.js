// Exercise
// Implement the isNotLannisterSoldier function, which checks that the soldier is not a Lannister.
// The function takes as input the same arguments as the isLannisterSoldier function:

// The color of the armor (string). If the armor is red, then the string is red.
// null if there is no shield. The string lion if there is a shield, and on it is a lion.
// The isLannisterSoldier function ready for use is available to you. 
// You can use it to not write all the logical conditions again.

const isLannisterSoldier = require('./isLannisterSoldier');

// BEGIN
const isNotLannisterSoldier = (color, shield) => !isLannisterSoldier(color, shield);
// END

module.exports = isNotLannisterSoldier;
