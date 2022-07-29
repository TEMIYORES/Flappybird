var game = document.getElementById("game");
var hole = document.getElementById("hole");
var result = document.getElementById("result");
var text = document.getElementById("text");
var score = 0;
var jumping = 0;
hole.addEventListener("animationiteration", randomHole);

function randomHole() {
  const rndInt = -(Math.floor(Math.random() * 350) + 150);
  hole.style.top = rndInt + "px";
  score++;
}

var fall = setInterval(function () {
  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  if (jumping == 0) {
    bird.style.top = birdTop + 2 + "px";
  }
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  var hTop = 500 + holeTop;
  if (
    birdTop > 450 ||
    (blockLeft < 30 &&
      blockLeft > -30 &&
      (birdTop < hTop || birdTop > hTop + 100))
  ) {
    result.style.display = "flex";
    text.innerHTML = `Your final score is : ${score}`;
    game.style.display = "none";
    score;
  }
}, 10);

window.addEventListener("keydown", hop);

function hop() {
  jumping = 1;
  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  if (birdTop > 6) {
    bird.style.top = birdTop - 40 + "px";
  }
  setTimeout(() => {
    jumping = 0;
  }, 100);
}
