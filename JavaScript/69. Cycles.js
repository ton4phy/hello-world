// Exercise
// Modify the printNumbers function so that it prints the numbers in reverse order. 
// To do this, go from the top to the bottom. That is, the counter should be initialized with the maximum value,
// and in the body of the loop it should be reduced to the lower limit.


const printNumbers = (firstNumber) => {
  // BEGIN
  let i = firstNumber;
  while (i >= 1) {
    console.log(`${i}`);
    i = i - 1;
  }
  console.log('finished!');
  // END
};

module.exports = printNumbers;

//OR

const printNumbers = (firstNumber) => {
  // BEGIN
  while (true){
    if(firstNumber == 0){
      console.log('finished!');
      return;
    } else {
      console.log(firstNumber);
      firstNumber-=1;
    }
  }
  // END
};

module.exports = printNumbers;
