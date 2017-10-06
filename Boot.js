var Game = {};

Game.Boot = function(game){
    
};

Game.Boot.prototype = {
    init:function(){
        
        //pointer can be the cursor
        this.input.maxPointers = 1;
        
        this.stage.disableVisibilityChange = true;
        
    },
    
    preload:function(){
        
        //this.load.image('preloaderBar', 'assets/Bonus_Game_background.png');
    },
    
    create:function(){
        this.state.start('Preloader');
    }
};