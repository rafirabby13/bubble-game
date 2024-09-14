function randomNumber() {
  let bubbbles = "";
  for (let i = 0; i < 100; i++) {
    let rn = Math.floor(Math.random() * 10);
    bubbbles += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".bubbles").innerHTML = bubbbles;
}

randomNumber();
let hit = document.getElementById("hit");
let over = document.getElementById("over");
let sc = document.getElementById("sc");
let timer = document.getElementById("timer");
let score = document.getElementById("score");
over.style.display = "none";
let randNum = "";
function hitNum() {
  randNum = Math.floor(Math.random() * 10);
  hit.innerHTML = randNum;
}
hitNum();

let timess = 20;
timer.innerHTML = timess;
function timerSet() {
  let tme = setInterval(() => {
    if (timess > 0) {
      console.log(timess);
      timess--;
      timer.innerHTML = timess;
    } else {
      clearInterval(tme);
      document.querySelector(".bubbles").textContent = "";
      over.style.display = "block";
      sc.innerHTML = score.innerHTML;
    }
  }, 1000);
}
timerSet();

score.innerHTML = 0;
function scoress() {
  let number = Number(score.innerHTML);
  number += 10;
  score.innerHTML = number;
}

document.querySelector(".bubbles").addEventListener("click", (val) => {
  let clickedValue = val.target.innerHTML;
  if (Number(clickedValue) === randNum) {
    randomNumber();
    scoress();
    hitNum();
  }
});
