// Exercise
// Write a program that takes the original amount of euros recorded in the $ euros variable,
// converts the euro into dollars and displays it on the screen. 
// Then the resulting value translates into rubles and displays on the new line.

// We believe that:

// 1 euro = 1.25 dollars
// 1 dollar = 60 rubles

<?php

$euros = 100;

// BEGIN
$dollars = $euros * 1.25;
print_r($dollars);
print_r("\n");
$rubles = $dollars * 60;
print_r($rubles);
// END
