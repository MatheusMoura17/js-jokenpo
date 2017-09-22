var selectedImage;

var playerSelectedImg;
var playerSelectedDivView;

var enemySelectedImg;
var enemySelectedDivView;

var playerHand;
var enemyHand;

window.onload=function(){
	electedImage=false;

	playerSelectedImg     = document.getElementById("player-selected-image");
	playerSelectedDivView = document.getElementById("player-view");

	enemySelectedImg     = document.getElementById("enemy-selected-image");
	enemySelectedDivView = document.getElementById("enemy-view");
};

function PlayerHover(imageName){
	if(!selectedImage){
		playerSelectedImg.src = "images/"+imageName+"-hover.png";
	}
}

function PlayerClick(imageName){
	if(!selectedImage){
		selectedImage=true;
		playerHand=imageName;
		playerSelectedImg.src="images/"+imageName+".png";
		playerSelectedDivView.style="animation: select linear 0.1s";
		RandomizeEnemy();
	}
}

function RemovePlayerImage(){
	if(!selectedImage){
		playerSelectedImg.src="images/invisible.png";
	}
}

function RemoveEnemyImage(){
	if(!selectedImage){
		enemySelectedImg.src="images/invisible.png";
	}
}

function RandomizeEnemy(){
	for(i=0;i<10;i++){
		setTimeout(function(last){
				var hand=GetRandomHand();
				if(last){
					enemyHand=hand;
					enemySelectedImg.src="images/"+hand+".png";
					enemySelectedDivView.style="animation: select linear 0.1s";
					CheckMatch();
				}
				else
					enemySelectedImg.src="images/"+hand+"-hover.png";
		},i*100,i==9);
	}
}

function CheckMatch(){
	if(playerHand==enemyHand){
		alert("empate");
	}else{
		if((playerHand=="rock" & enemyHand=="cutter") || (playerHand=="cutter" & enemyHand=="paper") || (playerHand=="paper" & enemyHand=="rock"))
			alert("você ganhou");
		else{
			alert("você perdeu");
		}
	}
	Reset();
}

function Reset(){
	selectedImage=false;
	RemovePlayerImage();
	RemoveEnemyImage();
	playerHand="";
	enemyHand="";
}

function GetRandomHand(){
	var hand;
	var random=Math.floor((Math.random() * 3) + 1);
	switch(random){
		case 1:	hand="rock";  break;
		case 2: hand="paper"; break;
		case 3: hand="cutter";break;
	}
	return hand;
}