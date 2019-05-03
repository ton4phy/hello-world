// Exercise
// Implement the getCustomDate function, which returns a date in 15/03/1985 format based on the timestamp passed in.

      // getCustomDate(1532435204); // 24/07/2018;
      // getCustomDate(532435204); // 15/11/1986;
      // getCustomDate(5324352); // 03/03/1970;
      
      
<?php

function getCustomDate($timestamp)
{
    // BEGIN
    return date('d/m/Y', $timestamp);
    // END
}
