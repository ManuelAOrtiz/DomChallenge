var buttonOneText = document.getElementById("buttonOneText");
var buttonTwoText = document.getElementById("buttonTwoText");

//both font sizes are 0. So to turn up the font size
//and to give personality each button text has a color.


//this one is for the Red button. Gives size and color to the text.
function buttonOneWordChanger(){
	buttonTwoText.style.fontSize = 0;
	buttonOneText.style.fontSize = "3em";
	buttonOneText.style.color = "red"
}
//this one is for the Blue button. Gives size and color to the text.
function buttonTwoWordChanger(){
	buttonOneText.style.fontSize = 0;
	buttonTwoText.style.fontSize = "3em";
	buttonTwoText.style.color = "blue"
}