// Exercise
// Implement the hasTargaryenReference function, which accepts a string as input and checks if it starts with Targaryen. 
// Make it easy using the substr function, which takes three parameters as input:

// Source string
// Index from which you need to take a substring
// The length of the extracted substring
// This function allows you to extract the beginning of a substring of the same length as the word Targaryen, 
// and then check whether it is Targaryen. Let me remind you that the indices start from scratch.

    // hasTargaryenReference (''); // => false
    // hasTargaryenReference ('Targari'); // => false
    // hasTargaryenReference ('targaryen'); // => false
    // hasTargaryenReference ('Targaryen'); // => true
    
<?php

// BEGIN
function hasTargaryenReference($string)
{
    $prefix = substr($string, 0, 9);
    return $prefix === 'Targaryen';
}
// END
    
