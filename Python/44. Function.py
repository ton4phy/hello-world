# Exercise
# Implement the function get_formatted_birthday, which accepts three parameters for input: day, month, and year of birth,
# and returns them as a string in a formatted form, for example: 30-02-1953.

def get_formatted_birthday(date, mouth, year):
    result = '%02d-%02d-%d' % (date, mouth, year)
    return result
