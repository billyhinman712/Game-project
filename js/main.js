var game = new Phaser.Game(1400, 576, Phaser.AUTO);
game.state.add("state0", monster.state0);
game.state.add("state1", monster.state1);
game.state.add("state2", monster.state2);
game.state.add("state3", monster.state3);
game.state.add("state4", monster.state4);
game.state.add("state5", monster.state5);
game.state.add("state6", monster.state6);
game.state.start("state0");
