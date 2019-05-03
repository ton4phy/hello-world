// Exercise
// Translate the string written in the $ str variable to uppercase using the strtoupper function. 
// Write the new value in the same $ str variable.

// It may seem to you that the code is strange. 
// This is a typical example: rewriting variables makes the code less understandable and more confusing.

<?php

$str = 'a mind needs books as a sword needs a whetstone, if it is to keep its edge.';

// BEGIN
$str = strtoupper($str);
// END

print_r($str);
