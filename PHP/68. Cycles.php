// Exercise
// Implement the doesContain function, which checks (case sensitive) whether the string contains the specified letter. 
// The function takes two parameters:
  // Line
  // Letter to search
  
  // Call example:
    // doesContain ('Renly', 'R'); // true
    // doesContain ('Renly', 'r'); // false
    // doesContain ('Tommy', 'm'); // true
    // doesContain ('Tommy', 'd'); // false


<?php

// BEGIN
function doesContain($str, $char)
{
    $index = 0;
    while ($index < strlen($str)) {
        if ($str[$index] === $char) {
            return true;
        }

        $index++;
    }

    return false;
}
// END
