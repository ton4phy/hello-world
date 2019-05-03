// Exercise
// Modify the last version of the shouter function by adding the following conditions:

// If the string length is greater than 0 and less than 5, then return the original string without repetitions.
// If the string length is exactly 5 characters, then return the string repeated 10 times.
// The condition "length is more than 5, then return the line repeated 100 times" should be preserved.


<?php

// BEGIN
function shouter($str)
{
    $length = strlen($str);
    $result = '';

    if ($length > 0 && $length < 5) {
        return $str;
    } elseif ($length === 5) {
        $counter = 0;
        $counterLimit = 10;

        while ($counter !== $counterLimit) {
            $result = "{$result}{$str}";
            $counter += 1;
        }
    } else {
        $counter = 0;
        $counterLimit = 100;

        while ($counter !== $counterLimit) {
            $result = "{$result}{$str}";
            $counter += 1;
        }
    }

    return $result;
}
// END
