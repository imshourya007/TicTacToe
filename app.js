let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-game-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true;
let count = 1;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    }
    else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    count++;
    if (count === 9) {
      checkDraw()
    }
    else {
      checkWinner();
    }
  });
});
const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const checkDraw = () => {
  msg.innerText = "It's a draw!";
  msgcontainer.classList.remove('hide');
  disableBox();
};
const showWinner = (winner) => {
  msg.innerText = 'Congratulations! ' + winner + ' won!';
  msgcontainer.classList.remove('hide');
  disableBox();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "posVal2" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        console.log("Winner", posVal1);
        showWinner(posVal1);
      }
    }
  }
};

const resetGame = () => {
  turn0 = true;
  enableBox();
  msgcontainer.classList.add('hide');
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);