let gameSeq = [];
let userSeq = [];
let btnColors = ["red", "orange", "yellow", "blue"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (start == false) {
    console.log("game start");
    start = true;
  }
  levelUp();
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  //choose random btn
  let randomIndx = Math.floor(Math.random() * 4);
  let randomcolor = btnColors[randomIndx];
  let randomBtn = document.querySelector(`.${randomcolor}`);
  // console.log(randomIndx);
  // console.log(randomcolor);
  // console.log(randomBtn);
  gameSeq.push(randomcolor);
  console.log(gameSeq);
  gameFlash(randomBtn);
}

function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(function () {
    btn.classList.remove("gameFlash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  console.log(userSeq);

  checkAns(userSeq.length - 1);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    h2.innerHTML = `Game Over! Your level was <b>${level}<b><br>Please press any key to start again.`;
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(function () {
      body.style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function reset() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
