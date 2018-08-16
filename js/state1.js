//instructions
var text;

monster.state1 = function(){};
monster.state1.prototype = {
	preload: preload,
	create: create,
	update: update,
};

function preload(){
	game.load.image("menu", "../img/menubutton.png");
	game.load.image("start", "../img/startbutton.png");
};

function create(){
	game.stage.backgroundColor = "#fdd";

	text = "Instructions: \n Arrowkeys to move \n Avoid the monsters \n Collect the book to kill monsters \n Return to the start with book to win the game";
	
	spellOutText(500, 50, 400, text, 35, 50, "#000");

	var start = game.add.button(580, 350, "start", function(){
		changeState(3);
	});
	var mainMenu = game.add.button(760, 350, "menu", function(){
		changeState(0);
	});

};

function spellOutText(x, y, width, text, fontSize, speed, fill){
	var sentence = game.add.text(x, y, "", {fontSize: fontSize + "px", fill: fill});
	var currentLine = game.add.text(10, 10, "", {fontSize: fontSize + "px", fill: fill});
	currentLine.alpha = 0;
	var loop = game.time.events.loop(speed, addCharacter);

	var index = 0;

	function addCharacter(){
		sentence.text += text[index];
		currentLine.text += text[index];

		if(index >= text.length - 1){
			game.time.events.remove(loop);
		}
		index ++;
	}
};