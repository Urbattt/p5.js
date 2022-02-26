function preload() {
}

function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();


}

function draw(){
image(video,100,75,200,200);
fill(255,00,00);
stroke(255,127,80);
circle(50,60,60);
circle(300,60,60);
circle(50,300,60);
circle(300,300,60);
fill(255,150,60);
stroke(255,150,60);
rect(55,50,260,20);
rect(55,60,20,260);
rect(55,300,260,20);
rect(300,60,20,260);
}

