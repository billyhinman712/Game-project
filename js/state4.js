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
	game.add.tileSprite(600, 100, "ending");

	text = "Congradulations the town drove the monsters further into the mountain, never to be seen again."

	this.spellOutText(600, 200, 400, text, 50, 50, "#000");

	var mainMenu = game.add.button(760, 350, "menu", function(){
		changestate(0);
	});
};

function update(){};