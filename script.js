let game = document.getElementById("game");
let playButton = document.getElementById("play-button");
let score = document.getElementById("score");
let cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
game.append(cardContainer);

playButton.addEventListener("click", showCards);

function showCards() {
  game.removeChild(playButton);

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
  let choices = ["roxy", "piper", "sza"];
  let opponent = choices[Math.floor(Math.random() * choices.length)];
  console.log(opponent);
  let player = this;
  gameResults(player, opponent);
}

function gameResults(player, opponent) {
  allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach((card) => {
    if (card.getAttribute("index") === opponent) {
      card.classList.add("opponent");
      card.classList.remove("card");
      card.remove();
    }
  });

  player.classList.add("player");
  player.classList.remove("card");
  console.log(opponent);

  //if statement if player = roxy and opponent = roxy and so forth
  //Add win or lose class to players card tos tyle
  //Display win or lose message
}

function restartGame() {
  console.log("restart game button click");
}
