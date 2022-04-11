class Ship extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.pointValue = 10;
    }

    update(){
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.x -= this.moveSpeed;

        if(this.x < 0){
            this.reset();
        }
    }

    reset(){
        this.x = game.config.width;
    }

}