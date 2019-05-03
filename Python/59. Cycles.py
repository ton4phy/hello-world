# Exercise
# Implement the is_arguments_for_substr_correct predicate function, which takes three arguments:

# the string
# index from which to start extraction
# extractable substring length
# The function returns False if at least one of the conditions is true:

# Negative length of the extracted substring
# Negative given index
# The specified index extends beyond the entire line.
# The length of the substring in the amount with the specified index extends beyond the boundary of the entire line.
# Otherwise, the function returns True.

def is_arguments_for_substr_correct(string, index, length):
    if index < 0:
        return False
    elif length < 0:
        return False
    elif index > len(string) - 1:
        return False
    elif index + length > len(string):
        return False
    return True
