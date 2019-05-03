// Exercise
// Data entered by users often contain extra white space at the end or beginning of a line. 
// Usually they are cut using the trim method, for example, it was:
// 'hello \ n', it became: 'hello'. Update the firstName variable by writing the same value into it,
// but processed by the trim method. Print what happened on the screen.

let firstName = '  Grigor   \n';

// BEGIN
firstName = firstName.trim();
console.log(firstName);
// END
