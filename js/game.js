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
		var view=document.getElementById("player-view");
		playerSelectedImage.src="images/rock.png";
		view.style="animation: select linear 0.1s";
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
	var selected;
	for(i=0;i<10;i++){
		setTimeout(function(last){
				var random=Math.floor((Math.random() * 3) + 1);
				switch(random){
					case 1:	selected="rock";  break;
					case 2: selected="paper"; break;
					case 3: selected="cutter";break;
				}
				if(last){
					enemySelectedImage.src="images/"+selected+".png";
					var view=document.getElementById("enemy-view");
					view.style="animation: select linear 0.1s";
				}
				else
					enemySelectedImage.src="images/"+selected+"-hover.png";
		},i*100,i==9);
	}
}