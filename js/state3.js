//game file
var monsters;
monster.state3 = function(){};
monster.state3.prototype = {
	preload: preload,
	create: create,
	update: update
};

function preload(){
	//initalizing images
	game.load.tilemap("field", "./img/field.json", null, Phaser.Tilemap.TILED_JSON);
	game.load.image("monsters-within", "./img/monsters-within.png");
	game.load.spritesheet("player", "./img/hero.png", 32, 32);
	game.load.image("enemy", "./img/dragon.png");
	game.load.image("book", "./img/book.png");
	game.load.image("menu", "./img/menubutton.png");

	//initalize arcade physics
	game.physics.startSystem(Phaser.Physics.ARCADE);
};

function create(){
	//create map
	var tilemap = game.add.tilemap("field");
	tilemap.addTilesetImage("monsters-within", "monsters-within");
	var layer = tilemap.createLayer("Tile Layer 1");
	layer.resizeWorld();

	// tilemap.setCollisionBetween(1, 4, true, "layer");
	// tilemap.setCollisionBetween(6, 7, true, "layer");
	// tilemap.setCollisionBetween(9, 9, true, "layer");
	// tilemap.setCollisionBetween(13, 16, true, "layer");
	// tilemap.setCollisionBetween(18, 36, true, "layer");

	//create player
	player = game.add.sprite(0, 160, "player");
	player.animations.add("walk", [0, 1, 2, 3]);
	player.animations.play("walk", 12, true);
	game.physics.arcade.enable(player);
	player.body.collideWorldBounds = true;
	player.score = 0;

	//add keyboard controls
	cursors = game.input.keyboard.createCursorKeys(); //arrow keys

	//create book
	book = game.add.sprite(1088, 224, "book");
	game.physics.arcade.enable(book);
	book.alive = true;

	//create enemies
	monsters = game.add.group();
	monsters.enableBody = true;
	monsters.physicsBodyType = Phaser.Physics.ARCADE;

	a1 = monsters.create(384, 32, "enemy");
	a2 = monsters.create(384, 256, "enemy");
	a3 = monsters.create(256, 384, "enemy");
	a4 = monsters.create(512, 480, "enemy");
	a5 = monsters.create(608, 96, "enemy");
	a6 = monsters.create(800, 224, "enemy");
	a7 = monsters.create(1248, 448, "enemy");
	a8 = monsters.create(896, 480, "enemy");
	a9 = monsters.create(736, 352, "enemy");
	a10 = monsters.create(864, 224, "enemy");

	game.add.tween(a2).to({y: 352}, 2000, "Linear", true, 0, false, true).loop(true);
	game.add.tween(a3).to({y: 256}, 2000, "Linear", true, 0, false, true).loop(true);
	game.add.tween(a4).to({y: 96}, 4000, "Linear", true, 0, false, true).loop(true);
	game.add.tween(a5).to({y: 416}, 3500, "Linear", true, 0, false, true).loop(true);
	game.add.tween(a7).to({y: 64}, 4000, "Linear", true, 0, false, true).loop(true);
	game.add.tween(a8).to({y: 352}, 1000, "Linear", true, 0, false, true).loop(true);
	game.add.tween(a9).to({y: 480}, 1000, "Linear", true, 0, false, true).loop(true);

	//score line
	scoreText = game.add.text(0, game.height - 64, "Score:" + player.score.toString(), {fill: "#F33"});
};

function update(){
	game.physics.arcade.collide(player, "layer")
	player.body.velocity.set(0);

	if(cursors.left.isDown){
		player.body.velocity.x = -96;
		player.scale.setTo(-1,1);
	}
	else if(cursors.right.isDown){
		player.body.velocity.x =96;
		player.scale.setTo(1,1);
	}

	if(cursors.up.isDown){
		player.body.velocity.y = -96;
	}
	else if(cursors.down.isDown){
		player.body.velocity.y = 96;
	}

	//define collisions
	game.physics.arcade.overlap(player, monsters, kill);
	game.physics.arcade.overlap(player, book, killbook);

	if(book.alive === false && Math.round(player.x) === 32 && Math.round(player.y) === 160){
		if(player.score === 1000){
			game.state.start("state5");
		}
		else if(player.score === 0){
			game.state.start("state6");
		}
		else if(player.score !== 0 && player.score !== 1000){
			game.state.start("state4");
		}
	}
};

function killbook(){
	book.kill();
	book.alive = false;
}

function kill(player, monster){
	if(book.alive === false){
		monster.kill();
		player.score += 100;
		scoreText.text = "score:" + player.score.toString();
	}
	else{
		player.kill();
		gameover();
	}
}

function gameover(){
	game.add.text(688, 288, "GAME OVER");
	var mainMenu = game.add.button(760, 350, "menu", function(){
		changeState(0);
	});

}