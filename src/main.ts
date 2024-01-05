// -------
// Imports
// -------

import validWords from '../data/ValidWords.json';
var colours = require("colors/safe");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// -----------
// Define items 
// -----------

let wordLen = 5;
let guesses: Array<String> = []
let wordIndex = Math.floor(Math.random() * validWords.all_possible_answers.length);
let word = validWords.all_possible_answers[wordIndex]

console.log(word) //TEMP

// ---------
// Get guess
// ---------

readline.question('Please enter a guess:\n', (guess: string) => {

    guess = guess.toUpperCase()

    // -----------
    // Check guess
    // -----------

    if (validWords.all_possible_answers.includes(guess)) {

        if (guess == word) {

            console.log(colours.green(guess))
            console.log("GAME OVER")

        } else {

            let guessFormatted = ""

            for (let i = 0; i < wordLen; i++) {

                if (word[i] == guess[i]) { //Letter in right place

                    guessFormatted += colours.green(guess[i]);

                } else if (word.includes(guess[i])) { //Letter in word but in wrong place

                    guessFormatted += colours.yellow(guess[i]);

                } else { //Letter not in word

                    guessFormatted += colours.grey(guess[i]);

                }
            }

            console.log(guessFormatted);

            guesses.push(guessFormatted);
        }

    } else {
        console.log("Please enter a valid 5 letter word");
    }

    readline.close();
});