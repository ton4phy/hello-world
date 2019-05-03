// Exercise
// Using the substring method, display the length of the segment from 6 to 17 characters, 
// processed by the trim method, sentences written in the constant text. 
// Your task is to do this without using intermediate variables.

const text = 'When  \n	you play a game of thrones you win or you die.';

// BEGIN
console.log(text.substring(5, 16).trim().length);
// END
