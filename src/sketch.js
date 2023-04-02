const game = new Game();

function preload() {
  game.preloadImages();
}

function setup() {
  createCanvas(windowWidth/1.1, 600);
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

function touchStarted() {
  game.player.jump(); // for mobile devices
}

function windowResized() {
  resizeCanvas(windowWidth/1.1, 600)
}