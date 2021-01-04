var fixedRect, movingRect, obj3, obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
obj3=createSprite(200,100,50,50)
obj3.shapeColor="yellow"
obj4=createSprite(400,100,30,40)
obj4.shapeColor="yellow"

obj3.velocityX= 4
obj4.velocityX=-4
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5
}

function draw() {
  background(0,0,0);  

 bounceoff(movingRect,fixedRect)
bounceoff(obj3,obj4)



  drawSprites();
}
