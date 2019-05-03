// Exercise
// Implement the countChars function, which counts repetitions of the specified character in a string. 
// (In programming, they say "the number of occurrences of a character in a string").

// The function takes two parameters as input: a string and a character. The function returns a number.

// Call example:

// const str = 'If I look back I am lost';
// countChars (str, 'I'); // 3
// countChars (str, 'z'); // 0
// countChars (str, 'o'); // 3

// BEGIN
const countChars = (str, char) => {
  let index = str.length - 1;
  let result = 0;
  while (index >= 0) {
    if (str[index] === char) {
      result += 1;
    }
    index -= 1;
  }

  return result;
};
// END

module.exports = countChars;

//OR

// BEGIN
const countChars = (str, index) => {
    let current = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i] == index){
            current++
        };
    };
    return current;
}
// END

module.exports = countChars;
