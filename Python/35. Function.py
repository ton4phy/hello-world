# Exercise
# You have the function calculate_distance_between_towns. 
# It takes one argument, which must contain the names of the two cities through a hyphen. 
# In response, it returns the distance between these cities. Here is an example of use:

# distance = calculate_distance_between_towns ('Lannisport-Bayasabhad')
# Write a program that uses the function calculate_distance_between_towns and displays the distance between 
# the cities recorded in the source and destination variables.

from hexlet.code_basics import calculate_distance_between_towns

source = 'The Twins'
destination = 'The Eyrie'

# BEGIN
distance = calculate_distance_between_towns(source + '-' + destination)
print(distance)
# END
