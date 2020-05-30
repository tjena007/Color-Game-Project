var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var newcolor = document.querySelector("#newcolor");
var colorDisplay = document.querySelector("#colordisplay");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var h1 = document.querySelector("h1");
var numberOfSquares = 6;

colors = generateRandomColors(numberOfSquares);
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

var message = document.querySelector("#message");

for (let index = 0; index < squares.length; index++) {
  //add initial color to the squares
  squares[index].style.backgroundColor = colors[index];

  //check the color with picked color
  squares[index].addEventListener("click", function () {
    var clickedcolor = this.style.backgroundColor;
    if (!(clickedcolor === pickedColor)) {
      this.style.background = "#232323";
      message.textContent = "Try Again";
    }
    //alert(this.style.backgroundColor);
    else {
      message.textContent = "Correct";
      changeColor();
      newcolor.textContent = "Play Again?";
    }
  });
}

function changeColor() {
  for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = pickedColor;
  }
  h1.style.backgroundColor = pickedColor;
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];

  for (let index = 0; index < num; index++) {
    arr.push(randomColors());
  }
  return arr;
}

function randomColors() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var a = "rgb(" + red + ", " + green + ", " + blue + ")";
  return a;
}

newcolor.addEventListener("click", function () {
  newcolor.textContent = "New Colours";
  message.textContent = "";
  //generate colors
  colors = generateRandomColors(numberOfSquares);
  //assign new picked color
  pickedColor = pickColor();
  //chnage header
  colorDisplay.textContent = pickedColor;
  //generate colors
  for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = colors[index];
  }
  //reset header background
  h1.style.background = "steelblue";
});

easy.addEventListener("click", function () {
  hard.classList.remove("selected");
  easy.classList.add("selected");
  newcolor.textContent = "New Colours";
  //generate colors
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  //assign new picked color
  pickedColor = pickColor();
  //chnage header
  colorDisplay.textContent = pickedColor;
  //generate colors
  //   for (let index = 0; index < 2; index++) {
  //     squares[index].style.backgroundColor = colors[index];
  //   }
  //   for (let index = 3; index < squares.length; index++) {
  //     squares[index].style.display = "none";
  //   }
  //refactored loop
  for (let index = 0; index < squares.length; index++) {
    if (colors[index]) {
      squares[index].style.backgroundColor = colors[index];
    } else {
      squares[index].style.display = "none";
    }
  }

  //reset header background
  h1.style.background = "steelblue";
});

hard.addEventListener("click", function () {
  hard.classList.add("selected");
  easy.classList.remove("selected");
  newcolor.textContent = "New Colours";
  //generate colors
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  //assign new picked color
  pickedColor = pickColor();
  //chnage header
  colorDisplay.textContent = pickedColor;
  //refactored loop
  for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = colors[index];

    squares[index].style.display = "block";
  }
  //reset header background
  h1.style.background = "steelblue";
});
