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
		RandomizeEnemy();
	}
}

function PlayerClickPaper(){
	if(!selectedImage){
		selectedImage=true;
		var playerSelectedImage=document.getElementById("player-selected-image");
		playerSelectedImage.src="images/paper.png";
		RandomizeEnemy();
	}
}

function PlayerClickCutter(){
	if(!selectedImage){
		selectedImage=true;
		var playerSelectedImage=document.getElementById("player-selected-image");
		playerSelectedImage.src="images/cutter.png";
		RandomizeEnemy();
	}
}

function DefineInvisible(){
	if(!selectedImage){
		var playerSelectedImage=document.getElementById("player-selected-image");
		playerSelectedImage.src="images/invisible.png";
	}
}

function RandomizeEnemy(){
	var enemySelectedImage=document.getElementById("enemy-selected-image");
	for(i=0;i<10;i++){
		setTimeout(function(){
				var random=Math.floor((Math.random() * 3) + 1);
				switch(random){
					case 1:{
						enemySelectedImage.src="images/rock-hover.png";
					}break;
					case 2:{
						enemySelectedImage.src="images/paper-hover.png";
					}break;
					case 3:{
						enemySelectedImage.src="images/cutter-hover.png";
					}break;
				}
		},i*250);
	}
}