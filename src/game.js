class Game {

    constructor() {
        this.bg = new Background();
        this.bgImages;

        this.player = new Player();
        this.playerImage;

        this.coins = [];
        this.coinImage;

        this.celebrateImage;
    }

    preloadImages() {
        // background images
        this.bgImages = [
            { 
                path: loadImage('./assets/background/plx-1.png'), 
                x: 0,
                speed: 0
            },
            { 
                path: loadImage('./assets/background/plx-2.png'), 
                x: 0,
                speed: 1
            },
            { 
                path: loadImage('./assets/background/plx-3.png'), 
                x: 0,
                speed: 2
            },
            { 
                path: loadImage('./assets/background/plx-4.png'), 
                x: 0,
                speed: 3
            },
            { 
                path: loadImage('./assets/background/plx-5.png'), 
                x: 0,
                speed: 4
            },
        ]

        // player image
        this.playerImage = loadImage('./assets/player/bb8.gif');

        // obstacle image
        this.coinImage = loadImage('./assets/coins/tile000.png');

        // celebrate image
        this.celebrateImage = loadImage('./assets/win/baby-yoda.gif');
    }

    drawBg() {
        clear();
        this.bg.showImage();
    }

    drawPlayer() {
        this.player.placePlayer();
    }

    drawCoins() {
        // each 90th frame, create a new obstacle, and push to array
        if ( frameCount % 90 === 0 ) this.coins.push( new Coin(this.coinImage) );
        
        // place all coins from the array on canvas
        this.coins.forEach( coin => coin.placeCoins() );

        // .filter() shows only visible (on canvas) coins
        // IF coin isCatched (coin.position = player.position)...
        //      OR if coin moves left (outside canvas)...
        //      THEN equal false (remove / filter out).
        // overwrite array with filtered array
        this.coins = this.coins.filter( coin => !coin.isCatched(this.player)  && !( coin.x < 0 - coin.width ) )

    }

}