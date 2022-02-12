
const lettersPattern = /[a-zA-Z]+/;
let currentGuessCount = 1;
let currentGuess = document.querySelector('#guess' + currentGuessCount);
let solutionWord = '';

let words = ['baker', 'store', 'horse', 'sheep', 'clone', 'speak', 'apple', 'bread'];

// Choose a random word
const chooseWord = () => {
	let randomWord = Math.floor(Math.random() * (words.length - 1) + 1);
	solutionWord = words[randomWord];
}
chooseWord();
console.log('solutionWord = ' + solutionWord);

// Detect keypress events(letter, backspace, enter,other)
document.addEventListener('keydown', (e) => {
	let keypress = e.key;
	if (keypress.length === 1 && lettersPattern.test(e.key) && currentGuess.dataset.letters.length < 5) {
		updateLetters(keypress);
	} else if (e.key === 'Backspace' && currentGuess.dataset.letters !== '') {
		console.log('is backspace');
		deleteFromLetters();
	} else if (e.key === 'Enter' && currentGuess.dataset.letters.length === 5) {
		console.log('submit guess');
		for (let i = 0; i < 5; i++) {
			setTimeout(() => {
				revealTile(i, checkLetter(i));
			}, i * 200);
		};
	}
});

// Update "letters"
const updateLetters = (letter) => {
	let oldLetters = currentGuess.dataset.letters;
	let newLetters = oldLetters + letter;
	let currentTile = newLetters.length;
	currentGuess.dataset.letters = newLetters;
	updateTiles(currentTile, letter);
};

// Update tile markup
const updateTiles = (tileNum, letter) => {
	let currentTile = document.querySelector('#guessTile' + tileNum);
	currentTile.innerText = letter;
};

// Backspace -- Delete last letter 
const deleteFromLetters = () => {
	// remove last letter from data-letters
	let oldLetters = currentGuess.dataset.letters;
	let newLetters = oldLetters.slice(0, -1);
	currentGuess.dataset.letters = newLetters;
	deleteFromTiles(oldLetters.length);

};

// Backspace -- delete last tile markup
const deleteFromTiles = (tileNum) => {
	// remove markup from last tile
	document.querySelector('#guessTile' + tileNum).innerText = '';
};

// Check letter to solution
// parameter = letter position in word
const checkLetter = (position) => {
	let guessedLetter = currentGuess.dataset.letters.charAt(position);
	let solutionLetter = solutionWord.charAt(position);
	console.log(guessedLetter, solutionLetter);

	// if letters match, return "correct"
	if (guessedLetter === solutionLetter) {
		return 'correct';
	} 
	// if not a match,if letter exists in solution word return "present"
	else {
		return checkLetterExists(guessedLetter) ? 'present' : 'absent';
	}
};

const checkLetterExists = (letter) => {
	return solutionWord.includes(letter);
};

const revealTile = (i, state) => {
	console.log('reveal tile = ', i , state);
	let tileNum = i + 1;
	let tile = document.querySelector('#guessTile' + tileNum);

	switch(status) {
		case 'correct':
			tile.classList.add('correct');
			break;
		case 'present':
			tile.classList.add('present');
			break;
		case 'absent':
			tile.classList.add('absent');
			break;
	};
	flipTile(tileNum, state);
};

const flipTile = (tileNum, state) => {
	let tile = document.querySelector('#guessTile' + tileNum);
	tile.classList.add('flip-in');
	setTimeout(() => {
		tile.classList.add(state);
	}, 250);
	setTimeout(() => {
		tile.classList.remove('flip-in');
		tile.classList.add('flip-out');
	}, 250);
}