// Exercise
// Implement the sumOfSeries function, which counts the sum of a series of integers. 
// The series is given by two numbers - the initial and final.

// The function takes two argument-numbers and returns the sum of the series. 
// For example, for arguments 4, 7, the sum would be 4 + 5 + 6 + 7 = 22.

// sumOfSeries (1, 2); // => 3
// sumOfSeries (1, 3); // => 6
// sumOfSeries (4, 7); // => 22
// If the initial and final numbers are equal, then the result will be the same number:

// sumOfSeries (1, 1); // => 1

// BEGIN
const sumOfSeries = (num1, num2) => {
    if(num1 == num2){
        return num1;
    };
    let result = 0;
    for(let i = num1; i <= num2; i++){
        result += i;
    }
    return result;
}


// END

module.exports = sumOfSeries;
