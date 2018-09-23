var keyPressH1 = document.getElementById("keyPressShown");

//On Press event.key is the button.
//KeyPressh1 is the element we want to to show the event.key in.
//the var keyPressH1 isn't necessary but done for personal preference.
document.body.onkeypress = function(){
	keyPressH1.innerHTML = event.key;
}