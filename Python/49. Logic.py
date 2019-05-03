# Exercise
# Write the function is_lannister_soldier, which takes two arguments as input:

# The color of the armor (string). If the armor is red, then the string is red.
# None if there is no shield. The string lion, if there is a shield, and on it is a lion.
# The function returns True if Lannister is recognized, and False if not recognized.


def is_lannister_soldier(color, shield):
    return (color == 'red' and shield is None) or shield == 'lion'
