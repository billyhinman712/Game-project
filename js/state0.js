//starting screen
var monster = {};
monster.state0 = function(){};
monster.state0.prototype = {
	preload: preload,
	create: create,
	update: update
};

function preload(){};

function create(){
	game.scale.scaleMode = Phaser.ScaleManager.Show_All;
};

function update(){};