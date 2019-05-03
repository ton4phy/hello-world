// Exercise
 
// Sites are constantly sending emails to their users.
// A typical task is to make an automatic sending of a personal letter, 
// where the user name is in the header.
// If somewhere in the base of the site the name of the person is stored as a string,
// then the task of generating the header is reduced to concatenation: 
// for example, you need to glue the string Hello with the string where the name is written.

// Write a program that will generate the header and body of the letter,
// using the ready-made variables, and output the resulting lines to the screen.
// For the title, use the variables firstName and greeting, a comma and an exclamation point.
// Display it in the correct order.

// For the body of the letter, use the info and intro variables, and the second sentence should be on a new line.

// The result on the screen will look like this:

// Hello, Joffrey!
// Here is an important information about your account security.
// We couldn't verify you mother's maiden name.
// Perform the task using only two console.log.

let info = "We couldn't verify you mother's maiden name.";
let intro = 'Here is important information about your account security.';

let firstName = 'Joffrey';
let greeting = 'Hello';

// BEGIN
console.log(greeting + ', ' + firstName + '!');
console.log(intro + '\n' + info);
// END
