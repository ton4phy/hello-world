// Exercise
// Implement the countChars function, which counts repetitions of the specified character in a string. 
// (In programming, they say "the number of occurrences of a character in a string").
// The function takes two parameters as input: a string and a character. The function returns a number.

// Call example:

    // $ str = 'If I look back I am lost';
    // countChars ($ str, 'I'); // => 3
    // countChars ($ str, 'z'); // => 0
    // countChars ($ str, 'o'); // => 3

<?php

// BEGIN
function countChars($str, $char)
{
    $index = strlen($str) - 1;
    $result = 0;
    while ($index >= 0) {
        if ($str[$index] === $char) {
            $result += 1;
        }
        $index -= 1;
    }

    return $result;
}
// END
