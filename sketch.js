//creating variables
var tom, jerry;
var tom1,tom2,tom3;
var jerry1,jerry2,jerry3;
var garden,garndenImg;

function preload() {
    tom1 = loadAnimation("images/cat1.png");
    gardenImg = loadImage("images/garden.png");
    jerry1 = loadAnimation("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse3.png","images/mouse2.png");
    tom2 = loadAnimation("images/cat2.png","images/cat3.png");
    tom3 = loadAnimation("images/cat4.png");
    jerry3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400,10,10);
    garden.addImage(gardenImg);
    garden.scale = 1.2;

    tom = createSprite(870,650,50,50);
    tom.addAnimation("cat",tom1);
    tom.scale = 0.2;

    jerry = createSprite(150,650,20,20);
    jerry.addAnimation("mouse",jerry1);
    jerry.scale = 0.13;

    tom.debug = false;
    jerry.debug = false;
    tom.setCollider("rectangle",0,0,410,410)

}

function draw() {

    background("cyan");
    
    if(keyWentDown("left_arrow")){
        jerry.addAnimation("mouse",jerry2);
        tom.velocityX = -3;
        tom.addAnimation("cat",tom2);
    }

    if(keyWentUp("left_arrow")){
        //supposed to put code here but the game was running fine so I left it empty
    }

    if(tom.isTouching(jerry)){
        tom.velocityX = 0;
        tom.addAnimation("cat",tom3);
        jerry.addAnimation("mouse",jerry3);
    }

    drawSprites();
}