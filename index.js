const dodger = document.getElementById('dodger');
const gameField = document.getElementById('game');

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const right = parseInt(rightNumbers, 10);
  const dodgerWidth = 40; // Assuming the dodger is 40px wide
  const gameWidth = gameField.clientWidth;

  if (left + dodgerWidth <= gameWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
