const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = document.getElementById('guessInput').value;
    attempts++;
    document.getElementById('message').textContent = '';

    if (guess === randomNumber) {
        document.getElementById('message').textContent = 'Congratulations You guessed the number.';
    } else if (guess < randomNumber) {
        document.getElementById('message').textContent = 'Too low!';
    } else {
        document.getElementById('message').textContent = 'Too high!';
    }
}
