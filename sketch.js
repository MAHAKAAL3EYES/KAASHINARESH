var HerbertHoffman;
var TysonTaylor;
var start1;
var start2;
var bullet;
var gunbullet;
var BiiG,BiG;
//var bulletii,bulleti;

function preload(){
  bg = loadImage("Bg.jpg");
  character=loadImage("character.png");
  opponent=loadImage("opponent.png");
  start1i=loadImage("start1.jpg");
  start2i=loadImage("start2.jpg");
  bullet=loadImage("bullet.png")
  gunbullet=loadImage("bullet2.png")
}

function  setup(){
   createCanvas(1800,1000);
   
   

    HerbertHoffman=createSprite(400,700,40,80);
    HerbertHoffman.addImage(character);
    HerbertHoffman.scale = 0.27;
    HerbertHoffman.visible = false;


   TysonTaylor=createSprite(1200,700)
   TysonTaylor.addImage(opponent)
   TysonTaylor.scale = 0.26;
   TysonTaylor.visible=false;

      bulleti=createSprite(1100,570);
      bulleti.addImage(gunbullet);
      bulleti.scale=0.05;
      bulleti.visible=false;

     BiiG=new Group(); 
      
 
 
}

function draw(){
    background(start1i);

    if(frameCount > 100 && frameCount <=200){
      background(start2i);
    }

    if(frameCount > 200){
      background(bg);

      
      HerbertHoffman.visible = true;
      TysonTaylor.visible=true;

        
      
      

      if(keyDown(RIGHT_ARROW)){
         HerbertHoffman.x +=2;
         //bulletii.x+=2;
      }
      if(keyDown(LEFT_ARROW)){
        HerbertHoffman.x -=2;
        //bulletii.x-=2;

      }
      if(keyDown(UP_ARROW)){
        HerbertHoffman.y -=2;
        //bulletii.y-=2;

      }
      if(keyDown(DOWN_ARROW)){
        HerbertHoffman.y +=2;
        //bulletii.y+=2;

      }

      if(keyDown("D")){
        TysonTaylor.x +=2;
        //bulleti.x+=2;
     }
     if(keyDown("A")){
       TysonTaylor.x -=2;
       //bulleti.x-=2;

     }
     if(keyDown("W")){
       TysonTaylor.y -=2;
       //bulleti.y-=2;

     }
     if(keyDown("S")){
       TysonTaylor.y +=2;
       bulleti.y+=2;

     }
     
     if(keyDown("space")){
       createBulletii();
     }
      
     
     
     if(keyDown("ENTER")){
      
      bulleti.velocityX =-6;
     
    }
  }
    drawSprites();
}


function createBulletii(){
      var bulletii=createSprite(580,685);
      bulletii.addImage(bullet);
      bulletii.scale=0.1;
      bulletii.velocityX = 6;
      bulletii.lifetime = 300;

     BiiG.add(bulletii);

      
}