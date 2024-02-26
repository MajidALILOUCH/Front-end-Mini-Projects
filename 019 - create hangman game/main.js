// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach((letter) => {
  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add Class On Span
  span.className = "letter-box";

  // Append Span To The Letters Container
  lettersContainer.appendChild(span);
});

// Object Of Words + Categories
const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

// Get Random Property

let allKeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// random Category
let randomPropName = allKeys[randomPropNumber];

// random Category Words
let randomPropValue = words[randomPropName];

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// The Chosen Word
let randomValueValue = randomPropValue[randomValueNumber];

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

// Create Spans Depened On Word
lettersAndSpace.forEach((letter) => {
  // Create Empty Span
  let emptySpan = document.createElement("span");

  // If Letter Is Space
  if (letter === " ") {
    // Add Class To The Span
    emptySpan.className = "with-space";
  }

  // Append Span To The Letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);
});

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts
let wrongAttempts = 0;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking On Letters
document.addEventListener("click", (e) => {
  // Set The Choose Status
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    // The Chosen Word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    theChosenWord.forEach((wordLetter, WordIndex) => {
      // If The Clicked Letter Equal To One Of The Chosen Word Letter
      if (theClickedLetter == wordLetter) {
        // Set Status To Correct
        theStatus = true;

        // Loop On All Guess Spans
        guessSpans.forEach((span, spanIndex) => {
          if (WordIndex === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });

    // Outside Loop

    // If Letter Is Wrong
    if (theStatus !== true) {
      // Increase The Wrong Attempts
      wrongAttempts++;

      // Add Class Wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      // Play Fail Sound
      document.getElementById("fail").play();

      if (wrongAttempts === 8) {
        endGame();

        lettersContainer.classList.add("finished");
      }
    } else {
      // Play Success Sound
      document.getElementById("success").play();
    }
  }
});

// End Game Function
function endGame() {
  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(
    `Game Over, The Word Is ${randomValueValue}`
  );

  // Append Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = "popup";

  // Append To The Body
  document.body.appendChild(div);
}

// my code

// let wrongMessage = document.querySelector(".wrong span");
// let wrongLettersDiv = document.querySelector(".wrong-letters");
// let word = document.querySelector(".word");
// let man = document.querySelectorAll(".horca .man");
// let sameLetterAlert = document.querySelector(".same-letter");
// let popup = document.querySelector(".popup");
// let playAgain = document.getElementById("play-again");
// let finalMessage = document.querySelector(".final-message");

// let words = ["majid", "elzero", "machota", "btata"];

// let randomWord = words[Math.floor(Math.random() * words.length)];

// let randomWordLetters = randomWord.split("");

// console.log(randomWord);

// // reseting the dom when playagain is clicked
// function resetDom() {
//   document.querySelectorAll(".letter").forEach((span) => {
//     span.style.display = "none";
//     span.classList.remove("showed");
//   });

//   man.forEach((part) => {
//     part.style.cssText = "display: none";
//   });

//   wrongMessage.innerHTML = "";
//   wrongLettersDiv.innerHTML = "";
//   index = 0;
//   wrongLetters = [];
//   rightLetters = [];

//   randomWord = words[Math.floor(Math.random() * words.length)];

//   randomWordLetters = randomWord.split("");
// }

// randomWordLetters.forEach((letter) => {
//   // create the letter container
//   let letterContainer = document.createElement("div");
//   letterContainer.className = "letter-container";

//   // create letter span
//   let letterSpan = document.createElement("span");
//   letterSpan.classList.add("letter");
//   let letterSpanContent = document.createTextNode(letter);
//   letterSpan.appendChild(letterSpanContent);

//   // create the border of the div container
//   let border = document.createElement("span");
//   border.classList.add("border");

//   letterContainer.appendChild(letterSpan);
//   letterContainer.appendChild(border);

//   word.appendChild(letterContainer);
// });

// let index = 0;
// let wrongLetters = [];
// let rightLetters = [];

// window.addEventListener("keydown", (event) => {
//   // if our word contains the letter that we clicked in
//   if (randomWordLetters.includes(event.key)) {
//     // shoAlert if the letter is already clicked and showed
//     if (rightLetters.includes(event.key)) {
//       showAlert();
//     } else {
//       rightLetters.push(event.key);
//     }

//     // show the letters that are equal to letter that we clicked
//     document.querySelectorAll(".letter").forEach((span) => {
//       if (span.innerHTML === event.key) {
//         span.style.display = "block";
//         span.classList.add("showed");
//       }
//       let showedSpans = 0;
//       document.querySelectorAll(".letter").forEach((letter) => {
//         if (letter.classList.contains("showed")) {
//           showedSpans++;
//         }
//       });
//       if (randomWordLetters.length == showedSpans) {
//         popup.classList.add("show");
//         finalMessage.innerHTML = "Congratulations! You won! 😃";
//       }
//     });
//   } else {
//     // check if the letter was entered to show the alert
//     if (wrongLetters.includes(event.key)) {
//       showAlert();
//     } else {
//       // show the wrong message
//       wrongMessage.innerHTML = "wrong";

//       // show the part of man
//       man[index].style.cssText = "display: block";

//       // push the letter to wrongLetters array to check later if we entered this letter by this array
//       wrongLetters.push(event.key);

//       if (wrongLetters.length >= 6) {
//         popup.classList.add("show");
//         finalMessage.innerHTML = "Unfortunately you lost. 😕";
//       }

//       // show the wrong letter below the wrong message
//       let span = document.createElement("span");
//       span.appendChild(document.createTextNode(event.key));
//       wrongLettersDiv.appendChild(span);

//       // increase the index to show the next part of the man
//       index++;
//     }
//   }
// });

// function showAlert() {
//   sameLetterAlert.classList.add("show");
//   // hide the alert after 2 seconds
//   setTimeout(() => {
//     sameLetterAlert.classList.remove("show");
//   }, 2000);
// }

// playAgain.addEventListener("click", () => {
//   popup.classList.remove("show");
//   resetDom();
// });
