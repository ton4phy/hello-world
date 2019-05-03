# Exercise
# On the electronic map of Westeros, which Sam implemented, 
# the Starks' allies are shown in a green circle, the enemies in red, and neutral families in gray.

# Write for Sam the function who_is_this_house_to_starks, 
# which takes as input a family name and returns one of three values: 'friend', 'enemy', ‘neutral '.

def who_is_this_house_to_starks(house_name):
    if house_name == 'Karstark' or house_name == 'Tully':
        return 'friend'
    elif house_name == 'Lannister' or house_name == 'Frey':
        return 'enemy'
    return 'neutral'
