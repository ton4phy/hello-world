// Exercise
// In 7 kingdoms there lived one person who had access to computers and knew how to program - Sam Tarley. 
// He was engaged in cartography, so he wrote for himself a function calculateDistance, 
// which calculates the distance (in leagues) between cities. 
// The function takes two string parameters - two city names, and returns a number - the distance between them.

// Here is an example of use, where the distance between Lannisport and Bayasabhad is displayed:

// <? php

// use function HexletBasics \ Functions \ calculateDistance;

// $ distance = calculateDistance ('Lannisport', 'Bayasabhad');
// print_r ($ distance);
// The first line is a special code that connects the function calculateDistance to your program.
// Thanks to it, you can run a function, but you do not see its contents. 
// This is a common thing in programming: you know what a function does and how to use it,
// but you don't know exactly how it works inside.

// Use the calculateDistance function and display the distance between the cities of Qarth and Vaes Dothrak.
// Do not copy the example, but create a variable with a different name and write the code from scratch yourself.

<?php

use function HexletBasics\Functions\calculateDistance;

// BEGIN
$distance = calculateDistance('Qarth', 'Vaes Dothrak');
print_r($distance);
// END
