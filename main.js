video="";
status1="";
objects=[];
function preload(){
    video=createVideo('domino_video.mp4');
    video.hide();
}
function setup(){
    canvas=createCanvas(430,330);
    canvas.center();
}
function draw(){
    image(video,0,0,430,330);
    if(status1 !=""){
objectDectector.detect(video,gotResult);
r=random(255);
g=random(255);
b=random(255);
for(var i=0; i<objects.length; i++){
    document.getElementById("status").innerHTML="Status: Objects Detected";
    document.getElementById("number_of_objects").innerHTML="Number of Objects:"+objects.length;
    fill(r,g,b);
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
    }
}
function start(){
    objectDectector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}
function modelLoaded(){
    console.log("Model is Loaded!!!");
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
