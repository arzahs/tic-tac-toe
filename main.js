window.addEventListener("load", function(){
	var startButton = document.querySelector(".startGame");
	var field = document.querySelector(".field");
	var cells = document.querySelectorAll(".row>div");

	startButton.addEventListener("click", function startGame(){
		for(var i = 0; i < cells.length; i++){
			cells[i].classList.remove("o");
			cells[i].classList.remove("x");
		}
	});
});