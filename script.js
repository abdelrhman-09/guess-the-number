let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 10;
let totalGuessesUsed = 0;

const overlay = document.getElementById("bg-overlay");

function makeGuess() {
  const userGuess = parseInt(document.getElementById("guess").value);
  const message = document.getElementById("message");
  const guessesLeft = document.getElementById("guessesLeft");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "⛔ Please enter a number between 1 and 100.";
    return;
  }

  guesses--;
  totalGuessesUsed++;

  if (userGuess === randomNumber) {
    message.textContent = `🎉 You got it in ${totalGuessesUsed} guess${totalGuessesUsed > 1 ? 'es' : ''}! You're a genius!`;
    guessesLeft.textContent = "";
    overlay.style.backgroundColor = "rgba(88, 222, 95, 0.5)";
    disableInput();
  } else if (guesses === 0) {
    message.textContent = `😢 You lost! The number was ${randomNumber}.`;
    guessesLeft.textContent = "";
    overlay.style.backgroundColor = "rgba(255, 100, 100, 0.5)";
    disableInput();
  } else {
    message.textContent = userGuess > randomNumber
      ? "📉 Too high! try lower than that."
      : "📈 Too low! Try higher.";
    guessesLeft.textContent = `Guesses left: ${guesses}`;
    overlay.style.backgroundColor = "rgba(255, 100, 100, 0.4)";
  }
}

function disableInput() {
  document.getElementById("guess").disabled = true;
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guesses = 10;
  totalGuessesUsed = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("guessesLeft").textContent = "";
  document.getElementById("guess").disabled = false;
  document.getElementById("guess").value = "";
  overlay.style.backgroundColor = "transparent";
}
