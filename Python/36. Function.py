# Exercise
# To build the family tree of the Starks family, Sam wrote the parent_for function,
# which returns the name of the parent if the first parameter is the name of the child. 
# The second parameter function takes the string 'father' or 'mother'. 
# So the function understands which parent to return. The default setting is 'mother'.
# That is, if you want to know the name of the mother, then you can not specifically transmit the 'mother', 
# but pass only one parameter - the name of the child.

# Write a program that displays the name of maternal grandfather Joffrey.
# Joffrey's full name in English: 'Joffrey Baratheon'.

from hexlet.code_basics import parent_for

# BEGIN
print(parent_for(parent_for('Joffrey Baratheon'), 'father'))
# END
