# Exercise
# You are given three variables with the names of different people. 
# Compose and display a word of characters in this order:

    # the third character from the first line;
    # the second character from the second line;
    # the fourth character from the third line;
    # fifth character from the second line;
    # the third character from the second line.
    
one = 'Naharis'
two = 'Mormont'
three = 'Sand'

# BEGIN
print('{}{}{}{}{}'.format(one[2], two[1], three[3], two[4], two[2]))
# END

# OR

print(one[2] + two[1] + three[3] + two[4] + two[2])
