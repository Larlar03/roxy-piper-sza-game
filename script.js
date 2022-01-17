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
  roxy.setAttribute("index", "Roxy");
  piper.setAttribute("index", "Piper");
  sza.setAttribute("index", "Sza");

  roxy.innerHTML = `<h2>Roxy Mitchell <span class="description">(Eastenders)</span></h2> 
  <img src='roxy.png' alt='Roxy Mitchell (Eastenders)' />`;
  piper.innerHTML = `<h2>Piper Halliwell <span class="description">(Charmed)</span></h2> 
  <img src='piper.png' alt='Piper Halliwell (Charmed)' />`;
  sza.innerHTML = `<h2>SZA <span class="description">(Singer)</span></h2> 
  <img src='sza.png' alt='Singer SZA (singer)' />`;

  roxy.addEventListener("click", gamePlay);
  piper.addEventListener("click", gamePlay);
  sza.addEventListener("click", gamePlay);

  cardContainer.appendChild(roxy);
  cardContainer.appendChild(piper);
  cardContainer.appendChild(sza);
}

function gamePlay() {
  allCards = Array.from(document.querySelectorAll(".card"));

  allCards.forEach((card) => card.removeEventListener("click", gamePlay));

  let choices = ["Roxy", "Piper", "Sza"];
  let opponent = choices[Math.floor(Math.random() * choices.length)];
  let player = this;
  gameResults(player, opponent);
}

function gameResults(player, opponent) {
  allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach((card) => {
    if (card.getAttribute("index") === opponent) {
      card.classList.add("opponent");
      card.classList.remove("card");
    }
  });

  player.classList.add("player");
  player.classList.remove("card");
  console.log(opponent);

  showResults();
}

function showResults() {
  let playerCard = document.getElementsByClassName("player");
  let opponentCard = document.getElementsByClassName("opponent");

  let player = playerCard[0].getAttribute("index");
  let opponent = opponentCard[0].getAttribute("index");
  let resultText = document.querySelector("h3");
  let win = "You win!";
  let lose = "You lose!";
  let draw = "It's a draw.";

  if (player === "Roxy" && opponent === "Piper") {
    resultText.innerHTML = `You have chosen ${player} and the computer has chosen ${opponent} . <span class="result">${lose}</span>`;
  } else if (player === "Roxy" && opponent === "Sza") {
    resultText.innerHTML = `You have chosen ${player}  and the computer has chosen ${opponent} . <span class="result">${win}</span>`;
  } else if (player === "Roxy" && opponent === "Roxy") {
    resultText.innerHTML = `You and the computer have both chosen ${player}. <span class="result">${draw}</span>`;
  } else if (player === "Piper" && opponent === "Roxy") {
    resultText.innerHTML = `You have chose ${player} and the computer has chosen ${opponent} . <span class="result">${win}</span>`;
  } else if (player === "Piper" && opponent === "Sza") {
    resultText.innerHTML = `You have chose ${player} and the computer has chosen ${opponent} . <span class="result">${lose}</span>`;
  } else if (player === "Piper" && opponent === "Piper") {
    resultText.innerHTML = `You and the computer have both chosen ${player}. <span class="result">${draw}</span>`;
  } else if (player === "Sza" && opponent === "Roxy") {
    resultText.innerHTML = `You have chose ${player} and the computer has chosen ${opponent} . <span class="result">${lose}</span>`;
  } else if (player === "Sza" && opponent === "Piper") {
    resultText.innerHTML = `You have chose ${player} and the computer has chosen ${opponent} . <span class="result">${win}</span>`;
  } else if (player === "Sza" && opponent === "Sza") {
    resultText.innerHTML = `You and the computer have both chosen ${player}. <span class="result">${draw}</span>`;
  }
}

restartButton.addEventListener("click", restartGame);

function restartGame() {
  game.innerHTML = "";
  cardContainer.innerHTML = "";
  showCards();
}
