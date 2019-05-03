// Exercise
// Implement the sumOfSeries function, which counts the sum of a series of integers.
// The series is given by two numbers - the initial and final.

// The function takes two argument-numbers and returns the sum of the series.
// For example, for arguments 4, 7, the sum would be 4 + 5 + 6 + 7 = 22.

<?php

// BEGIN
function sumOfSeries($start, $end) 
{
    $result = 0;
    for ($start; $start <= $end; $start++) {
        $result = $result + $start;
    }
    return $result;
}
// END
