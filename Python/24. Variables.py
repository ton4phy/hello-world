# Exercise
# Write a program that will generate the header and body of the letter, using the ready-made variables,
# and display the resulting lines on the screen.
# For the title, use the variables first_name and greeting, a comma, and an exclamation point. 
# Display it in the correct order.
# For the body of the letter, use the info and intro variables, and the second sentence should be on a new line.
# The result on the screen will look like this:
    # Hello, Joffrey!
    # Here is an important information about your account security.
    # We couldn't verify you mother's maiden name.
  # Perform the job using only two print.
  
info = "We couldn't verify you mother's maiden name."
intro = "Here is important information about your account security."

first_name = 'Joffrey'
greeting = 'Hello'

# BEGIN
print(greeting + ", " + first_name + "!")
print(intro + "\n" + info)
# END
