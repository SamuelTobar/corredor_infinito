var car;
var carImage;
var road, roadImage;
var cash,cashImg;
var cashG;
var diamonds,diamondsImg,diamondsG;
var money,moneyImg,moneyG;
var spike,spikeImg,spikeG;


var score = 0;


function preload(){
carImage = loadImage ("vecteezy_sedan-car_1193859.png");
roadImage = loadImage("road.png");
cashImg = loadImage ("893097.png");
diamondsImg = loadImage("Diamond_JE3_BE3.webp");
moneyImg = loadImage ("gold-bar-clipart-design-illustration-free-png.webp");
spikeImg = loadImage ("Short_Spike_Row.webp")
}

function setup() {
 createCanvas(400,600);
 road = createSprite(200,200,20,20);
 road.addImage(roadImage);
 road.velocityY=4;

 car = createSprite(200,500,20,20);
 car.addImage(carImage);
 car.scale = 0.07;



 spikeG = new Group();
  diamondsG = new Group();
 moneyG = new Group();
 cashG = new Group();

}

function draw() {
 


//movimiento del jugador
  car.x = World.mouseX;
 
 
 if(road.y > 600){
   road.y = height/2;
 }
 
 spikeG.setVelocityYEach(14);
 diamondsG.setVelocityYEach(14);
 cashG.setVelocityYEach(14);
 moneyG.setVelocityYEach(14);
 
    drawSprites();
    createCash()
    createDiamonds()
    createmoney();
    createspike();

if(cashG.isTouching(car)){
score =score +20;
cashG.destroyEach();
}

if(diamondsG.isTouching(car)){
  score =score +60;
  diamondsG.destroyEach();
  }
  if(moneyG.isTouching(car)){
    score =score +150;
    moneyG.destroyEach();
    }
  
    if(spikeG.isTouching(car)){
      
      diamondsG.destroyEach();
      moneyG.destroyEach();
      spikeG.destroyEach();
      cashG.destroyEach();
      
      spikeG.VelocityYEach();
      diamondsG.VelocityYEach();
      cashG.VelocityYEach();
      moneyG.VelocityYEach();
      car.destroy();
  
    
    
    
    }






textSize(20);
fill(255);
text("score: "+ score,10,30);
  }



function createCash() {
  if (World.frameCount % 95 == 0) {
   cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 6;
  cash.lifetime = 220;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 120 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.2;
  diamonds.velocityY = 6;
  diamonds.lifetime = 220;
  diamondsG.add(diamonds);
}
}

function createmoney() {
  if (World.frameCount % 200 == 0) {
  money = createSprite(Math.round(random(50, 350),40, 10, 10));
  money.addImage(moneyImg);
  money.scale=0.07;
  money.velocityY = 3;
  money.lifetime = 150;
  moneyG.add(money);
  }
}


function createspike() {
  if (World.frameCount % 20 == 0) {
  spike = createSprite(Math.round(random(50, 350),40, 10, 10));
  spike.addImage(spikeImg);
  spike.scale=0.07;
  spike.velocityY = 3;
  spike.lifetime = 150;
  spikeG.add(spike);
  }
}




