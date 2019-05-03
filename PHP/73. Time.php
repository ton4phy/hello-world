// Exercise
// Implement the getYear function, which returns the year passed to the timestamp.

<?php

const SECONDS_IN_YEAR = 60 * 60 * 24 * 365;

function getYear($timestamp)
{
    // BEGIN
    return 1970 + floor($timestamp / SECONDS_IN_YEAR);
    // END
}
