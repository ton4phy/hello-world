// Exercise
// Implement the normalizeUrl function, which performs the so-called data normalization.
// It takes the address of the site and returns it with https: // at the beginning.

// The function accepts addresses as ADDRESS or http: // ADDRESS, but always returns the address as https: // ADDRESS

<?php

// BEGIN
function normalizeUrl($url)
{
    if (strpos($url, 'http://') === 0) {
        $domain = substr($url, 7);
    } else {
        $domain = $url;
    }

    return "https://{$domain}";
}
// END

//OR

// BEGIN
function normalizeUrl($str) 
{
    $val = 'https://';
    $val2 = 'http://';
    if ($val2 === substr($str, 0, 7)) {
        $result =  $val.(substr($str, 7));
    } else {
        $result =  $val.$str;
    }

    return $result;
}
// END
