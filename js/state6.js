// middle score ending
var text;
monster.state6 = function(){};
monster.state6.prototype = {
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

	text = "Congradulations you created a utopia of man and monsters.";

	this.spellOutText(600, 200, 400, text, 50, 50, "#000");

	var mainMenu = game.add.button(760, 350, "menu", function(){
		changestate(0);
	});
};

function update(){};