window.addEventListener("load", function(){
	var startButton = document.querySelector(".startGame");
	var field = document.querySelector(".field");
	var cells = document.querySelectorAll(".cell");
	var message = document.querySelector(".windowMessage");
	var nextMove = "x"
	startButton.addEventListener("click", function startGame(){
		for(var i = 0; i < cells.length; i++){
			cells[i].classList.remove("o");
			cells[i].classList.remove("x");
		}
		nextMove = "x"
		message.innerHTML = "";
	});


	field.addEventListener("click", function handleCellClick(e){
		if(!e.target.classList.contains('cell')){
			return ;
		}

		if(getWinner()){
			return;
		}
		e.target.classList.add(nextMove);
		if(nextMove === "x"){
			nextMove = "o";
		}
		else{
			nextMove = "x";
		}
		var winner = getWinner();
		if(winner){
			if (winner==="x"){
				message.innerHTML = "Win X";
			}else{
				message.innerHTML = "Win O";
			}

		}
	});
}); 