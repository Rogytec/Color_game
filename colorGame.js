var numSquares = 9;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var gameModes = document.querySelectorAll(".modes");
for (var i = 0; i < gameModes.length; i++){
	gameModes[i].addEventListener("click", function(){
		gameModes[0].classList.remove("selected");
		gameModes[1].classList.remove("selected");
		gameModes[2].classList.remove("selected");
		gameModes[3].classList.remove("selected")
		this.classList.add("selected");
		// if (this.textContent === "Very Easy"){
		// 	numSquares = 2;
		// }else if (this.textContent === "Normal"){
		// 	numSquares = 3;
		// }else if (this.textContent === "Hard"){
		// 	numSquares = 6;
		// }else {
		// 	numSquares = 9;
		// }
		switch (this.textContent){
			case "Very Easy":
			numSquares = 2
			break;
			case "Normal":
			numSquares = 3
			break;
			case "Hard":
			numSquares = 6
			break;
			case "Very Hard":
			numSquares = 9
			break;
			default:
			numSquares = 6;
		}

		reset();
	});
}
function reset(){
	// generate new colors
colors = generateRandomColor(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	// change colors of squares
	for (i = 0; i < squares.length; i++){
			squares[i].style.display = "block";
		if (colors[i]){
			squares[i].style.background = colors[i]; 
		}
		else {
			squares[i].style.display = "none";
		}
	
	}
	h1.style.background = "steelBlue";
}
colorDisplay.textContent = pickedColor;
for (i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;

		// compare pickedColor 
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent ="Try Again";
		}
	});
}
// my color changing function

// function changeColors(){
// 	for (var i = 0; i < squares.length; i++){
// 		squares[i].style.background = pickedColor;
// 	}
// }
function changeColors(color){
	for (var i = 0; i < squares.length; i++ ){
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}
// [
// "rgb(225, 0, 0)",
// "rgb(225, 225, 0)",
// "rgb(0, 225, 0)",
// "rgb(0, 225, 225)",
// "rgb(0, 0, 225)",
// "rgb(225, 0, 225)"
// ];

function generateRandomColor(num){
	var arr = [];
	for (var i = 0; i< num; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()* 256)
	var g = Math.floor(Math.random()* 256)
	var b = Math.floor(Math.random()* 256)
	return "rgb(" + r + ","+ " "+ g +","+ " "+ b+")"
}

//Event listener setup
// setting up reset button
// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected")
// 	numSquares = 3 ;
// 	colors = generateRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 		if (colors[i]){
// 			squares[i].style.background = colors[i];
// 		}else {
// 			squares[i].style.display = "none"
// 		}
// 	}
// });
// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColor(numSquares);
// 	pickedColor =pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block"
// 	}
// });
resetButton.addEventListener("click", function(){
	// generate new colors
colors = generateRandomColor(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	// change colors of squares
	for (i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	}
	h1.style.background = "steelBlue";
});
// REFACToRING CODES


