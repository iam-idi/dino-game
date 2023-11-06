let dino = document.querySelector(".dino");
let attack = document.getElementsByClassName("attack");
let cactus = document.querySelector(".cactus");
let boulder = document.querySelector(".boulder");
let bird = document.querySelector(".bird");
let bladeBox = document.querySelector(".bladebox");
let blade = document.querySelector(".blade");
// let button = document.querySelector(".btn");
let score = document.querySelector(".score");
let playPause = document.querySelector(".playpause");
let gameOver = document.querySelector(".gameover");

// game start prompt
// function playerId() {
//   let playerInfo = window.prompt("Enter your name IDAN");
//   player.innerHTML = playerInfo;
// }

let count = 0;
function highScore() {
  count++;
  score.innerHTML = `SCORE: ${count}`;
}

let scoreInterval = setInterval(highScore, 200);

function gameSpeed() {
  for (let i = 0; i < attack.length; i++) {
    attack[i].style.animationDuration = attack[i].style.animationDuration - 1000;
  }
}

let speedInterval = setInterval(gameSpeed, 10);

function playFunc() {
  playPause.innerHTML = "PLAY";
  for (let i = 0; i < attack.length; i++) {
    attack[i].style.animationPlayState = "running";
  }
  setTimeout((playPause.innerHTML = ""), 1000);
}

function pauseFunc() {
  playPause.innerHTML = "PAUSED";
  for (let i = 0; i < attack.length; i++) {
    attack[i].style.animationPlayState = "PAUSED";
  }
}

function jump() {
  if (dino.classList != "animate") {
    dino.classList.add("animate");
  }
  setTimeout(function () {
    dino.classList.remove("animate");
  }, 500);
}

let DeadByCactus = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 80 && cactusLeft > 50 && dinoTop >= 310) {
    for (let i = 0; i < attack.length; i++) {
      attack[i].style.animation = "none";
      attack[i].style.display = "none";
    }
    clearInterval(scoreInterval);
    gameOver.innerHTML = "GAME OVER<br>Refresh page to start new game";
    alert("GAME OVER");
  }
}, 10);

let DeadByBoulder = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  let boulderLeft = parseInt(
    window.getComputedStyle(boulder).getPropertyValue("left")
  );

  if (boulderLeft < 80 && boulderLeft > 50 && dinoTop >= 325) {
    for (let i = 0; i < attack.length; i++) {
      attack[i].style.animation = "none";
      attack[i].style.display = "none";
    }
    clearInterval(scoreInterval);
    gameOver.innerHTML = "GAME OVER<br>Refresh page to start new game";
    alert("GAME OVER");
  }
}, 10);

let DeadByBladeBox = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  let bladeBoxLeft = parseInt(
    window.getComputedStyle(bladeBox).getPropertyValue("left")
  );

  if (bladeBoxLeft < 80 && bladeBoxLeft > 50 && dinoTop >= 330) {
    for (let i = 0; i < attack.length; i++) {
      attack[i].style.animation = "none";
      attack[i].style.display = "none";
    }
    clearInterval(scoreInterval);
    gameOver.innerHTML = "GAME OVER<br>Refresh page to start new game";
    alert("GAME OVER");
  }
}, 10);
