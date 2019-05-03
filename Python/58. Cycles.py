# Exercise
# Implement the mysubstr function, which extracts a substring of a specified length from a string.
# It takes two arguments as input: a string and a length, and returns a substring starting with the first character.

# BEGIN
def mysubstr(string, length):
    result_string = ''
    index = 0
    while index < length:
        result_string = result_string + string[index]
        index = index + 1

    return result_string
# END
