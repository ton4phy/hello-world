// Exercise
// Write the function getAgeDifference, 
// which takes two years of birth and returns a string with an age 
// difference in the form of The age difference is 11.

<?php

// BEGIN
function getAgeDifference($yearOne, $yearTwo)
{
    $difference = abs($yearOne - $yearTwo);
    return "The age difference is {$difference}";
}
// END
