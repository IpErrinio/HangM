let selectedWord = "";
let displayedWord = "";
let attempts = 0;
const maxAttempts = 8;

function startGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayedWord = "_ ".repeat(selectedWord.length).trim();
  attempts = 0;
  document.getElementById("wordDisplay").textContent = displayedWord;
  document.getElementById("message").textContent = "";
  document.getElementById("message").classList.remove("win", "lose");
  document.getElementById("guessInput").style.display = "inline-block";
  document.getElementById("guessButton").style.display = "inline-block";
  clearCanvas();
  createLetterButtons();

  const guessInput = document.getElementById("guessInput");
  guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      guessFullWord();
    }
  });
}

function createLetterButtons() {
  const lettersRow1 = document.getElementById("lettersRow1");
  const lettersRow2 = document.getElementById("lettersRow2");
  lettersRow1.innerHTML = "";
  lettersRow2.innerHTML = "";

  const letters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const button = document.createElement("button");
    button.textContent = letter;
    button.onclick = () => guessLetter(letter);

    if (i < 13) {
      lettersRow1.appendChild(button);
    } else {
      lettersRow2.appendChild(button);
    }
  }
}

function guessLetter(letter) {
  let newDisplayedWord = "";
  let correctGuess = false;
  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === letter) {
      newDisplayedWord += letter + " ";
      correctGuess = true;
    } else {
      newDisplayedWord += displayedWord[i * 2] + " ";
    }
  }
  displayedWord = newDisplayedWord.trim();
  document.getElementById("wordDisplay").textContent = displayedWord;

  if (!correctGuess) {
    attempts++;
    drawHangman(attempts);
  }

  //Do wyjebania
  if (displayedWord.indexOf("_") === -1) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = "Gratulacje! Wygrałeś!";
    messageElement.classList.add("win");
    endGame();
  } else if (attempts === maxAttempts) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = `Przegrałeś! Słowo to: ${selectedWord}`;
    messageElement.classList.add("lose");
    endGame();
  }

  document.querySelectorAll("#letters button").forEach((button) => {
    if (button.textContent === letter) {
      button.disabled = true;
    }
  });
}

function guessFullWord() {
  const guessedWord = document.getElementById("guessInput").value.toLowerCase();

  /* if (guessedWord === "schabowy") {
    showFullscreenImage();
    return;
  }*/

  //Albo to
  if (guessedWord === selectedWord) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = "Gratulacje! Wygrałeś!";
    messageElement.classList.add("win");
    displayedWord = selectedWord.split("").join(" ");
    document.getElementById("wordDisplay").textContent = displayedWord;
    endGame();
  } else {
    attempts++;
    drawHangman(attempts);
    if (attempts === maxAttempts) {
      const messageElement = document.getElementById("message");
      messageElement.textContent = `Przegrałeś! Słowo to: ${selectedWord}`;
      messageElement.classList.add("lose");
      endGame();
    }
  }
  document.getElementById("guessInput").value = "";
}

function endGame() {
  document.getElementById("guessInput").style.display = "none";
  document.getElementById("guessButton").style.display = "none";
  document.querySelectorAll("#letters button").forEach((button) => {
    button.disabled = true;
  });
}

function clearCanvas() {
  const canvas = document.getElementById("hangmanCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/*
//Nie pytaj
function showFullscreenImage() {
  const fullscreenImageContainer = document.getElementById(
    "fullscreenImageContainer"
  );
  fullscreenImageContainer.style.display = "flex";
}

//O to też
function closeFullscreenImage() {
  const fullscreenImageContainer = document.getElementById(
    "fullscreenImageContainer"
  );
  fullscreenImageContainer.style.display = "none";
}
*/

window.onload = startGame;
