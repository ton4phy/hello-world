// Exercise
// Sam creates the family tree of different families. 
// He constantly has to calculate the amount of space occupied by the names of the parents on the screen.

// Create a getParentNamesTotalLength function for Sam.
// It should take one argument - the name of the child, and return the total number 
// of characters in the names of the mother and father. 
// The function should not display anything on the screen, only return a number.

// To implement, use the already existing functions parentFor and strlen:

// Getting the mother's name parentFor ($ child, 'mother'), where $ child is the name of the child.
// Getting the father's name parentFor ($ child, 'father'), where $ child is the child's name
// Getting the length of a string: strlen ($ str), where $ str is a string
// You do not need to call your function, just define it.

<?php

use function HexletBasics\Functions\parentFor;

// BEGIN
function getParentNamesTotalLength($child)
{
    $mother = parentFor($child, 'mother');
    $father = parentFor($child, 'father');
    return strlen($mother) + strlen($father);
}
// END
