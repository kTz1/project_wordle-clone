# Functional Requirements

## Gameplay
-6 tries to guess a 5-letter word from

## Making a guess
-detect keypresses is a letter 
    -if keypress is a letter
        -update "letters" attribute and update tile markup(func)
            -update tile markup based on "letters" value(func)
        -if keypress is backspace 
            -delete last letter in "letters"(func)
                -update tile markup based on "letters"

-don't run update functions if "letters" = 5;

## Submit guess
-pressing Enter will submit the guess
    -compare each letter with the corresponding letter in solution word
    -update the state/color of the letter 
    -if leeters are "correct" / green game is won
    
-store solution words in JSON object / array

-guesses must be real word, "in word list"
-guess colors (data-state): 
    -gray: "absent", letter not in word word
    -yellow: "present", letter in word, but in wrong position
    -green: "correct", letter in word, but in right position

-hard mode: present or correct letters must be present in subsequent guesses
-guesses are saved in local storage

## Design
-tiles 5x6
-virtual keyboard
-enter will submit guess
-guesses must be a real word, "in word list"

## Interactions
-when typing a letter:
    -border of tile changes to light grays
    -blinking in animation with the letter changes
    -backspace will remove letter, border changes back to dark-gray

-when submitting a guess:
    -tiles will flip up and background color will change based on guess