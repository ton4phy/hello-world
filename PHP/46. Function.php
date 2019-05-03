// Exercise
// In PHP, an interesting sprintf function migrated from C to the language.
// It creates a string based on a template and data.

// <? php

// $ result = sprintf ('Today is% s% d', 'February', 8);
// print_r ($ result);
// Today is February 8
// The first argument to sprintf is a template string, in which, in addition to the text itself,
// there may be special placeholders. These are “stubs” for information that is passed by the following arguments.
// % s means “stub for a string”,% d for a number. Therefore, the following two arguments in our example are a string and
// a number.

// The order and type of values ​​must match the order and type of the stubs.

// When displaying dates, it is sometimes necessary to fix the number of digits, say, 
// always write zeros before the number if the number is less than 10. sprintf allows you to solve this problem:

// <? php

// $ result = sprintf ('Today is% s% 02d', 'February', 8);
// print_r ($ result);
// Today is February 08
// % 02d - make two digits and fill the remaining space with zeros. % 03d - three digits, and so on:

// <? php

// $ result = sprintf ('Today is% s% 04d', 'February', 8);
// print_r ($ result);
// Today is February 0008
// Implement the getFormattedBirthday function, which accepts three parameters for input: 
// day, month, and year of birth, and returns them as a string in formatted form, for example: 30-02-1953.

// The day and month must be formatted so that, if necessary, 0 is added to the left.
// For example, if the month came as the number 7, then in the output line it should be represented as 07.

<?php

// BEGIN
function getFormattedBirthday($day, $month, $year)
{
    return sprintf('%02d-%02d-%d', $day, $month, $year);
}
// END
