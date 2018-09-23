var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var buttonOneText = document.getElementById("buttonOneText");
var buttonTwoText = document.getElementById("buttonTwoText");


function buttonOneWordChanger(){
	buttonTwoText.style.color = "white";
	buttonOneText.style.color = "red"
}
function buttonTwoWordChanger(){
	buttonOneText.style.color = "white";
	buttonTwoText.style.color = "blue"
}