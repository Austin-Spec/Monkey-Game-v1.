//Global Variables
var bananaImage, obstacleImage, monkeyI
var obstacleGroup, foodGroup
var background, score



function preload(){
  back_ground = loadImage ("jungle.jpg")
  monkeyI = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_08.png")
  
  bananaImage = loadImage("Banana.png")
  obstacleImage = loadImage("stone.png")
  
}


function setup() {
  createCanvas(600,300);

  backG = createSprite (300,0,10,10)
  backG.addImage("back",back_ground)
  backG.velocityX = -2
  
 
  ground = createSprite (300,270,599,10)
  ground.visible = false;
  
  monkey = createSprite (100,240,10,10)
  monkey.addAnimation("M",monkeyI)
  monkey.scale=0.10
  
  obstacleG = new Group();
  foodG = new Group();
  
  score = 0
  
}


function draw(){
  background(255);
  
  
   if(obstacleG.isTouching(monkey)){
     monkey.scale=0.05
  }
  
  if(backG.x<70) {
    backG.x = backG.width/3;
  }   
  
  if(monkey.y > 161) {
    if(keyDown("space")) {
    monkey.velocityY = -10;
    }
}
    if(foodG.isTouching(monkey)) { 
    foodG.destroyEach(); 
  }
  
  switch(score){
      case 10: player.scale=0.12
      break;
       case 20: player.scale=0.14
      break;
       case 30: player.scale=0.16
      break;
       case 40: player.scale=0.18
      break;
  }
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);

  
  bananaS();
  obstacle();
  
  
  
  drawSprites();
  
  stroke("white")
  textSize("30")
  fill("white")
  text("Score: "+ score, 500,50)
}

function bananaS() {
  if(frameCount % 80 === 0) {
    var banana = createSprite(600,165,40,100)
    banana.addImage(bananaImage)
    banana.velocityX = -6;
             
    banana.scale = 0.05;
    banana.lifetime = 110;
    
    foodG.add(banana);
  }
}

function obstacle() {
     if(World.frameCount % 180 === 0) {
    var obstacle = createSprite(600,248,50,40);
    obstacle.velocityX = -5
    
    obstacle.addImage(obstacleImage)
    
    obstacle.scale = 0.15;
    obstacle.lifetime = 110;
    //add each obstacle to the group
    obstacleG.add(obstacle);
  }
}

