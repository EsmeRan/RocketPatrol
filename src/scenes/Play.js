class Play extends Phaser.Scene {
    constructor(){
        super("play");
    }

    preload(){
        this.load.image('starField', 'assets/starField.png')
    }

    create(){
        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'starField').setOrigin(0,0);

        //green
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        //white
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
    }

    update(){
        this.bg.tilePositionX -= 4;
    }
}