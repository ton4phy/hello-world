// Exercise
// Write for Sam the function whoIsThisHouseToStarks, which takes as input the family name and returns one of three values:
// 'friend', 'enemy', ‘neutral '.
// Rules for determining:
// Friends ('friend'): ‘Karstark’, ‘Tully’
// Enemies ('enemy'): ‘Lannister’, ‘Frey’
// Any other families are considered neutral.
// Call examples:
    // whoIsThisHouseToStarks ('Karstark'); // => 'friend'
    // whoIsThisHouseToStarks ('Frey'); // => 'enemy'
    // whoIsThisHouseToStarks ('Joar'); // => 'neutral'
    // whoIsThisHouseToStarks ('Ivanov'); // => 'neutral'
    
    
<?php

// BEGIN
function whoIsThisHouseToStarks($houseName)
{
    if ($houseName === 'Karstark' || $houseName === 'Tully') {
        return 'friend';
    } elseif ($houseName === 'Lannister' || $houseName === 'Frey') {
        return 'enemy';
    }

    return 'neutral';
}
// END
