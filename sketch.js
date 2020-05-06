var snakepath=[];
var snakelength= 1;
var length;
var state=0,state2=1;
var x=400;
var y=400;
var xa,ya;
var gamestate=0;
function setup() {
  createCanvas(1400,800);
}

function draw() {
    background(0);
  if(gamestate===0){
  fill("red");
  textSize(50);
  text("snake game",530,375);
  textSize(20);
  text("if you go out of the screen you are dead",500,450);
  text("press space to start",575,500)
}
if(keyDown(32)){
  gamestate=1;
}
if(gamestate===1){ 
      if(keyDown(UP_ARROW)){
        up();
        state=1;
      }
      if(keyDown(DOWN_ARROW)){
        down();
        state=2;
      }
      if(keyDown(LEFT_ARROW)){
        left();
        state=3;
      }
      if(keyDown(RIGHT_ARROW) ){
        right();
        state=4;
      }
      if(state===0){fill("grey");rect(x,y,10,10);}
      if(state===1){ y=y-5;var pos=[x,y];snakepath.push(pos);}
      if(state===2){ y=y+5;var pos=[x,y];snakepath.push(pos);}
      if(state===3){ x=x-5;var pos=[x,y];snakepath.push(pos);}
      if(state===4){ x=x+5;var pos=[x,y];snakepath.push(pos);}

      length = snakepath.length-snakelength; 

      if(length>-1)
      for(var i=length;i<snakepath.length;i=i+1){
        rectMode(CENTER);
        fill ("grey");
        rect(snakepath[i][0],snakepath[i][1],10,10);
        if(snakepath[i][0]+10>xa && snakepath[i][0]-10<xa && snakepath[i][1]+10>ya &&snakepath[i][1]-10<ya){snakelength=snakelength+1;console.log("oh yeah");xa=random(0,1300);ya=random(0,800);} 
        if(snakepath[i][0]<9||snakepath[i][0]>1391||snakepath[i][1]>791||snakepath[i][1]<9){gamestate=2;}
      }

      if(state2===1){
        xa=random(0,1400);
        ya=random(0,850);
        state2=0;
      }
      fill("red");
      rect(xa,ya,10,10);
    }
if(gamestate===2){
  fill("red");
  textSize(50);
  text("game over",575,400);
}
}
function up(){
  y=y-5;
  x=x;
  var pos=[x,y];
  snakepath.push(pos);
}
function down(){
  y=y+5;
  x=x;
  var pos=[x,y];
  snakepath.push(pos);
}
function right(){
  x=x+5;
  y=y;
  var pos=[x,y];
  snakepath.push(pos);
}
function left(){
  x=x-5;
  y=y;
  var pos=[x,y];
  snakepath.push(pos);
}
