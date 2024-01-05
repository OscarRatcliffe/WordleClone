"use strict";
// -------
// Imports
// -------
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidWords_json_1 = __importDefault(require("../data/ValidWords.json"));
var colours = require("colors/safe");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
// -----------
// Define items 
// -----------
let wordLen = 5;
let guesses = [];
let wordIndex = Math.floor(Math.random() * ValidWords_json_1.default.all_possible_answers.length);
let word = ValidWords_json_1.default.all_possible_answers[wordIndex];
console.log(word); //TEMP
// ---------
// Get guess
// ---------
readline.question('Please enter a guess:\n', (guess) => {
    guess = guess.toUpperCase();
    // -----------
    // Check guess
    // -----------
    if (ValidWords_json_1.default.all_possible_answers.includes(guess)) {
        if (guess == word) {
            console.log(colours.green(guess));
            console.log("GAME OVER");
        }
        else {
            let guessFormatted = "";
            for (let i = 0; i < wordLen; i++) {
                if (word[i] == guess[i]) { //Letter in right place
                    guessFormatted += colours.green(guess[i]);
                }
                else if (word.includes(guess[i])) { //Letter in word but in wrong place
                    guessFormatted += colours.yellow(guess[i]);
                }
                else { //Letter not in word
                    guessFormatted += colours.grey(guess[i]);
                }
            }
            console.log(guessFormatted);
            guesses.push(guessFormatted);
        }
    }
    else {
        console.log("Please enter a valid 5 letter word");
    }
    readline.close();
});
