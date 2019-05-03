// Exercise
// Implement the getSentenceTone function, which accepts a string and determines the tone of the sentence. 
// If all the characters are in upper case, then this is a scream. Otherwise, the normal sentence is 'normal'.


<?php

// BEGIN
function getSentenceTone($sentence)
{
    if (strtoupper($sentence) === $sentence) {
        return 'scream';
    }

    return 'normal';
}
// END
