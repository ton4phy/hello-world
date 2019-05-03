# Exercise
# Create a get_parent_names_total_length function for Sam. It should take one argument - the name of the child,
# and return the total number of characters in the names of the mother and father.
# The function should not display anything on the screen, only return a number.

from hexlet.code_basics import parent_for

# BEGIN
def get_parent_names_total_length(child):
    mother = parent_for(child, 'mother')
    father = parent_for(child, 'father')
    return len(mother) + len(father)
# END
