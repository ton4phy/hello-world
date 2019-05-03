# Exercise
# Modify the last version of the shouter function by adding the following conditions:

# If the string length is greater than 0 and less than 5, then return the original string without repetitions.
# If the string length is exactly 5 characters, then return the string repeated 10 times.
# The condition "length is more than 5, then return the string repeated 100 times" should be preserved.


def shouter(string):
    length = len(string)
    result = ''
    if 0 < length < 5:
        result = string
    elif length == 5:
        counter = 0
        counter_limit = 10
        while counter != counter_limit:
            result += string
            counter += 1
    elif length > 5:
        counter = 0
        counter_limit = 100
        while counter != counter_limit:
            result += string
            counter += 1
    return result
