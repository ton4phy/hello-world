# Exercise
# Modify the print_numbers function so that it prints the numbers in reverse order. To do this,
# go from the top to the bottom. That is, 
# the counter should be initialized with the maximum value,
# and in the body of the loop it should be reduced to the lower limit.

def print_numbers(n):
    while n > 0:
        print(n)
        n = n - 1
    print('finished!')
