function userVerification(){
	var userName = document.getElementById("userName").value;
	var password = document.getElementById("password").value;
	var userNameHasNumber = false;
	//checks userName for a number
	for(let i = 0; i<userName.length;i++){

		if(!isNaN(userName.charAt(i))){
			userNameHasNumber = true;
		}
	}
	//userNameHasNumber MUST be true to succeed else failed.
	if( userNameHasNumber === true){
		if(password=12345678){
			document.getElementById("userVerification").innerHTML = "Welcome " + userName + " have a great stay";
		}
	}else{
		alert("incorrect")
	}
}