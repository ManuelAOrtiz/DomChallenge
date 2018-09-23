var dontHover = document.getElementById("hover");
// console.log("hello");


//We want an element that alerts the user when he mouses over it.
//var dontHover is that element.
//onmouseover is the event we are looking for and does the function of alerting.
dontHover.onmouseover = function(){
	alert("Hey, I told you not to hover over me!");
}
