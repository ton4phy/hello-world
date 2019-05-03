// Exercise
// Write the function isFalsy, which checks whether the transferred value is treated as false from the point of view of PHP.
// To perform this check, you will need to compare false with the passed value using ==.


<?php

// BEGIN
function isFalsy($value)
{
    return $value == false;
}
// END
