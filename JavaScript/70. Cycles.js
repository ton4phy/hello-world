// Exercise
// Implement the mysubstr function, which extracts a substring of a specified length from a string.
// It takes two arguments as input: a string and a length, and returns a substring starting with the first character:

// Call example:

// const str = 'If I look back I am lost';
// mysubstr (str, 1); // => 'I'
// mysubstr (str, 7); // => 'If I lo'

// BEGIN
const mysubstr = (str, length) => {
  let index = 0;
  let result = '';
  while (index < length) {
    const currentChar = str[index];
    result = `${result}${currentChar}`;
    index = index + 1;
  }

  return result;
};
// END

module.exports = mysubstr;
