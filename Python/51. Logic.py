# Exercise
# Write the function is_neutral_soldier, which takes two arguments as input:

# The color of the armor (string). Possible options: red, yellow, black.
# Shield color (string). Possible options: red, yellow, black.
# The function returns True if the color of the armor is not red and the color of the shield is black.
# In other cases, it returns False.

def is_neutral_soldier(color, shield):
    return color != 'red' and shield == 'black'
