"use strict";

async function getData() {
  const url = "http://worldtimeapi.org/api/ip";

  try {
    const response = await fetch(url);
    const result = await response.json();

    const dateTime = new Date(result.datetime);
    const timeString = dateTime.toLocaleTimeString("en-US", { hour12: false }); // Extracts time in HH:MM:SS format

    // Splitting hours and minutes into separate digits
    const [hour, minute] = timeString.split(":").map(Number);

    // Manipulating hour and minute digits to get individual digits
    const timeArray = [
    Math.floor(hour / 10), // First digit of hour
    hour % 10, // Second digit of hour
    Math.floor(minute / 10), // First digit of minute
    minute % 10, // Second digit of minute
    ];
    console.log(timeArray);

// for each number in timearray draw the number with position +1
    for (let number of timeArray) {
      let pos = timeArray.indexOf(number) + 1;
      ChecknDrawNumber(number, pos);
      console.log(number);
      console.log(pos)
      }
                      
    
    let thedivEL = document.querySelector("#thediv");
    thedivEL.textContent = "The time is : " + timeString;

    console.log(result);
    console.log(result.datetime);


  } catch (error) {
    console.error(error);
  }
}

getData();





// The rest of the code here is my project to make a digital clock by changing backgrounds in a grid






function fillWhite() {
  const allCells = document.querySelectorAll(".gridItem");
  allCells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}



function drawZero(x) {
  fillWhite();
  document.querySelector(`#digit${x}a2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a6`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b7`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c7`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d6`).style.backgroundColor = "black";
  
  
}

// Function to draw the number "1" in the grid columns
function drawOne(x) {
  fillWhite();
  document.querySelector(`#digit${x}d1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d6`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d7`).style.backgroundColor = "black";
  
}

function drawTwo(x) {
  fillWhite();
  document.querySelector(`#digit${x}a5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a6`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b7`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c7`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d3`).style.backgroundColor = "black";
  
  
}


function drawThree(x) {
  fillWhite();
  // Set specific cells to black for number "3"
  document.querySelector(`#digit${x}b1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b7`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c7`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d6`).style.backgroundColor = "black";
  
  
}

function drawFour(x) {
  fillWhite();
  // Set specific cells to black for number "4"
  document.querySelector(`#digit${x}a2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d6`).style.backgroundColor = "black";
  
  
}
function drawFive(x) {
  fillWhite();
  // Set specific cells to black for number "5"
  document.querySelector(`#digit${x}a2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b7`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c7`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d6`).style.backgroundColor = "black";
  
  
}

function drawSix(x) {
  fillWhite();
  // Set specific cells to black for number "6"
  document.querySelector(`#digit${x}a2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a6`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b7`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c7`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d6`).style.backgroundColor = "black";
  
  
}

function drawSeven(x) {
  fillWhite();
  // Set specific cells to black for number "7"
  document.querySelector(`#digit${x}b1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d6`).style.backgroundColor = "black";
  
  
}

function drawEight(x) {
  fillWhite();
  // Set specific cells to black for number "8"
  document.querySelector(`#digit${x}a2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a6`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b7`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c7`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d6`).style.backgroundColor = "black";
  
  
}

function drawNine(x) {
  fillWhite();
  // Set specific cells to black for number "9"
  document.querySelector(`#digit${x}a2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}a3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}b4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c1`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}c4`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d2`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d3`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d5`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d6`).style.backgroundColor = "black";
  document.querySelector(`#digit${x}d7`).style.backgroundColor = "black";
  
  
}

function ChecknDrawNumber(number, divpos) {
  if (number === 0) {
    drawZero(divpos);
  } else if (number === 1) {
    drawOne(divpos);
  } else if (number === 2) {
    drawTwo(divpos);
  } else if (number === 3) {
    drawThree(divpos);
  } else if (number === 4) {
    drawFour(divpos);
  } else if (number === 5) {
    drawFive(divpos);
  } else if (number === 6) {
    drawSix(divpos);
  } else if (number === 7) {
    drawSeven(divpos);
  } else if (number === 8) {
    drawEight(divpos);
  } else if (number === 9) {
    drawNine(divpos);
  }
}
