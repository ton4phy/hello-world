// Exercise
// Implement the mysubstr function, which extracts a substring of a specified length from a string. 
// It takes two arguments as input: a string and a length, and returns a substring starting with the first character:

// Call example:
    // $ str = 'If I look back I am lost';
    // mysubstr ($ str, 1); // => 'I'
    // mysubstr ($ str, 7); // => 'If I lo'
    
    
<?php

// BEGIN
function mysubstr($str, $val)
{
    $newStr = '';
    $index = 0;

    while($index !== $val) {
        $newStr = $newStr.$str[$index];
        $index = $index + 1;
    }

    return $newStr;
}
// END
