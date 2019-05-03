// Exercise
// Arya is going on a trip from Winterfel to Eagle's Nest to visit Lisa Arren,
// but on the way she needs to go to the Freyas to commit an act of retribution.
// She needs to calculate the total length of the route.

// Unfortunately, the calculateDistance function can only calculate the distance between two points. 
// Therefore, it is necessary to first find out the distance from Winterfell to the Freew Castle,
// and then the distance to the Eagle's Nest.

// The names of the castles in English:

// Winterfell - Winterfell
// Twins (Freew Castle) - The Twins
// Eagle's Nest - The Eyrie
// Display the full length of the Arya route. 
// Recall that the function calculateDistance takes two arguments and returns a number.


<?php

use function HexletBasics\Functions\calculateDistance;

// BEGIN
$distance = calculateDistance('Winterfell', 'The Twins') + calculateDistance('The Twins', 'The Eyrie');
print_r($distance);
// END
