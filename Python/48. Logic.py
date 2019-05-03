# Exercise
# Implement the has_targaryen_reference function, which accepts a string as input and checks if it starts with Targaryen.
# This function should extract a substring of the same length as the word Targaryen, and then check whether
# the extracted substring is equal to the Targaryen string. 
# Let me remind you that the indices start from scratch.

def has_targaryen_reference(string):
    length = len('Targaryen')
    prefix = string[:length]
    return prefix == 'Targaryen'
