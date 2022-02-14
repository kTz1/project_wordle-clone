# Functional Requirements

## Gameplay
-6 tries to guess a 5-letter word from

## Pick a solution word
-store solution words in JSON object / array
-when game is loaded, choose a random item from array
-set solution to that word

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
    -border of tile changes to light gray
    -blinking in animation with the letter changes
    -backspace will remove letter, border changes back to dark-gray

-when submitting a guess:
    -tiles will flip up and background color will change based on guess
    -tiles slight delay between each tile flipping
    -backgrounud color changes when tiles is flat