var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colordisplay");
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
    }
  });
}

function changeColor() {
  for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = pickedColor;
  }
}

function pickColor() {
  //Math.floor(Math.random() * 256);
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
}
