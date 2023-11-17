"use strict";

function fillWhite() {
  const allCells = document.querySelectorAll(".gridItem");
  allCells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}

function drawZero() {
  fillWhite();
  document.querySelector("#a2").style.backgroundColor = "black";
  document.querySelector("#a3").style.backgroundColor = "black";
  document.querySelector("#a5").style.backgroundColor = "black";
  document.querySelector("#a6").style.backgroundColor = "black";

  document.querySelector("#b1").style.backgroundColor = "black";
  document.querySelector("#b7").style.backgroundColor = "black";

  document.querySelector("#c1").style.backgroundColor = "black";
  document.querySelector("#c7").style.backgroundColor = "black";

  document.querySelector("#d2").style.backgroundColor = "black";
  document.querySelector("#d3").style.backgroundColor = "black";
  document.querySelector("#d5").style.backgroundColor = "black";
  document.querySelector("#d6").style.backgroundColor = "black";
}

// Function to draw the number "1" in the grid columns
function drawOne() {
  fillWhite();
  document.querySelector("#d2").style.backgroundColor = "black";
  document.querySelector("#d3").style.backgroundColor = "black";
  document.querySelector("#d4").style.backgroundColor = "black";
  document.querySelector("#d5").style.backgroundColor = "black";
  document.querySelector("#d6").style.backgroundColor = "black";
  document.querySelector("#d7").style.backgroundColor = "black";
}

function drawThree() {
  fillWhite();
  // Set specific cells to black for number "3"
  document.querySelector("#b2").style.backgroundColor = "black";
  document.querySelector("#b5").style.backgroundColor = "black";
  document.querySelector("#b8").style.backgroundColor = "black";

  document.querySelector("#c2").style.backgroundColor = "black";
  document.querySelector("#c5").style.backgroundColor = "black";
  document.querySelector("#c8").style.backgroundColor = "black";

  document.querySelector("#d3").style.backgroundColor = "black";
  document.querySelector("#d4").style.backgroundColor = "black";
  document.querySelector("#d6").style.backgroundColor = "black";
  document.querySelector("#d7").style.backgroundColor = "black";
}

function drawFour() {
  fillWhite();
  // Set specific cells to black for number "4"
  document.querySelector("#a3").style.backgroundColor = "black";
  document.querySelector("#a4").style.backgroundColor = "black";

  document.querySelector("#b5").style.backgroundColor = "black";

  document.querySelector("#c5").style.backgroundColor = "black";

  document.querySelector("#d3").style.backgroundColor = "black";
  document.querySelector("#d4").style.backgroundColor = "black";
  document.querySelector("#d6").style.backgroundColor = "black";
  document.querySelector("#d7").style.backgroundColor = "black";
}

function drawFive() {
  fillWhite();
  // Set specific cells to black for number "5"
  document.querySelector("#a3").style.backgroundColor = "black";
  document.querySelector("#a4").style.backgroundColor = "black";

  document.querySelector("#b2").style.backgroundColor = "black";
  document.querySelector("#b5").style.backgroundColor = "black";
  document.querySelector("#b8").style.backgroundColor = "black";

  document.querySelector("#c2").style.backgroundColor = "black";
  document.querySelector("#c5").style.backgroundColor = "black";
  document.querySelector("#c8").style.backgroundColor = "black";

  document.querySelector("#d6").style.backgroundColor = "black";
  document.querySelector("#d7").style.backgroundColor = "black";
}

function drawSix() {
  fillWhite();
  // Set specific cells to black for number "6"
  document.querySelector("#a3").style.backgroundColor = "black";
  document.querySelector("#a4").style.backgroundColor = "black";
  document.querySelector("#a6").style.backgroundColor = "black";
  document.querySelector("#a7").style.backgroundColor = "black";

  document.querySelector("#b2").style.backgroundColor = "black";
  document.querySelector("#b5").style.backgroundColor = "black";
  document.querySelector("#b8").style.backgroundColor = "black";

  document.querySelector("#c2").style.backgroundColor = "black";
  document.querySelector("#c5").style.backgroundColor = "black";
  document.querySelector("#c8").style.backgroundColor = "black";

  document.querySelector("#d6").style.backgroundColor = "black";
  document.querySelector("#d7").style.backgroundColor = "black";
}

function drawSeven() {
  fillWhite();
  // Set specific cells to black for number "7"
  document.querySelector("#b2").style.backgroundColor = "black";
  document.querySelector("#c2").style.backgroundColor = "black";

  document.querySelector("#d3").style.backgroundColor = "black";
  document.querySelector("#d4").style.backgroundColor = "black";
  document.querySelector("#d6").style.backgroundColor = "black";
  document.querySelector("#d7").style.backgroundColor = "black";
}

function drawEight() {
  fillWhite();
  // Set specific cells to black for number "8"
  document.querySelector("#a3").style.backgroundColor = "black";
  document.querySelector("#a4").style.backgroundColor = "black";
  document.querySelector("#a6").style.backgroundColor = "black";
  document.querySelector("#a7").style.backgroundColor = "black";

  document.querySelector("#b2").style.backgroundColor = "black";
  document.querySelector("#b5").style.backgroundColor = "black";
  document.querySelector("#b8").style.backgroundColor = "black";

  document.querySelector("#c2").style.backgroundColor = "black";
  document.querySelector("#c5").style.backgroundColor = "black";
  document.querySelector("#c8").style.backgroundColor = "black";

  document.querySelector("#d3").style.backgroundColor = "black";
  document.querySelector("#d4").style.backgroundColor = "black";
  document.querySelector("#d6").style.backgroundColor = "black";
  document.querySelector("#d7").style.backgroundColor = "black";
}

function drawNine() {
  fillWhite();
  // Set specific cells to black for number "9"
  document.querySelector("#a3").style.backgroundColor = "black";
  document.querySelector("#a4").style.backgroundColor = "black";

  document.querySelector("#b2").style.backgroundColor = "black";
  document.querySelector("#b5").style.backgroundColor = "black";

  document.querySelector("#c2").style.backgroundColor = "black";
  document.querySelector("#c5").style.backgroundColor = "black";

  document.querySelector("#d3").style.backgroundColor = "black";
  document.querySelector("#d4").style.backgroundColor = "black";
  document.querySelector("#d6").style.backgroundColor = "black";
  document.querySelector("#d7").style.backgroundColor = "black";
}

function ChecknDrawNumber(number) {
  if (number === 0) {
    drawZero();
  } else if (number === 1) {
    drawOne();
  } else if (number === 2) {
    drawTwo();
  } else if (number === 3) {
    drawThree();
  } else if (number === 4) {
    drawFour();
  } else if (number === 5) {
    drawFive();
  } else if (number === 6) {
    drawSix();
  } else if (number === 7) {
    drawSeven();
  } else if (number === 8) {
    drawEight();
  } else if (number === 9) {
    drawNine();
  }
}

/* function drawNumber(number) {
  if (number === 0);
  drawZero();
} else if (number === 1) {
    drawOne();
}  else if (number === 2); {
    drawTwo();
} */

/*         a1 = document.querySelector("#a1");
        a1.style.backgroundColor = "white";

        a2 = document.querySelector("#a1");
        a2.style.backgroundColor = "white";

        a3 = document.querySelector("#a1");
        a3.style.backgroundColor = "black";

        a4 = document.querySelector("#a1");
        a4.style.backgroundColor = "black";

        a5 = document.querySelector("#a1");
        a5.style.backgroundColor = "white";

        a6 = document.querySelector("#a1");
        a6.style.backgroundColor = "black";

        a7 = document.querySelector("#a1");
        a7.style.backgroundColor = "black";


        b1 = document.querySelector("#b1");
        b1.style.backgroundColor = "black"; */
