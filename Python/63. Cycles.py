# Exercise
# Implement the does_contain function, which checks case-sensitive) whether the string contains the specified letter 
# (this time do not use the in operator!). The function takes two parameters:

# Line
# Letter to search

def does_contain(string, char):
    index = 0
    while index < len(string):
        if string[index] == char:
            return True
        index += 1
    return False
