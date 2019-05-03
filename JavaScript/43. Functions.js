// Exercise

// Display the value of the text variable after being processed by the reverse and toLowerCase functions.
// Does the result of the function depend on the order in which the reverse and toLowerCase functions are used?

const { toLowerCase, reverse } = require('hexlet/string');

const text = 'Съешь еще этих мягких французских булочек';
// BEGIN
console.log(toLowerCase(reverse(text)));
// END
