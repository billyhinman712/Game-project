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
	game.load.image("banner", "../img/start_banner.png");
	game.load.image("start", "../img/startbutton.png");
	game.load.image("instructions", "../img/instructionbutton.png")
};

function create(){
	var background = game.add.tileSprite(0, 0, game.width, game.height, "background");
	game.add.sprite(600, 100, "banner");

	var start = game.add.button(580, 350, "start", function(){
		changeState(3);
	});
	var instructions = game.add.button(760, 350, "instructions", function(){
		changeState(1);
	});
};

function update(){

};

function changeState(num){
	game.state.start("state" + num)
}