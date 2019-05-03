// Exercise
// Write the function isNeutralSoldier, which takes two arguments as input:

// The color of the armor (string). Possible options: red, yellow, black.
// Shield color (string). Possible options: red, yellow, black.
// The function returns true if the color of the armor is not red and the color of the shield is black. 
// In other cases, returns false.

<?php

// BEGIN
function isNeutralSoldier($color, $shield)
{
    return ($color !== 'red' && $shield === 'black');
}
// END
