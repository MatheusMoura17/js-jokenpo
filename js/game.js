var selectedImage=false;

function PlayerHoverRock(){
	if(!selectedImage){
		var playerSelectedImage=document.getElementById("player-selected-image");
		playerSelectedImage.src="images/rock-hover.png";
	}
}

function PlayerHoverPaper(){
	if(!selectedImage){
		var playerSelectedImage=document.getElementById("player-selected-image");
		playerSelectedImage.src="images/paper-hover.png";
	}
}

function PlayerHoverCutter(){
	if(!selectedImage){
		var playerSelectedImage=document.getElementById("player-selected-image");
		playerSelectedImage.src="images/cutter-hover.png";
	}
}

function PlayerClickRock(){
	if(!selectedImage){
		selectedImage=true;
		var playerSelectedImage=document.getElementById("player-selected-image");
		playerSelectedImage.src="images/rock.png";
	}
}

function PlayerClickPaper(){
	if(!selectedImage){
		selectedImage=true;
		var playerSelectedImage=document.getElementById("player-selected-image");
		playerSelectedImage.src="images/paper.png";
	}
}

function PlayerClickCutter(){
	if(!selectedImage){
		selectedImage=true;
		var playerSelectedImage=document.getElementById("player-selected-image");
		playerSelectedImage.src="images/cutter.png";
	}
}

function DefineInvisible(){
	if(!selectedImage){
		var playerSelectedImage=document.getElementById("player-selected-image");
		playerSelectedImage.src="images/invisible.png";
	}
}