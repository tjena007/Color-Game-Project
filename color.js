var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var newcolor = document.querySelector("#newcolor");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colordisplay");

var h1 = document.querySelector("h1");
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
  //generate colors
  colors = generateRandomColors(6);
  //assign new picked color
  pickedColor = pickColor();
  //chnage header
  colorDisplay.textContent = pickedColor;
  //generate colors
  for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = colors[index];
  }
  //reset header background
  h1.style.background = "#232323";
});
