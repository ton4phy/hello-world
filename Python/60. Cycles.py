# Exercise
# Implement the count_chars function, which counts repetitions of the specified character in a string.
# (In programming, they say "the number of occurrences of a character in a string").

# The function takes two parameters as input: a string and a character. The function returns a number.

def count_chars(string, char):
    index = len(string) - 1
    result = 0
    while index >= 0:
        if string[index] == char:
            result += 1
        index -= 1
    return result
