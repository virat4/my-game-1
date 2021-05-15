var player1, player2, playerImg1, playerImg2;
var bullet1,bullet2;
var invisibleGround;
var bg, bgImg;
var resetImg, playImg;
var edges;

function preload(){
playerImg1 = loadImage("player1.png");
playerImg2 = loadImage("player2.png");
bgImg = loadImage("bg.jpg");
resetImg = loadImage("RESET.jpg");
playImg = loadImage("PLAY.jpg");
}

function setup(){
  createCanvas(1200,800);
  invisibleGround = createSprite(200,750,2000,20);
  invisibleGround.visible = false;
  player1 = createSprite(230,660,20,20);
  player1.addImage(playerImg1);
  player1.scale = 0.3;
  player2 = createSprite(990,660,20,20);
  player2.addImage(playerImg2);
  player2.scale = 0.3;
  bulletGrp1 = new Group();
  bulletGrp2 = new Group();
  edges = createEdgeSprites();
}

function draw(){
  background(bgImg);
  
  if(keyDown(DOWN_ARROW)){
    bulletOne();
  }
  if(keyDown("S")){
    bulletTwo();
  }


  if(keyDown(RIGHT_ARROW)){
    player2.x = player2.x+10;
  }
  if(keyDown(LEFT_ARROW)){
    player2.x = player2.x-10;
  }
  if(keyDown(UP_ARROW)){
    player2.y = player2.y-20;
  }
  player2.velocityY = player2.velocityY +0.8;
  player2.collide(invisibleGround);

  if(keyDown("D")){
    player1.x = player1.x+10;
  }
  if(keyDown("A")){
    player1.x = player1.x-10;
  }
  if(keyDown("W")){
    player1.y = player1.y-20;
  }


  player1.velocityY = player1.velocityY +0.8;
  player1.collide(invisibleGround);
  player1.collide(edges);
  player2.collide(edges);

if(bullet1.isTouching(player2)){
  
}


  drawSprites();
}

function bulletOne(){
  bullet1 = createSprite(900,660,10,10);
  bullet1.shapeColor = 0;
  bullet1.velocityX = -10;
  player1.depth = bullet1.depth;
  player1.depth +=1;
  bulletGrp1.add(bullet1);
}
function bulletTwo(){
  bullet2 = createSprite(190,660,10,10);
  bullet2.shapeColor = 0;
  bullet2.velocityX = +10;
  player2.depth = bullet2.depth;
  player2.depth +=1;
  bulletGrp2.add(bullet2);
}
