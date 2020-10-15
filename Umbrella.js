class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.boyimage = loadImage("man.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.boyimage,pos.x,pos.y+70,300,300);
    }
}