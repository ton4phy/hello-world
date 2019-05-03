// Exercise
// Implement the filterString function, which accepts a string and a character as input,
// and returns a new string in which the transferred character is deleted in all its positions.
// Call example:
    // $ str = 'If I look back I am lost';
    // filterString ($ str, 'I'); // => 'f look back am lost'


<?php

// BEGIN
function filterString($str, $char)
{
    $index = 0;
    $length = strlen($str);
    $result = '';
    while ($index < $length) {
        $currentChar = $str[$index];
        if ($currentChar !== $char) {
            $result = "{$result}{$currentChar}";
        }
        $index++;
    }

    return $result;
}
// END    
