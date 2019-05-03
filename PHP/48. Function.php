// Exercise
// Implement the getAge function, which rounds the age so that half is rounded down. 
// That is, if a person is ten and a half years old, then the function should return 10. 
// If he is at least a little more than ten and a half, then rounding goes to the upper side.
// Use the standard round function and the special value $ mode for this, which results in rounding down.

<?php

// BEGIN
function getAge($val)
{
    return round($val, 0, PHP_ROUND_HALF_DOWN);
}
// END
