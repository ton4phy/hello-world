// Exercise
// You are given three variables with the names of different people. 

// Compose and display a word of characters in this order:
    // 1.the third character from the first line;
    // 2.the second character from the second line;
    // 3.the fourth character from the third line;
    // 4.fifth character from the second line;
    // 5.the third character from the second line.
    
    <?php

    $one = 'Naharis';
    $two = 'Mormont';
    $three = 'Sand';

// BEGIN
    $result = ($one[2].$two[1].$three[3].$two[4].$two[2]);
    print_r($result);
// END

//OR

$one = 'Naharis';
$two = 'Mormont';
$three = 'Sand';

// BEGIN
print_r("{$one[2]}{$two[1]}{$three[3]}{$two[4]}{$two[2]}");
// END

