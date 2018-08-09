//game file
monster.state3 = function(){};
monster.state3.prototype = {
	preload: preload,
	create: create,
	update: update
};

function preload(){
	game.load.image("tileMap", "../img/newmap.tmx")
};

function create(){};

function update(){};