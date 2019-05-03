// Exercise
// Implement the getHexletBirthday () function,
// which returns the date Heckle was found in, in the form of a timestamp. Hekslet was founded 01/01/2012.


<?php

// BEGIN
function getHexletBirthday()
{
    return mktime(0, 0, 0, 1, 1, 2012);
}
// END
