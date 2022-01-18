let header = document.querySelector("header");
let game = document.getElementById("game");
let cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
let restartButton = document.getElementById("restart-button");

showCards();

function showCards() {
  let h3 = document.createElement("h3");
  h3.innerHTML = "Choose a person.";
  game.appendChild(h3);
  game.append(cardContainer);

  let roxy = document.createElement("div");
  let piper = document.createElement("div");
  let sza = document.createElement("div");
  roxy.classList.add("roxy", "card");
  piper.classList.add("piper", "card");
  sza.classList.add("sza", "card");
  //Create an attribute name "index" for each card and assign if the name of the character on the card.
  roxy.setAttribute("index", "Roxy");
  piper.setAttribute("index", "Piper");
  sza.setAttribute("index", "Sza");

  roxy.innerHTML = `<h2>Roxy Mitchell <span class="description">(Eastenders)</span></h2> 
  <img src='roxy.png' alt='Roxy Mitchell (Eastenders)' />`;
  piper.innerHTML = `<h2>Piper Halliwell <span class="description">(Charmed)</span></h2> 
  <img src='piper.png' alt='Piper Halliwell (Charmed)' />`;
  sza.innerHTML = `<h2>SZA <span class="description">(Singer)</span></h2> 
  <img src='sza.png' alt='Singer SZA (singer)' />`;

  //Add a click event to the 3 cards, that calls the gamePlay function
  roxy.addEventListener("click", gamePlay);
  piper.addEventListener("click", gamePlay);
  sza.addEventListener("click", gamePlay);

  cardContainer.appendChild(roxy);
  cardContainer.appendChild(piper);
  cardContainer.appendChild(sza);
}

function gamePlay() {
  //Create an array of all elements with the class "card" (the 3 cards).
  allCards = Array.from(document.querySelectorAll(".card"));

  //When this function runs (a card has been clicked), remove the click event listener from all cards.
  allCards.forEach((card) => card.removeEventListener("click", gamePlay));

  //Pick a random character for the opponent out of the choices array. Assign it to a variable.
  let choices = ["Roxy", "Piper", "Sza"];
  let opponent = choices[Math.floor(Math.random() * choices.length)];
  //Assign the current card clicked to a "player" variable
  let player = this;

  //Pass the player and opponent into the next function.
  gameResults(player, opponent);
}

function gameResults(player, opponent) {
  //Create an array from the 3 cards, and cycle through them.
  //If the "index" value of the card is the same as the "opponent" variable, remove the "card" class and add a "opponent class".
  allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach((card) => {
    if (card.getAttribute("index") === opponent) {
      card.classList.add("opponent");
      card.classList.remove("card");
    }
  });

  //For the player card (current card clicked), add a "player" class and remove the "card class".
  player.classList.add("player");
  player.classList.remove("card");
  console.log(opponent);

  showResults();
}

function showResults() {
  //Add the cards with the class of "player" and "opponent" to 2 variables.
  let playerCard = document.getElementsByClassName("player");
  let opponentCard = document.getElementsByClassName("opponent");

  //Assign the value of each cards "index" attribute to a "player" and "opponent" variable.
  let player = playerCard[0].getAttribute("index");
  let opponent = opponentCard[0].getAttribute("index");

  let resultText = document.querySelector("h3");

  let win = "You win!";
  let lose = "You lose!";
  let draw = "It's a draw.";

  //If statement that determins the results of the rock, paper, scissors game.
  if (player === "Roxy" && opponent === "Piper") {
    resultText.innerHTML = `You have chosen <span class="player-colour">${player}</span> and the computer has chosen ${opponent}. <span class="result">${lose}</span>`;
  } else if (player === "Roxy" && opponent === "Sza") {
    resultText.innerHTML = `You have chosen <span class="player-colour">${player}</span> and the computer has chosen ${opponent}. <span class="result">${win}</span>`;
  } else if (player === "Roxy" && opponent === "Roxy") {
    resultText.innerHTML = `You and the computer have both chosen ${player}. <span class="result">${draw}</span>`;
  } else if (player === "Piper" && opponent === "Roxy") {
    resultText.innerHTML = `You have chosen <span class="player-colour">${player}</span> and the computer has chosen ${opponent}. <span class="result">${win}</span>`;
  } else if (player === "Piper" && opponent === "Sza") {
    resultText.innerHTML = `You have chosen <span class="player-colour">${player}</span> and the computer has chosen ${opponent}. <span class="result">${lose}</span>`;
  } else if (player === "Piper" && opponent === "Piper") {
    resultText.innerHTML = `You and the computer have both chosen ${player}. <span class="result">${draw}</span>`;
  } else if (player === "Sza" && opponent === "Roxy") {
    resultText.innerHTML = `You have chosen <span class="player-colour">${player}</span> and the computer has chosen ${opponent}. <span class="result">${lose}</span>`;
  } else if (player === "Sza" && opponent === "Piper") {
    resultText.innerHTML = `You have chosen <span class="player-colour">${player}</span> and the computer has chosen ${opponent}. <span class="result">${win}</span>`;
  } else if (player === "Sza" && opponent === "Sza") {
    resultText.innerHTML = `You and the computer have both chosen ${player}. <span class="result">${draw}</span>`;
  }
}

//Add an click event to the restart button.
restartButton.addEventListener("click", restartGame);

//When the restart button is click, clear the inner HTML of the game and card container element.
//Run the first function to restart the game.
function restartGame() {
  game.innerHTML = "";
  cardContainer.innerHTML = "";
  showCards();
}
