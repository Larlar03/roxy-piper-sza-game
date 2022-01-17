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
  player.classList.add("player");
  player.classList.remove("card");

  allCards = Array.from(document.querySelectorAll(".card"));
  console.log(allCards);
  allCards.forEach((card) => card.remove());

  gameResults(opponent);
}

function gameResults(opponent) {
  console.log(opponent);
  if (player.index === "roxy") {
  }
}

function restartGame() {
  console.log("restart game button click");
}
