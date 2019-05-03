// Exercise
// Implement the convertString function, which accepts a string as input and, if the first letter is not capitalized, 
// returns an inverted version of the original string. If the first letter is capitalized, the string is returned unchanged.

// Call examples:

  // convertString ('Hello'); // => 'Hello'
  // convertString ('hello'); // => 'olleh'
 
 
<?php

// BEGIN
function convertString($string)
{
    return $string[0] === strtoupper($string[0]) ? $string : strrev($string);
}
// END
