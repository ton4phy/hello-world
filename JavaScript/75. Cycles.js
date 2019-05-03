// Exercise
// Increment and decrement are not very important operations in JavaScript, and you can always do without them. 
// The task in this lesson is not directly related to this topic, but you can use increment and decrement to get used to them.
// The rest of this exercise - another training work with cycles, lines and conditions.

// Implement the filterString function, which accepts a string and a character as input, 
// and returns a new string in which the transferred character is deleted in all its positions.

// BEGIN
const filterString = (str, char) => {
  let index = 0;
  let result = '';
  while (index < str.length) {
    const currentChar = str[index];
    if (currentChar !== char) {
      result = `${result}${currentChar}`;
    }
    index += 1;
  }

  return result;
};
// END

module.exports = filterString;

//OR

// BEGIN
const filterString = (text, char) => {
    result = "";
    for(let i = 0; i < text.length; i++) {
        if(text[i]!=char){
            result += text[i];
        };
    };
    return result;
}
// END

module.exports = filterString;
