# Exercise
# Implement the custom_parent_for function, which takes two arguments:

# String - the name of the child.
# String indicating parent. This argument should by default be 'father'.
# The function must return the name of the corresponding parent.

from hexlet.code_basics import parent_for

# BEGIN
def custom_parent_for(child_name, parent_name='father'):
    return parent_for(child_name, parent_name)
# END
