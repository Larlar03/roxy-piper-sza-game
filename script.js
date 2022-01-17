let game = document.getElementById("game");
let score = document.getElementById("score");
let restartButton = document.getElementById("restart-button");
let cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
game.append(cardContainer);

showCards();

function showCards() {
  let roxy = document.createElement("div");
  let piper = document.createElement("div");
  let sza = document.createElement("div");
  roxy.classList.add("roxy", "card");
  piper.classList.add("piper", "card");
  sza.classList.add("sza", "card");
  roxy.setAttribute("index", "roxy");
  piper.setAttribute("index", "piper");
  sza.setAttribute("index", "sza");

  roxy.innerHTML = `<img src='roxy.jpg' alt='Roxy Mitchell' />`;
  piper.innerHTML = `<img src='piper.jpg' alt='Piper Halliwell' />`;
  sza.innerHTML = `<img src='sza.jpeg' alt='Singer SZA' />`;

  roxy.addEventListener("click", gamePlay);

  cardContainer.appendChild(roxy);
  cardContainer.appendChild(piper);
  cardContainer.appendChild(sza);

  let restartButton = document.createElement("button");
  restartButton.classList.add("restart-button");
  restartButton.innerHTML = "Restart";
  game.append(restartButton);
  restartButton.addEventListener("click", restartGame);
}

function gamePlay() {
  allCards = Array.from(document.querySelectorAll(".card"));

  allCards.forEach((card) => card.removeEventListener("click", gamePlay));

  let choices = ["roxy", "piper", "sza"];
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
  console.log(player + " " + opponent);

  if (player === "roxy" && opponent === "piper") {
    console.log(
      `You have chosen ${player} and the computer has chosen ${opponent} . The computer wins.`
    );
  } else if (player === "roxy" && opponent === "sza") {
    console.log(
      `You have chosen ${player}  and the computer has chosen ${opponent} . You win.`
    );
  } else if (player === "roxy" && opponent === "Roxy") {
    console.log(
      `You and the computer have both chosen ${player}. It's a draw.`
    );
  } else if (player === "piper" && opponent === "roxy") {
    console.log(
      `You have chose ${player} and the computer has chosen ${opponent} . You win`
    );
  } else if (player === "piper" && opponent === "sza") {
    console.log(
      `You have chose ${player} and the computer has chosen ${opponent} . The computer wins`
    );
  } else if (player === "piper" && opponent === "piper") {
    console.log(
      `You and the computer have both chosen ${player}. It's a draw.`
    );
  } else if (player === "sza" && opponent === "roxy") {
    console.log(
      `You have chose ${player} and the computer has chosen ${opponent} . The computer wins.`
    );
  } else if (player === "sza" && opponent === "piper") {
    console.log(
      `You have chose ${player} and the computer has chosen ${opponent} . You win.`
    );
  } else if (player === "sza" && opponent === "sza") {
    console.log(
      `You and the computer have both chosen ${player}. It's a draw.`
    );
  }
}

function restartGame() {
  cardContainer.innerHTML = "";
  showCards();
}
