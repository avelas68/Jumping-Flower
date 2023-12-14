let y;
let x;
let gravity = 12;
let count = 0;

function preload(){
  img1 =  loadImage('FirstFlower.png'); 
  img2 =  loadImage('SecondFlower.png'); 
  img3 =  loadImage('ThirdFlower.png'); 
  img4 =  loadImage('FourthFlower.png'); 
  img5 =  loadImage('FifthFlower.png'); 
  img6 =  loadImage('SixthFlower.png'); 
  imgB =  loadImage('background.png'); 

}
function setup() {
  createCanvas(500, 500);
  x =180;
  y = 400;
}

function draw() {
image(imgB, 0,0,500,500);

  image(img1,x, y, 130,180);
  
    if (count == 1){
      image(img2,x, y, 130,180);

  }
     if (count == 2){
      image(img3,x, y, 130,180);

  }
   if (count == 3){
      image(img4,x, y, 130,180);

  }
   if (count== 4){
      image(img5,x, y, 130,180);

  }
   if (count === 5){
      image(img6,x, y, 130,180);

  }
  fill('white');
  textFont("Bevan-Regular");
  textSize(20);
  //text("the word I want to say", posX, posY);
  if( count > 5 )
   count = 0;
  text("Jump Count: " + count, 150,60);
 

  if(keyIsPressed === true){
    y = 260 - gravity;        
  }
  else{
    y = 330;
  } 

  

}
function keyReleased(){


  count++; 
  

}