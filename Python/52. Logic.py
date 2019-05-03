# Exercise
# Implement the guess_number function that takes a number and checks if the number is equal to the given one (let it be 42). 
# If equal, then the function should return the string 'You win!', Otherwise you need to return the string 'Try again!'.


def guess_number(guess):
    number = 42
    if guess == number:
        return 'You win!'
    return 'Try again!'
