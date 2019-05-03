// Exercise
// Write the function isNeutralSoldier, which takes two arguments as input:

// The color of the armor (string). Possible options: red, yellow, black.
// Shield color (string). Possible options: red, yellow, black.
// The function returns true if the color of the armor is not red and the color of the shield is black. 
// In other cases, returns false.

// Call examples:

// isNeutralSoldier ('yellow', 'black'); // true
// isNeutralSoldier ('red', 'black'); // false
// isNeutralSoldier ('red', 'red'); // false

// BEGIN
const isNeutralSoldier = (color, shield) => (color !== 'red' && shield === 'black');
// END

module.exports = isNeutralSoldier;
