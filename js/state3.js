//game file
monster.state3 = function(){};
monster.state3.prototype = {
	preload: preload,
	create: create,
	update: update
};

function preload(){
	//imitalizing images
	game.load.tilemap("field", "../img/monster.json", null, Phaser.Tilemap.TILED_JASON);
	game.load.image("tiles", "../img/monsters-within.png")
	game.load.image("player", "../img/hero.png");
	game.load.image("enemy", "../img/dragon.png");
	game.load.image("book", "../img/book.png");

	//initalize arcade physics
	game.physics.startSystem(Phaser.Physics.ARCADE);
};

function create(){
	//create map
	var tilemap = game.add.tilemap("field");
	tilemap.addTilesetImage("tiles");

	//create player
	player = game.add.spriteSheet(0, 160, "player");
	game.physics.arcade.enable(player);
	player.body.collideWorldBounds = true;
	player.score = 0;

	//add keyboard controls
	cursors = game.input.keyboard.createCursorKeys(); //arrow keys
	game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR, Phaser.Keyboard.ENTER]);

	//create book
	book = game.add.sprite(1088, 224, "book");
	game.physics.arcade.enable(book);
	book.alive = true;

	//create enemies
	monsters = game.add.group();
	monsters.enableBody = true;
	monsters.physicsBodyType = Phaser.Physics.ARCADE;
	monsters.createMultiple(10, "enemy");

	//score line
	scoreText = game.add.text(0, game.height - 64, "Score:" + player.score.toString(), {fill: "#F33"});
};

function update(){
	player.body.velocity.set(0);

	if(cursors.left.isDown){
		player.body.velocity.x = -30;
	}
	else if(cursors.right.isDown){
		player.body.velocity.x =30;
	}

	if(cursors.up.isDown){
		player.body.velocity.y = -30;
	}
	else if(cursors.down.isDown){
		player.body.velocity.y = 30;
	}

	//define collisions
	game.physics.arcade.overlap(player, monsters, kill);
	game.physics.arcade.overlap(player, book, killbook);
};

function killbook(){
	book.kill();
	book.alive = false;
}

function kill(){
	if(book.alive = false){
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
}