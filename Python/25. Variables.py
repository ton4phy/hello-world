# Exercise
# You are faced with this code, which displays the total number of rooms in the possession of the current king:
# king = 'King Balon the 6th'
# print (king + 'has' + str (6 * 17) + 'rooms.')
# As you can see, these are magic numbers: it is not clear what 6 is and what 17. 
# It is possible to guess if you know the history of the royal family:
# each new king inherits all the castles from their ancestors and builds a new castle - an exact copy of the parent.
# This strange dynasty just breeds the same castles ...
# Get rid of the magic numbers by creating new variables, and then display the text.

king = 'King Balon the 6th'

# BEGIN
number_of_castles = 6
rooms_per_castle = 17
print(king + ' has ' + str(number_of_castles * rooms_per_castle) + ' rooms.')
# END
