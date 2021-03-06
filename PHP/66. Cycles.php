// Exercise
// As you can see, the getEvenNumbersUpTo function returns numbers 
// by blinding them together. Modify the function so that the numbers in the result are separated by commas:


<?php

// BEGIN
function getEvenNumbersUpTo($num)
{
    $counter = 1;
    $result = '';

    while ($counter <= $num) {
        if ($counter % 2 === 0) {
            $result = $result . $counter .',';
        }

        $counter += 1;
    }

    return $result;
}
// END
