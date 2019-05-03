// Exercise
// Write the function isLannisterSoldier, which takes two arguments as input:
// The color of the armor (string). If the armor is red, then the string is red.
// null if there is no shield. The string lion, if there is a shield, and on it is a lion.
// The function returns true if Lannister is recognized, and false if not recognized.

<?php

// BEGIN
function isLannisterSoldier($color, $shield)
{
    return ($color === 'red' && $shield === null) || ($shield === 'lion');
}
// END
