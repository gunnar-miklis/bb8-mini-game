class Coin {

    constructor( imgCoin ) {
        this.img = imgCoin;
        this.width = 50;
        this.height = 50;
        this.velocity = 3;

        this.x = 500;
        this.y = random(25, 475); // place at random position, between
    }

    placeCoins() {
        // calculate, how fast coins will pass the canvas
        this.x -= this.velocity;
        image( this.img, this.x, this.y, this.width, this.height );
    }

    isCatched( playerStats ) {
        // calc, center value of coin
        let centerCoinX = this.x + this.width / 2;
        let centerCoinY = this.y + this.height / 2;

        // calc, center value of player
        let centerPlayerX = playerStats.x + playerStats.width / 2;
        let centerPlayerY = playerStats.y + playerStats.height / 2;

        // use p5-method: dist() because x = x will probably never happen...
        // but we can say: IF player is "close" to coin (about 25) THEN coin will be catched.
        if ( dist( centerPlayerX, centerPlayerY, centerCoinX, centerCoinY ) > 25 ) { 
            return false;
        } else {
            playerStats.score++;
            document.querySelector('h2 span').innerText = playerStats.score;
            return true;
        }
    }

}