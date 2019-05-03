// Exercise
// You are faced with this code, which displays the total number of rooms in the possession of the current king:

// $ king = 'King Balon the 6th';
// print_r ($ king. 'has'. (6 * 17). 'rooms.');
// As you can see, these are magic numbers: it is not clear what 6 is and what 17.
// It is possible to guess if you know the history of the royal family:
// each new king inherits all the castles from their ancestors and builds a new castle - an exact copy of the parent.

// This strange dynasty just breeds the same castles ...

// Get rid of the magic numbers by creating new variables, and then display the text on the screen.

// It will turn out like this:

// King Balon the 6th has 102 rooms.
// Variable names should convey the meaning of numbers, 
// but they should also remain sufficiently short and capacious for comfortable reading.



<?php

$king = 'King Balon the 6th';

// BEGIN
$numberOfCastles = 6;
$roomsPerCastle = 17;
print_r($king . ' has ' . ($numberOfCastles * $roomsPerCastle) . ' rooms.');
// END
