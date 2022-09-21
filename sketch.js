function preload(){
  bgImg = loadImage("background.jpeg")
  fishImg = loadImage("fish.png")
}

function setup() {
  createCanvas(600,400);
  bg = createSprite(400, 200)
  bg.addImage(bgImg)
  bg.scale = 1.7
  fish = createSprite(50, 350)
  fish.addImage(fishImg)
  fish.scale = 0.6
  edges = createEdgeSprites()
}

function draw() {
  background(0); 
  bg.velocityX = -3
  if (bg.x<0){
    bg.x = 400
  } 
  if (keyDown("left")){
    fish.x = fish.x - 10
  }
  if (keyDown("right")){
    fish.x = fish.x + 10
  }
  fish.collide(edges)
  drawSprites();
}