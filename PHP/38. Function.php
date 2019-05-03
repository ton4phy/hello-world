// Exercise
// To build the family tree of the Starks family,
// Sam wrote the parentFor function, which returns the name of the parent if the first parameter is the name of the child.
// The second parameter function takes the line father or mother. So the function understands which parent to return.
// By default, the parameter is mother. That is, if you want to know the name of the mother, 
// then you can not pass on the mother specifically, but only transfer one parameter - the child’s name.

// Write a program that displays the name of maternal grandfather Joffrey. Joffrey’s full name in English: Joffrey Baratheon.

<?php

use function HexletBasics\Functions\parentFor;

// BEGIN
print_r(parentFor(parentFor('Joffrey Baratheon'), 'father'));
// END

// OR

use function HexletBasics\Functions\parentFor;

// BEGIN
$nameMother = parentFor("Joffrey Baratheon", "mother");
$result = parentFor($nameMother, "father");
print_r($result); 
// END
