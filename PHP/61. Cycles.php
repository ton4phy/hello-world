// Exercise
// Modify the printNumbers function so that it prints the numbers in reverse order. 
// To do this, go from the top to the bottom. That is, the counter should be initialized with the maximum value, 
// and in the body of the loop it should be reduced to the lower limit.


<?php

function printNumbers($firstNumber)
{
    // BEGIN
    while (0 !== $firstNumber){
        print_r("{$firstNumber}\n");
        $firstNumber = $firstNumber - 1;
    }
    print_r('finished!');
    // END
}
