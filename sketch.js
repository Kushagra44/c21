var fixedRect, movingRect,stopR

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  stopR=createSprite(100,100,100,100)
  stopR.shapeColor="yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(stopR,movingRect)){
  movingRect.shapeColor = "red";
  stopR.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  stopR.shapeColor = "yellow";
}

  
  drawSprites();
}
