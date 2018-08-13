//1000 score ending
var text;
monster.state4 = function(){};
monster.state4.prototype = {
	preload: preload,
	create: create,
	update: update
};

function preload(){
	game.load.image("menu", "../img/menubutton.png");
	game.load.image("ending", "../img/end banner.png");
};

function create(){
	game.add.sprite(560, 100, "ending");

	text = "Congradulations you drove the monsters further into the mountain, never to be seen again."

	spellOutText(300, 320, 400, text, 30, 50, "#fff");

	var mainMenu = game.add.button(560, 416, "menu", function(){
		changeState(0);
	});
};

function update(){};

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