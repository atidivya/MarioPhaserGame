Game.Preloader = function(game){
    this.preloadBar = null;
};

Game.Preloader.prototype = {
    preload:function(){
        
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5,0.5);
        this.timeadvancedTiming = true;
        this.load.setPreloadSprite(this.preloadBar);
        
        //load all assets
        
        this.load.tilemap('map','assets/level1.csv');
        this.load.image('tileset', 'assets/tileset.png');
        
        //player
        this.load.spritesheet('player', 'assets/player.png',24,26);
        
        //buttons
        
        this.load.spritesheet('buttons','assets/button_sprite_sheet.png',193,71);
        
        this.load.image('drag', 'assets/dragImage.png');
        
        this.load.image('bird','assets/enemy.png');
        
        this.load.image('nut','assets/net.png');
        
        this.load.image('titlescreen','assets/welcome.png');
        this.load.image('button','assets/button.png');
    },
    
    create:function(){
        this.state.start('MainMenu');
    }
};