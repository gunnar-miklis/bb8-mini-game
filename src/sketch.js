const game = new Game();

function preload() {
  game.preloadImages();
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  game.drawBg();
  game.drawPlayer();
  game.drawCoins();
  game.player.doesWin();
}

function keyPressed() {
  if (keyCode === 32) game.player.jump(); // space button
}