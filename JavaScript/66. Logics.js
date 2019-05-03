// Exercise
// On the electronic map of Westeros, which Sam implemented, 
// the Starks' allies are shown in a green circle, the enemies in red, and neutral families in gray.

// Write for Sam the function whoIsThisHouseToStarks, which takes the family name as input and returns one of three values:
// 'friend', 'enemy', 'neutral'.

// Rules for determining:
// 
// Friends ('friend'): ‘Karstark’, ‘Tally’
// Enemies ('enemy'): ‘Lannister’, ‘Frey’
// Any other families are considered neutral.
// Call examples:

// whoIsThisHouseToStarks ('Karstark'); // => 'friend'
// whoIsThisHouseToStarks ('Frey'); // => 'enemy'
// whoIsThisHouseToStarks ('Joar'); // => 'neutral'
// whoIsThisHouseToStarks ('Ivanov'); // => 'neutral'

// BEGIN
const whoIsThisHouseToStarks = (houseName) => {
  if (houseName === 'Karstark' || houseName === 'Tally') {
    return 'friend';
  } else if (houseName === 'Lannister' || houseName === 'Frey') {
      return 'enemy';
  }

  return 'neutral';
}
// END

module.exports = whoIsThisHouseToStarks;
