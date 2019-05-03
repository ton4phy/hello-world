// Exercise
// Sam decided to study the history of Targaryenov from the time of the first people, 
// but there were many books and information could be in any of them. 
// Fortunately for Sam, most of the books were digitized by young maisters.
// He thought that it would be nice to write a function that analyzes 
// the texts for the presence of references to the Targaryenov name.

// Implement the hasTargaryenReference function,
// which accepts a string as input and checks if it starts with Targaryen.
// This can be done easily using the substring method, which takes two parameters as input:

// Index from which you need to take a substring (includes a substring)
// The index to which you need to take a substring (does not include a substring)
// This method allows you to extract the beginning of a substring of the same length as the word Targaryen,
// and then check whether it is Targaryen. Let me remind you that the indices start from scratch.

// hasTargaryenReference (''); // => false
// hasTargaryenReference ('Targari'); // => false
// hasTargaryenReference ('targaryen'); // => false
// hasTargaryenReference ('Targaryen'); // => true


// BEGIN
const hasTargaryenReference = (string) => {
  const prefix = string.substring(0, 9);
  return prefix === 'Targaryen';
};
// END

module.exports = hasTargaryenReference;
