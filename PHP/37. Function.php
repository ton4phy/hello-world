// Exercise
// The function calculateDistanceBetweenTowns is available to you. 
// It takes one argument, which must contain the names of the two cities through a hyphen. 
// In response, it returns the distance between these cities. Here is an example of use:

// <? php

// $ distance = calculateDistanceBetweenTowns ('Lannisport-Bayasabhad');
// Write a program that uses the calculateDistanceBetweenTowns 
// function and displays the distance between cities recorded in the $ from and $ to variables.


<?php

use function HexletBasics\Functions\calculateDistanceBetweenTowns;

$from = 'The Twins';
$to = 'The Eyrie';

// BEGIN
$distance = calculateDistanceBetweenTowns("{$from}-{$to}");
print_r($distance);
// END
