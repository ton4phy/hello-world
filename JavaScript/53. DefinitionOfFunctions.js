// Exercise
// Sam creates the family tree of different families. He constantly has to calculate the amount of space occupied 
// by the names of the parents on the screen.

// Create a getParentNamesTotalLength function for Sam. 
// It should take one argument - the name of the child, and return the total number of characters in 
// the names of the mother and father. The function should not display anything on the screen, only return a number.

// To implement, use the already existing getParentFor function:

// Getting the mother's name getParentFor (child, 'mother'), where child is the name of the child.
// Getting the name of the father getParentFor (child, 'father'), where child is the name of the child
// You do not need to call your function, just define it.


const { getParentFor } = require('hexlet/got');

// BEGIN
const getParentNamesTotalLength = (child) => {
  const mother = getParentFor(child, 'mother');
  const father = getParentFor(child, 'father');
  return mother.length + father.length;
};
// END

module.exports = getParentNamesTotalLength;
