// Exercise
// Implement the doesContain function, which checks (case sensitive) whether the string contains the specified letter.
// The function takes two parameters:

// Line
// Letter to search
// Call example:

// doesContain ('Renly', 'R'); // true
// doesContain ('Renly', 'r'); // false
// doesContain ('Tommy', 'm'); // true
// doesContain ('Tommy', 'd'); // false

// BEGIN
const doesContain = (str, char) => {
  let index = 0;
  while (index < str.length) {
    if (str[index] === char) {
      return true;
    }

    index += 1;
  }

  return false;
};
// END

module.exports = doesContain;
