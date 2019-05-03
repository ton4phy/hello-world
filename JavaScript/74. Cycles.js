// Exercise
// Modify the function so that the numbers in the result are separated by commas.
// const getEvenNumbersUpTo = (num) => {
//   let counter = 1;
//   let result = '';
// 
//   while (counter <= num) {
//     if (counter % 2 === 0) {
//         result += counter;
//     }
// 
//     counter += 1;
//   }
// 
//   return result;
// }

// BEGIN
const getEvenNumbersUpTo = (num) => {
  let counter = 1;
  let result = '';

  while (counter <= num) {
    if (counter % 2 === 0) {
      result = `${result}${counter},`;
    }

    counter += 1;
  }

  return result;
};
// END

module.exports = getEvenNumbersUpTo;
