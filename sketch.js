
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running );
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,1200,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  //console.log(ground.x)
  
  score = 0;
  
}


function draw() {
  background("lightgreen")
  
  textSize(20);
  fill(0);
  text("Survival Time: "+ score, 300,50);
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  score = score + Math.round(getFrameRate()/60);
  
  
    
  
  if(keyDown("space") && monkey.y >= 314){
    monkey.velocityY = -12;
}
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground)
  
    if (World.frameCount % 100 == 0) {
      obstacles();
    }
  
  if (World.frameCount % 60 == 0) {
      bananas();
      
    }

  

  drawSprites();
}

function obstacles(){
 var obstacle = createSprite(Math.round(random(300, 590)),330, 10,10);
  
  obstacle.addImage(obstaceImage);
  obstacle.velocityX = -4;
  obstacle.lifetime = 150; 
  obstacle.scale = 0.1;
  
}

function bananas(){
 var banana = createSprite(590,Math.round(random(320,230)), 10, 10);
  
  banana.addImage(bananaImage);
  banana.velocityX = -3;
  banana.lifetime = 150; 
  banana.scale = 0.1;
  
}






