
const guessInput = document.querySelector("#guessInput");
const submitButton = document.querySelector("#submitButton");
const cells = document.querySelectorAll(".cell");
const feedback = document.querySelector("#feedback");


let index = Math.floor(Math.random() * words.length);
let targetWord = words[index];
let attempts = 0;

submitButton.addEventListener("click", function () {
    let guess = guessInput.value.toLowerCase();

    if (guess.length != 5 || attempts == 6) {
        return;
    }

   for (let i = 0; i < 5; i++) {
        let cell = cells[attempts * 5 + i];
        cell.textContent = guess[i];
        if (guess[i] == targetWord[i]) {
            cell.style.backgroundColor = "green";
            cell.style.color = "white";
        } else {
            let found = false;
            for (let j = 0; j < 5; j++) {
                if (guess[i] == targetWord[j]) {
                    found = true;
                }
            }
            if (found == true) {
                cell.style.backgroundColor = "yellow";
                cell.style.color = "black";
            } else {
                cell.style.backgroundColor = "gray";
                cell.style.color = "white";
            }
        }
    }

    attempts++;

    if (guess == targetWord) {
        feedback.textContent = "Congratulations! You guessed the word!";
    } else if (attempts == 6) {
        feedback.textContent = `Game over, the word was "${targetWord}"`;
    }

    if (guess == targetWord || attempts == 6) {
        guessInput.disabled = true;
        submitButton.disabled = true;
    }

    guessInput.value = "";
    guessInput.focus();
});
