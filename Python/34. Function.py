# Exercise
# Arya is going on a trip from Winterfel to Eagle's Nest to visit Lisa Arren, 
# but on the way she needs to go to the Freyas to commit an act of retribution.
# She needs to calculate the total length of the route.

# Unfortunately, the function calculate_distance can only calculate the distance between two points. 
# Therefore, it is necessary to first find out the distance from Winterfell to the Freew Castle, 
# and then the distance to the Eagle's Nest.

      # Winterfell - Winterfell
      # Twins (Freew Castle) - The Twins
      # Eagle's Nest - The Eyrie

# Display the full length of the Arya route. Recall that the function calculate_distance takes two 
# arguments and returns a number.

from hexlet.code_basics import calculate_distance

# BEGIN
distance = calculate_distance('Winterfell', 'The Twins') + calculate_distance('The Twins', 'The Eyrie')
print(distance)
# END
