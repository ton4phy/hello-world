# Exercise
# Implement the is_not_lannister_soldier function, which verifies that the soldier is not a Lannister.
# The function accepts the same arguments as the is_lannister_soldier function:

# The color of the armor (string). If the armor is red, then the string is red.
# None if there is no shield. The string lion if there is a shield, and on it is a lion.
# The is_lannister_soldier function ready for use is available to you. 
# You can use it to not write all the logical conditions again.

from hexlet.code_basics import is_lannister_soldier

# BEGIN
def is_not_lannister_soldier(color, shield):
    return not is_lannister_soldier(color, shield)
# END
