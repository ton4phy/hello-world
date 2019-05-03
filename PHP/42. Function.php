// Exercise
// Write a function printSeq, which itself displays the resulting repetition. It takes two arguments, 
// a string and a number, and prints a repeating string to the screen. To generate a string, use str_repeat.


<?php

// BEGIN
function printSeq($str, $num)
{
    print_r(str_repeat($str, $num));
}
// END
