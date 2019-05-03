// Exercise
// John instructed Sam to automatically recognize the Lannister soldiers on video. 
// The idea of automating the fortress watch seemed attractive to him. 
// In the process, Sam needed to write a function that determines whether Lannister is in front of him or not. 
// A little thought, Sam highlighted the following rules for determining Lannister:

// If the soldier has red armor And no shield

// OR

// if a soldier has a shield with a lion

// then this is lannister.



// Write the function isLannisterSoldier, which takes two arguments as input:

// The color of the armor (string). If the armor is red, then the string is red.
// null if there is no shield. The string lion if there is a shield, and on it is a lion.
// The function returns true if Lannister is recognized, and false if not recognized.

// Definitions
// Logical operators - operators "AND" (&&), OR (||), allowing to create composite logical conditions.

// BEGIN
const isLannisterSoldier = (color, shield) => {
  return (color === 'red' && shield === null) || (shield === 'lion');
}
// END

module.exports = isLannisterSoldier;
