// Exercise
// Implement the startsWith function, which determines whether a string begins with a substring.

<?php

function startsWith($text, $substr)
{
    // BEGIN
    return mb_strpos($text, $substr) === 0;
    // END
}
