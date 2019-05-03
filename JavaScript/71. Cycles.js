// Exercise
// Implement the predicate function isArgumentsForSubstrCorrect, which takes three arguments:

// the string
// index from which to start extraction
// extractable substring length
// The function returns false if at least one of the conditions is true:

// Negative length of the extracted substring
// Negative given index
// The specified index extends beyond the entire line.
// The length of the substring in the amount with the specified index extends beyond the boundary of the entire line.
// Otherwise, the function returns true.

// Remember that indexes start at 0, so the index of the last element is “string length minus 1”.

// Call example:

// const str = 'Sansa Stark';
// isArgumentsForSubstrCorrect (str, -1, 3); // false
// isArgumentsForSubstrCorrect (str, 4, 100); // false
// isArgumentsForSubstrCorrect (str, 10, 10); // false
// isArgumentsForSubstrCorrect (str, 11, 1); // false
// isArgumentsForSubstrCorrect (str, 3, 3); // true
// isArgumentsForSubstrCorrect (str, 0, 5); // true

// BEGIN
const isArgumentsForSubstrCorrect = (str, index, length) => {
  if (index < 0) {
    return false;
  }
  if (length < 0) {
    return false;
  }
  if (index > str.length - 1) {
    return false;
  }
  if (index + length > str.length) {
    return false;
  }

  return true;
};
// END

module.exports = isArgumentsForSubstrCorrect;

// OR

// BEGIN
const isArgumentsForSubstrCorrect = (str, index, len) => {
    if (len < 1 || index < 0 || index > len || len + index > str.length) {
        return false;
    }
    return true;
}
// END

module.exports = isArgumentsForSubstrCorrect;
