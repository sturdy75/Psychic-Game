var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];



var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userChoice = [];
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var yourGuessesSoFarText = document.getElementById("yourGuessesSoFar-text");
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];



document.onkeypress = function(event) {

    var userGuess = event.key;


    if (userGuess === computerChoice) {
        wins++;
        guessesLeft = 10;
        userChoice = [];
        winsText.textContent = "wins" + wins;

    } else {
        if (userChoice.includes(userGuess)) { 
         } else {
            guessesLeft--;
            userChoice.push(userGuess);
            guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
            yourGuessesSoFarText.textContent = "Your Guesses So Far: " + userChoice;

        }
    }
    if (guessesLeft === 0) {
        guessesLeft = 10;
        losses++;
        userChoice = [];
        lossesText.textContent = "Losses: " + losses;
    }
    

}








