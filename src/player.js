class Player {

    constructor() {
        this.width = 100;
        this.height = 140;
        this.velocity = 0;
        this.gravity = 0.5;
        this.score = 0;

        this.x = 0;
        this.y = 600 - this.height;
    }

    placePlayer() {
        // velocity gets less until it be 0 again, eventually
        this.velocity += this.gravity; 

        // moves player up, according to .jump()
        this.y += this.velocity; 

        // to make sure player stays in canvas
        if ( this.y >= 600 - this.height ) this.y = 600 - this.height; // bottom, ground
        if ( this.y < -1 ) { this.y = 0 } // top, ceiling

        // place player (image)
        image( game.playerImage, this.x, this.y, this.width, this.height );
    }

    jump() {
        this.velocity = -10;
    }

    doesWin() {
        if ( this.score >= 1 ) {
            fill('orange');
            textStyle(BOLD);
            textSize(50);
            text('Wiiiiiin !!!', 15, 100);
            text('*happy\n      beep*',100, 500);
            image( game.celebrateImage, 10, 120, 350, 250);
            // noLoop(); // stops animation
        }
    }

}