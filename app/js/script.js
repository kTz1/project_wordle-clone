
const lettersPattern = /[a-zA-Z]+/;
let currentGuessCount = 1;
let currentGuess = document.querySelector('#guess' + currentGuessCount);

// Detect keypress events(letter, backspace, other)
document.addEventListener('keydown', (e) => {
	console.log('keypress: ' + e.key);

	// if keypress is string of length 1 and is a letter
	let keypress = e.key;

	if (keypress.length === 1 && lettersPattern.test(e.key)) {
		// console.log('is letter');
		updateLetters(keypress);
	}
	// if backspace
});
// Update "letters"
const updateLetters = (letter) => {
	let oldLetters = currentGuess.dataset.letters;
	let newLetters = oldLetters + letter;
	let currentTile = newLetters.length;
	currentGuess.dataset.letters = newLetters;
	console.log('currentTile = ' + currentTile);
	updateTiles(currentTile, currentGuessCount);
}
// Update tile markup
const updateTiles = (tileNum, letter) => {

}
// Delete last letter and update tile markup