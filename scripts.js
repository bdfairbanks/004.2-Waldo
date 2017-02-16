window.addEventListener("load", function(){
	function start(){
		var button = document.getElementById("button");
		button.addEventListener("click", prime);
	}	

	function prime(){
		var pic = document.getElementById("pic");
		pic.addEventListener("click", coordinates);
	}

	function coordinates(event){
		var x = event.clientX;
		var y = event.clientY;
		compose(x, y)
		debugger
	}
	function compose(x, y){
		var querystring = ""
		querystring += x
		querystring += "&"
		querystring += y
		send(querystring)
	}
	function send(input){
		var xhr = new XMLHttpRequest();
		xhr.open ("GET", "http://localhost:4567/compare?" + input);
		xhr.send();	
		// recieve()
	}
	// function recieve(){
	// 	var xhr2 = new XMLHttpRequest();
	// 	xhr2.open ("GET", "http://localhost:4567/compare");
	// var conditions = JSON.parse(xhr2.responseText);
	// console.log(conditions["reply"]);
	// 	xhr.send();
	// 	debugger
	// }
		// if (x== 772 && y == 89){
		// 	modal();
		// 	var mBody = "You Win!!!";
		// 	document.getElementById("modal__body").innerHTML = mBody;
		// }
		// else{
		// 	modal();
		// 	var mBody = "You Lose!!! Good day Sir!!!";
		// 	document.getElementById("modal__body").innerHTML = mBody;
		// }
// modal functions.  open and close.
	function modal(){
		var modal = document.getElementById("modal");
		modal.style.display= "block";
	}

	function box(){
		var profile = document.getElementById("modal__close");
		profile.addEventListener("click", close);
	}
	function close(){
		var modal = document.getElementById("modal");
		modal.style.display = "none";
	}
	start();
	box();
});