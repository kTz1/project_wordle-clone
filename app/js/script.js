
const lettersPattern = /[a-zA-Z]+/;
let currentGuessCount = 1;
let currentGuess = document.querySelector('#guess' + currentGuessCount);

// Detect keypress events(letter, backspace, other)
document.addEventListener('keydown', (e) => {
	console.log('keypress: ' + e.key);
	let keypress = e.key;
	if (keypress.length === 1 && lettersPattern.test(e.key) && currentGuess.dataset.letters.length < 5) {
		updateLetters(keypress);
	} else if (e.key === 'Backspace' && currentGuess.dataset.letters !== '') {
		console.log('is backspace');
		deleteFromLetters();
	} 
});

// Update "letters"
const updateLetters = (letter) => {
	let oldLetters = currentGuess.dataset.letters;
	let newLetters = oldLetters + letter;
	let currentTile = newLetters.length;
	currentGuess.dataset.letters = newLetters;
	console.log('currentTile = ' + currentTile);
	updateTiles(currentTile, letter);
};

// Update tile markup
const updateTiles = (tileNum, letter) => {
	console.log('updateTiles(' + tileNum, letter + ')');
	let currentTile = document.querySelector('#guessTile' + tileNum);
	currentTile.innerText = letter;
};

// Backspace -- Delete last letter 
const deleteFromLetters = () => {
	// remove last letter from data-letters
	let oldLetters = currentGuess.dataset.letters;
	console.log('oldLetters = ' + oldLetters);
	let newLetters = oldLetters.slice(0, -1);
	console.log('newLetters = ' + newLetters);
	currentGuess.dataset.letters = newLetters;
	deleteFromTiles(oldLetters.length);

};

// Backspace -- delete last tile markup
const deleteFromTiles = (tileNum) => {
	// remove markup from last tile
	console.log('deleteFromTiles = ' + tileNum);
	document.querySelector('#guessTile' + tileNum).innerText = '';
};