let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let guess = Number(document.getElementById("guess").value);
  attempts++;

  if (guess === secretNumber) {
    document.getElementById("message").textContent = "🎉 Correct! You guessed it!";
  } else if (guess > secretNumber) {
    document.getElementById("message").textContent = "📉 Too high!";
  } else {
    document.getElementById("message").textContent = "📈 Too low!";
  }

  document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Attempts: 0";
  document.getElementById("guess").value = "";
}
