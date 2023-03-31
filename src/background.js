class Background {

    showImage() {
        game.bgImages.forEach( img => {

            // moves ONE img to the left
                // img.x -= 1;
            // makes each bg(1-5) move left, but each in different speed = "parallax effect"
                img.x -= img.speed; 

            // show image
            image( img.path, img.x, 0, width, height );
            // place a second/duplicated img after (repeat / loop image ONCE) / extend canvas * 2
            image( img.path, img.x + width, 0, width, height ); 
            // make the loop INFINITE, reset position back to initial when the dublicated passed.
            if ( img.x <= -width ) img.x = 0; 
            
        })
    }

}