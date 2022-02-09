# Functional Requirements

## Gameplay
-6 tries to guess a 5-letter word from

-typing in the letter will display the letter in the tile grid
-backspace will delete letters that

## Design
-tiles 5x6
-virtual keyboard
-enter will submit guess
-guesses must be a real word, "in word list"
-guess colors (data-state): 
    -gray: "absent", letter not in word word
    -yellow: "present", letter in word, but in wrong position
    -green: "correct", letter in word, but in right position

-hard mode: present or correct letters must be present in subsequent guesses

## Interactions
-when typing a letter:
    -border of tile changes to light grays
    -blinking in animation with the letter changes
    -backspace will remove letter, border changes back to dark-gray

-when submitting a guess:
    -tiles will flip up and background color will change based on guess