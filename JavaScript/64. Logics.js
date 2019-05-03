// Exercise
// Implement the getSentenceTone function, which accepts a string and determines the tone of the sentence.
// If all the characters are in upper case, then this is a scream. Otherwise, the normal sentence is 'normal'.

// Algorithm:

// Generate an uppercase string based on the argument string using toUpperCase.
// Compare it with the source line:

// If the strings are equal, then the argument string is uppercase.
// Otherwise, the string-argument is not uppercase.

// BEGIN
const getSentenceTone = (sentence) => {
  if (sentence.toUpperCase() === sentence) {
    return 'scream';
  }
  return 'normal';
}
// END

module.exports = getSentenceTone;
