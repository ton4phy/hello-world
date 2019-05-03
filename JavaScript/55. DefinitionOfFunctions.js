// Exercise
// Implement the getCustomParentFor function, which takes two arguments:

// String - the name of the child.
// String indicating parent. This argument should by default be 'father'.
// The function must return the name of the corresponding parent.

// Call example:

// getCustomParentFor ('Cersei Lannister');
// Such a call will return the name of the father.

// Use the out-of-the-box getParentFor function inside your function.
// You do not need to call your getCustomParentFor function, just define it.

const { getParentFor } = require('hexlet/got');

// BEGIN
const getCustomParentFor = (child, parent = 'father') => {
  return getParentFor(child, parent);
};
// END

module.exports = getCustomParentFor;
