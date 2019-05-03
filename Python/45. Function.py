# Exercise
# Write the function get_age_difference, which takes two years of birth and
# returns a string with an age difference in the form of The age difference is 11.

def get_age_difference(year_one, year_two):
    difference = abs(year_one - year_two)
    return "The age difference is {}".format(difference)
