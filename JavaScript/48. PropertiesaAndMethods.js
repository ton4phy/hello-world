// Exercise
// Print the first and last letter of a sentence written to a text constant in the following format:

// First: N
// Last: t
// Your task is to extract these characters from the string and insert them into console.log without using intermediate variables.


const text = 'Never forget what you are, for surely the world will not';

// BEGIN
console.log(`First: ${text[0]}\nLast: ${text[text.length - 1]}`);
// END
