// Exercise
// Implement the customParentFor function, which takes two arguments:

// String - the name of the child.
// String indicating parent. This argument should by default be 'father'.


<?php

use function HexletBasics\Functions\parentFor;

// BEGIN
function customParentFor($child, $parent = 'father')
{
    return parentFor($child, $parent);
}
// END
