// Exercise
// Implement the predicate function isArgumentsForSubstrCorrect, which takes three arguments:

// the string
// index from which to start extraction
// extractable substring length
// The function returns false if at least one of the conditions is true:

// Negative length of the extracted substring
// Negative given index
// The specified index extends beyond the entire line.
// The length of the substring in the amount with the specified index extends beyond the boundary of the entire line.
// Otherwise, the function returns true.


<?php

// BEGIN
function isArgumentsForSubstrCorrect($str, $index, $length)
{
    if ($index < 0) {
        return false;
    } elseif ($length < 0) {
        return false;
    } elseif ($index > strlen($str) - 1) {
        return false;
    } elseif ($index + $length > strlen($str)) {
        return false;
    }

    return true;
}
// END

//OR

// BEGIN
function isArgumentsForSubstrCorrect ($str, $index, $length) 
{
    if($length < 0 || $index < 0 || $index > strlen($str) || ($index + $length) > strlen($str)){
        return false;
    } else {
        return true;
    };
}
// END
