// Exercise
// Write the generateAmount function, which accepts two numbers: the quantity of goods and the cost of the audit. 
// If goods is 0, then the function returns the audit cost multiplied by 3.
// If the goods are not 0, then the function returns the number of goods.

// Call examples:

    // generateAmount (0, 2); // => 6
    // generateAmount (0, 5); // => 15
    // generateAmount (1, 2); // => 1
    // generateAmount (12, 49); // => 12
    
    
<?php

// BEGIN
function generateAmount($amount, $price)
{
    $result = $amount ?: $price * 3;

    return $result;
}
// END
