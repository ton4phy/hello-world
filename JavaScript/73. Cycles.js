// Exercise
// Modify the last version of the shouter function by adding the following conditions:
// const shouter = (text) => {
//   let result = '';

//   if (text.length > 5) {
//       let counter = 0;
//       while (counter !== 100) {
//         result += text;
//         counter += 1;
//       }
//   }
// 
//   return result;
// }
// If the string length is greater than 0 and less than 5, then return the original string without repetitions.
// If the string length is exactly 5 characters, then return the string repeated 10 times.
// The condition "length is more than 5, then return the line repeated 100 times" should be preserved.

// BEGIN
const shouter = (str) => {
  let result = '';
  let counter;
  let counterLimit;

  if (str.length > 0 && str.length < 5) {
    return str;
  }
  if (str.length === 5) {
    counter = 0;
    counterLimit = 10;

    while (counter !== counterLimit) {
      result = `${result}${str}`;
      counter += 1;
    }
  } else {
    counter = 0;
    counterLimit = 100;

    while (counter !== counterLimit) {
      result = `${result}${str}`;
      counter += 1;
    }
  }

  return result;
};
// END

module.exports = shouter;
