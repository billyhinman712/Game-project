//starting screen
var monster = {};
monster.state0 = function(){};
monster.state0.prototype = {
	preload: preload,
	create: create,
	update: update
};

function preload(){
	game.load.image("background", "../img/cave.jpg");
};

function create(){
	var background = game.add.tileSprite(0, 0, game.width, game.height, "background");
	game.scale.scaleMode = Phaser.ScaleManager.Show_All;
};

function update(){};