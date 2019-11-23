//var diam1 = 0;
var posX;
var posY;

function setup() {
  // put setup code here
createCanvas(500,500);
    
}

function draw() {
  // put drawing code here
background("darkblue")
    //head
    fill('white');
    ellipse(250,225,200,200);
    ellipse(225,275,100,200);
    ellipse(275,275,100,200);   
    rect(217,299,65,75);
       
    //mouth
    fill('black')
    ellipse(250,340,80,35);
    point(450,470);
    fill('white')
    ellipse(210,340,30,45);
    fill('white')
    ellipse(290,340,30,45);
    
   
    //nose
    noStroke();
    fill('black')
    triangle(245,250,245,275,230,275);
    fill('black')
    triangle(255,250,255,275,270,275);
    
    //eyes
    ellipse(200,225,60,80);
    ellipse(300,225,60,80);
    
    //pupils
    fill('white')
    ellipse(posX-50,posY,30,30);
    ellipse(posX+50,posY,30,30);
    
   //left pupil
    if (mouseX>250){
        posX=250;
    }else if(mouseX<225){
        posX=225;
        }else{
            posX=mouseX;
        }
    if (mouseY<200){
        posY= 200;
    }else if (mouseY>250){
        posY=250;
    }else{
        posY=mouseY;
    }
    
    //right pupil
     if (mouseX>275){
        posX=275;
    }else if(mouseX<225){
        posX=225;
        }else{
            posX=mouseX;
        }
    if(mouseIsPressed){
        fill('black')
        ellipse(200,225,60,80);
        ellipse(300,225,60,80);
    }
    
    
}
