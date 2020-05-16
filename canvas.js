var canvas = document.querySelector("canvas");
var info = document.querySelector("#info");
var infos = document.querySelector("#infos");
var single = document.querySelector("#single");
var multi = document.querySelector("#multi");
var high = document.querySelector("#high");
high.textContent = Math.round(localStorage.his);
var canvas2= document.querySelector("#canvas2");
var img2 = document.querySelector("#img2");
canvas2.classList.add("infoo");
var ctx2 = canvas2.getContext('2d');
var player2 = true;
img2.classList.add("infoo");
var img = document.querySelector("#img");
img.classList.add("infoo");
single.addEventListener("click", function(){
	img.classList.remove("infoo");
	canvas2.classList.add("infoo");
	img2.classList.add("infoo");
	this.classList.add("infoo");
	multi.classList.add("infoo");
    singleplayer();
});
var score, score2;
multi.addEventListener("click", function(){
	canvas2.classList.remove("infoo");
	img.classList.remove("infoo");
	ctx2.clearRect(0,0,canvas2.width,canvas2.height);
	 multiplayer();
	 singleplayer();
	 this.classList.add("infoo");
	single.classList.add("infoo");
	img2.classList.remove("infoo");
	});

info.addEventListener("click", function(){
  infos.classList.toggle("infoo");
})

canvas.width = 400;
canvas.height = 700;
function singleplayer(){
var ctx = canvas.getContext('2d');
var circle;
var x = 1;
var z = 600;
var tr = true;
var h2 = document.querySelector("h2");
h2.textContent =Math.round(x/10);
score = Math.round(x/10);
function gameover(){
	img2.classList.add("infoo");
	img.classList.add("infoo");
	single.classList.remove("infoo");
	multi.classList.remove("infoo");
	ctx.clearRect(0, 0,canvas.width,  canvas.height); 
    clearInterval(a);
                clearInterval(b);  
                Sounds.play();
                tr = false;            
 	score = Math.round(x/10);
	if(localStorage.his === undefined){
     	localStorage.his = score;
     }
else if(localStorage.his < score){
	localStorage.his = score;
	high.textContent = Math.round(localStorage.his);
};
setTimeout(game,2000);
function game (){ctx.clearRect(0, 0,canvas.width,  canvas.height); 
ctx.font = "50px Comic Sans MS ";
ctx.fillStyle = "white"
ctx.fillText("Game Over", 80, 300);
}
}
var pause = true;
img.addEventListener("click", function(){
     if(pause){
     	clearInterval(a);
                clearInterval(b); 
pause = false;
tr = false;
     }
     else{
     	pause = true;
     	a = setInterval(hop,100);
       b =  setInterval(gos,rot);
       tr = true;
     }
})

var Sound = new sound("bounce.mp3");
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = 0;
    }    
};
var Sounds = new sound("go.mp3");
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = 0;
    }    
}
canvas.addEventListener("click", function() {
 	if(tr === true){
 	so();
 	Sound.stop();
 	Sound.play();
 }
 else{
 	z=z;
 	ctx.beginPath();
 	circle = ctx.arc(200, z + 4*x -4*xa, 10, 0, Math.PI*2);
 ctx.fillStyle = col;
        ctx.fill();
      
 }
 });
 function so(){
{	h2.textContent = Math.round(x/10);
 	ctx.clearRect(0, 0,canvas.width,  canvas.height); 
 		z -= 20;	
 		go(y);
 		xp(y);
 		square(y);
 		lines();	
 	ctx.beginPath();
 	circle = ctx.arc(200, z + 4*x, 10, 0, Math.PI*2);
        ctx.fillStyle = col;
        ctx.fill();
 		power2();
 		power1();
 		power3();
         check();
}}
var colors = ['red', 'yellow', 'blue','purple'];
 var col = colors[Math.floor(Math.random()*4)];
 var cols;
	var coll;
 var checkin = true;
 function check(){
 	if(col === "blue"){
		coll = -200;
         if(y > 0 && y < Math.PI/2){
         	cols = Math.PI*3/2;
         }  		
         else{
		 cols = -(Math.PI/2);}
	}
	else if(col === "red"){
		coll = 100;
		 if(y>Math.PI*3/2 && y < Math.PI*2){
		 	cols = -(Math.PI);
		 }
		 else{
		 cols = (Math.PI);}
	}
	else if(col === "purple"){
		coll = -100;
		cols = (Math.PI/2);
	}
	else{coll = 0;
		cols = 0;
	}
	if(checkin){
	if(z + 4*x < 300*n + 39 + x && z + 4*x > 300*n + x - 39){
        for(var i = 0; i < 76; i++){
             if(z + 4*x  === 300*n + 39 + x - i){
              if(Math.PI*3/2 - (y + cols) > Math.PI*3/4 - i*Math.PI/180 || Math.PI*3/2 - (y + cols) < Math.PI/4 - i*Math.PI/180  ){
                gameover();
              }
             }
        }
        }
       
        else if(((z + 4*x <= 300*v + 79 + x )&&( z + 4*x >= 300*v + x + 51)) ){
        	                
if( !(y+ cols > Math.PI/2 && y+cols < Math.PI) ){
                gameover();
              }
        
        }
        else if(((z + 4*x <= 300*v - 51 + x )&&( z +4*x >= 300*v + x - 79)) ){
        	                
if( !(y + cols > Math.PI*3/2 && y + cols < Math.PI*2 - Math.PI/180) ){
                gameover();
              }
        
        }
        else if(((z + 4*x <= 300*c + 83 + x )&&( z + 4*x >= 300*c + x + 66)) ){
        if( !(y + cols > Math.PI/2 && y+ cols< Math.PI) ){
                gameover();
              }
        
        }
        else if(((z + 4*x <= 300*c - 66 + x )&&( z + 4*x >= 300*c + x - 83)) ){
        	                
if( !(y + cols > Math.PI*3/2 && y + cols < Math.PI*2 - Math.PI/180) ){
                gameover();
              }
        
        
}
		else if(z + 4*x > 300*li+x-20 && z+4*x < 300*li+x ){
	if(!(0+l+coll > 110&&0+l+coll<190)){
     gameover();
	}
}
	else if(z + 4*x > 300*lii+x-20 && z+4*x < 300*lii+x ){
	if(!(0+l+coll > 110&&0+l+coll<190)){
     gameover();
	}
}
else if(z +4*x > -150 + -1500*p1 + x && z +4*x < -130+ -1500*p1  + x){
       	col = colors[Math.floor(Math.random()*4)];
       	p1 -= 3;
       }
       else if(z +4*x > -150 + -1500*p2 + x && z +4*x < -130+ -1500*p2  + x){
       	checkin = false;
       	col = 'Aqua';
       	setTimeout(checkins,20000);
       	p2 -=3;

       }
       else if(z +4*x > -150 + -1500*p3 + x && z +4*x < -130+ -1500*p3  + x){
       	flypow = setInterval(fly,10);
       	setTimeout(checkins,6000);
       	p3 -=  3;
       }
        else if(z+4*x >= 700){
        	gameover();
        }
}
}
var flypow;
function fly(){
	z -= 4;
	x += 1;
	ctx.beginPath();
    circle = ctx.arc(200, z + 4*x, 10, 0, Math.PI*2);
    ctx.fillStyle = col;
        ctx.fill();
    go(y);
    xp(y);
    lines();
    square(y); 
    ctx.clearRect(0, 0,canvas.width,  canvas.height); 
}
function checkins(){
	checkin = true;
	clearInterval(flypow);
	col = colors[Math.floor(Math.random()*4)];
}
var p1, p2,p3;
 var phot;
 	phot = new Image();
 	phot.src = 'balss.png';
function power2(){
 	ctx.drawImage(phot,340,175,150,150,180,-150 + -1500*p1 + x,50,50);
 }
  function power1(){
 	ctx.drawImage(phot,170,0,150,150,175,-150 + -1500*p2+ x,50,50);
    ctx.arc(200,500, 15, 0, Math.PI);	
    
 }
 function power3(){
 	ctx.drawImage(phot,25,175,150,150,175,-150 + -1500*p3+ x,50,50);
    ctx.arc(200,500, 15, 0, Math.PI);	
 }

var b;
b = setInterval(hop,100);
var obs = 1;
var obsy = 1;
var xa = 1;
 function hop(){
	 if(localStorage.his < Math.round(x/10)){
	   high.textContent = Math.round(x/10);
	 };
	 if(localStorage.his === undefined){
	high.textContent = Math.round(x/10);
	 };
 	h2.textContent = Math.round(x/10);
 	ctx.clearRect(0, 0,canvas.width,  canvas.height); 
 	check();

 	ctx.beginPath();
    circle = ctx.arc(200, z + 4*x, 10, 0, Math.PI*2);
    ctx.fillStyle = col;
        ctx.fill();
    go(y);
    xp(y);
    lines();
    square(y);
    power2();
    power3();
    power1();
    x += xa;
    if(x > 600*obs - 75){
      obs += 0.5;
      xa += 0.1;
      rot -= 0.2;  
      if(v === obsy){
      	v -= 5;
      }
      else if(n === obsy){
      	n -= 5;
      }
      else if(c === obsy){
      	c -= 5;
      }
	else if(li === obsy){
      	li -= 5;
      }
	else if(lii === obsy){
		lii -=5;
	}
      obsy--;
    }

}
	var l = 0;
 circle = ctx.arc(200, z, 10, 0, Math.PI*2)
 ctx.fillStyle = col;
        ctx.fill(circle);
        var y = 0;
        go(0);
var b1 ;
var y1;
var rot = 50;
        var a = setInterval(gos,rot);
        //var d = setInterval(xp,50);
        function gos (){
        	go(y);
        	xp(y);
        	lines();
        	square(y);
        	
        	
                	if( y <= Math.PI*2){
        	y += Math.PI/180;}
        	else{
        		y = 0;
        		y += Math.PI/180;
        	}
		l++;
		if(l === 400){
		  l = 0;
		}
        }
var n,v,c;
var pownum = [];
for (var i = 0; i <3; i++) {
	pownum.push(i);
}
var pp = 0;
poweradd();
function poweradd(){
	shuffle(pownum);
p1 = 0 - pp;
p2 = 1 - pp;
p3 = 2- pp;
}

var num = [];
for (var i = 1; i >-4; i--) {
	num.push(i);
}
shuffle(num);
var li;
	var lii;
n = num[0];
v = num[1];
c = num[2];
li = num[3];
	lii = num[4];
function shuffle(array) {
    var a = array.length;
    var t, i;
    while (a > 0) {
        i = Math.floor(Math.random() * a);
        a--;
        t = array[a];
        array[a] = array[i];
        array[i] = t;
    }
}

function go(y){
    ctx.beginPath();
 b1 =   ctx.arc(125,300*n + x,75, 0 - y, Math.PI*3/2 - y, true );
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();
 y1  =   ctx.arc(125,300*n + x,75, Math.PI*3/2 - y, Math.PI - y, true );
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();
    ctx.arc(125,300*n + x,75,  Math.PI - y, Math.PI/2 - y, true );
        ctx.strokeStyle = 'purple';
        ctx.lineWidth = 10;
        ctx.stroke();
ctx.beginPath();
    ctx.arc(125,300*n + x,75, Math.PI/2 - y, 0 - y , true );
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();   

    ctx.arc(275,300*n + x,75, 0 + y, Math.PI*3/2 + y, true );
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();
    ctx.arc(275,300*n + x,75, Math.PI*3/2 + y, Math.PI + y, true );
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();
    ctx.arc(275,300*n + x,75,  Math.PI + y, Math.PI/2 + y, true );
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 10;
        ctx.stroke();
ctx.beginPath();
    ctx.arc(275,300*n + x,75, Math.PI/2 + y, 0 + y , true );
        ctx.strokeStyle = 'purple';
        ctx.lineWidth = 10;
        ctx.stroke();
}
xp(y);
function xp(y){
ctx.beginPath();

   ctx.arc(200,300*v + x,60, 0 - y, Math.PI*3/2 - y, true );
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();
  ctx.arc(200,300*v + x,60, Math.PI*3/2 - y, Math.PI - y, true );
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();
    ctx.arc(200,300*v + x,60,  Math.PI - y, Math.PI/2 - y, true );
        ctx.strokeStyle = 'purple';
        ctx.lineWidth = 10;
        ctx.stroke();
ctx.beginPath();
    ctx.arc(200,300*v + x,60, Math.PI/2 - y, 0 - y , true );
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();

        ctx.arc(200,300*v + x,75, 0 + y, Math.PI*3/2 + y, true );
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();
    ctx.arc(200,300*v + x,75, Math.PI*3/2 + y, Math.PI + y, true );
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();
    ctx.arc(200,300*v + x,75,  Math.PI + y, Math.PI/2 + y, true );
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 10;
        ctx.stroke();
ctx.beginPath();
    ctx.arc(200,300*v + x,75, Math.PI/2 + y, 0 + y , true );
        ctx.strokeStyle = 'purple';
        ctx.lineWidth = 10;
        ctx.stroke();
}
function square(y){
}
square(y);
lines();
function lines(){
	  ctx.beginPath();
    ctx.arc(200,300*c + x,75, 0 - y, Math.PI*3/2 - y, true );
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();
    ctx.arc(200,300*c + x,75, Math.PI*3/2 - y, Math.PI - y, true );
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();
    ctx.arc(200,300*c + x,75,  Math.PI - y, Math.PI/2 - y, true );
        ctx.strokeStyle = 'purple';
        ctx.lineWidth = 10;
        ctx.stroke();
ctx.beginPath();
    ctx.arc(200,300*c + x,75, Math.PI/2 - y, 0 - y , true );
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();ctx.beginPath();
	ctx.moveTo(0+l,300*li+x);
	ctx.lineTo(100+l,300*li+x);
	ctx.lineWidth = 30;
	ctx.strokeStyle = 'yellow';
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(100+l,300*li+x);
	ctx.lineTo(200+l,300*li+x);
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(200+l,300*li+x);
	ctx.lineTo(300+l,300*li+x);
	ctx.strokeStyle = 'blue';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(300+l,300*li+x);
	ctx.lineTo(400+l,300*li+x,);
	ctx.strokeStyle = 'purple';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(-400+l,300*li+x);
	ctx.lineTo(-300+l,300*li+x);
	ctx.lineWidth = 30;
	ctx.strokeStyle = 'yellow';
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(-300+l,300*li+x);
	ctx.lineTo(-200+l,300*li+x);
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(-200+l,300*li+x);
	ctx.lineTo(-100+l,300*li+x);
	ctx.strokeStyle = 'blue';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(-100+l,300*li+x);
	ctx.lineTo(0+l,300*li+x,);
	ctx.strokeStyle = 'purple';
	ctx.lineWidth = 30;
	ctx.stroke(); 
	ctx.beginPath();
	ctx.moveTo(400-l,300*lii-100+l/2+x);
	ctx.lineTo(300-l,300*lii-50+l/2+x);
	ctx.lineWidth = 30;
	ctx.strokeStyle = 'yellow';
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(300-l,300*lii-50+l/2+x);
	ctx.lineTo(200-l,300*lii+l/2+x);
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(200-l,300*lii+l/2+x);
	ctx.lineTo(100-l,300*lii+50+l/2+x);
	ctx.strokeStyle = 'blue';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(100-l,300*lii+50+l/2+x);
	ctx.lineTo(0-l,300*lii+100+l/2+x);
	ctx.strokeStyle = 'purple';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(800-l,300*lii-300+l/2+x);
	ctx.lineTo(700-l,300*lii-250+l/2+x);
	ctx.lineWidth = 30;
	ctx.strokeStyle = 'yellow';
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(700-l,300*lii-250+l/2+x);
	ctx.lineTo(600-l,300*lii-200+l/2+x);
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(600-l,300*lii-200+l/2+x);
	ctx.lineTo(500-l,300*lii-150+l/2+x);
	ctx.strokeStyle = 'blue';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(500-l,300*lii-150+l/2+x);
	ctx.lineTo(400-l,300*lii+x-100+l/2);
	ctx.strokeStyle = 'purple';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(0+l,300*lii-100+l/2+x);
	ctx.lineTo(100+l,300*lii-50+l/2+x);
	ctx.lineWidth = 30;
	ctx.strokeStyle = 'yellow';
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(100+l,300*lii-50+l/2+x);
	ctx.lineTo(200+l,300*lii+l/2+x);
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(200+l,300*lii+l/2+x);
	ctx.lineTo(300+l,300*lii+50+l/2+x);
	ctx.strokeStyle = 'blue';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(300+l,300*lii+50+l/2+x);
	ctx.lineTo(400+l,300*lii+100+l/2+x);
	ctx.strokeStyle = 'purple';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(-400+l,300*lii-300+l/2+x);
	ctx.lineTo(-300+l,300*lii-250+l/2+x);
	ctx.lineWidth = 30;
	ctx.strokeStyle = 'yellow';
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(-300+l,300*lii-250+l/2+x);
	ctx.lineTo(-200+l,300*lii-200+l/2+x);
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(-200+l,300*lii-200+l/2+x);
	ctx.lineTo(-100+l,300*lii-150+l/2+x);
	ctx.strokeStyle = 'blue';
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(-100+l,300*lii-150+l/2+x);
	ctx.lineTo(0+l,300*lii+x-100+l/2);
	ctx.strokeStyle = 'purple';
	ctx.lineWidth = 30;
	ctx.stroke();
}
}
function multiplayer(){
	var canvas2= document.querySelector("#canvas2");
var img2 = document.querySelector("#img2");
canvas2.width = 400;
canvas2.height = 700;
var ctx2 = canvas2.getContext('2d');
var circle2;
var x2 = 1;
var z2 = 600;
var tr2 = true;
var h22 = document.querySelector("#h22");
 h22.textContent = Math.round(x2/10);
var score2 = Math.round(x2/10);
function gameover2(){
    clearInterval(a2);
                clearInterval(b2);  
                Sounds2.play();
                single.classList.remove("infoo");
                multi.classList.remove("infoo");
                tr2 = false;            
 	score2 = Math.round(x2/10);
 	setTimeout(game2,1000)
 	
	if(localStorage.his === undefined){
     	localStorage.his = score2;
     }
else if(localStorage.his < score2){
	localStorage.his = score2;
}
high.textContent = Math.round(localStorage.his);

}
function game2 (){ctx2.clearRect(0, 0,canvas.width,  canvas.height); 
	if(score < score2){ctx2.font = "50px Comic Sans MS ";
ctx2.fillStyle = "white"
ctx2.fillText("Player 2 wins", 80, 300);}
 else{
 	ctx2.font = "50px Comic Sans MS ";
ctx2.fillStyle = "white"
ctx2.fillText("Player 1 wins", 80, 300);
 }
}
var pause2 = true;
img2.addEventListener("click", function(){
     if(pause2){
     	clearInterval(a2);
                clearInterval(b2); 
pause2 = false;
tr2 = false;
     }
     else{
     	pause2 = true;
     	a2 = setInterval(hop2,100);
       b2 =  setInterval(gos2,rot);
       tr2 = true;
     }
})

var Sound2 = new sound("bounce.mp3");
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = 0;
    }    
};
var Sounds2 = new sound("go.mp3");
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = 0;
    }    
}
window.addEventListener("keydown", function(event) {
 	if(tr2 === true){
 		if(event.code === "ArrowUp"){
 	so2();
 	Sound2.stop();
 	Sound2.play();}
 }
 else{
 	z2=z2;
 	ctx2.beginPath();
 	circle2 = ctx2.arc(200, z2 + 4*x2 -4*xa2, 10, 0, Math.PI*2);
 ctx2.fillStyle = col2;
        ctx2.fill();
 }
 });
 function so2(){
{	h22.textContent = Math.round(x2/10);
 	ctx2.clearRect(0, 0,canvas.width,  canvas.height); 
 		z2 -= 20;	
 		go2(y2);
 		xp2(y2);
 		square2(y2);
 		lines2();	
 	ctx2.beginPath();
 	circle2 = ctx2.arc(200, z2 + 4*x2, 10, 0, Math.PI*2);
        ctx2.fillStyle = col2;
        ctx2.fill();
 		power22();
 		power12();
 		power32();
         check2();
}}
var colors2 = ['red', 'yellow', 'blue','purple'];
 var col2 = colors2[Math.floor(Math.random()*4)];
 var cols2;
	var coll2;
 var checkin2 = true;
 function check2(){
 	if(col2 === "blue"){
		coll2 = -200;
         if(y2 > 0 && y2 < Math.PI/2){
         	cols2 = Math.PI*3/2;
         }  		
         else{
		 cols2 = -(Math.PI/2);}
	}
	else if(col2 === "red"){
		coll2 = 100;
		 if(y2>Math.PI*3/2 && y2 < Math.PI*2){
		 	cols2 = -(Math.PI);
		 }
		 else{
		 cols2 = (Math.PI);}
	}
	else if(col2 === "purple"){
		coll2 = -100;
		cols2 = (Math.PI/2);
	}
	else{coll2 = 0;
		cols2 = 0;
	}
	if(checkin2){
	if(z2 + 4*x2 < 300*n2 + 39 + x2 && z2+ 4*x2 > 300*n2 + x2 - 39){
        for(var i = 0; i < 76; i++){
             if(z2 + 4*x2  === 300*n2 + 39 + x2 - i){
              if(Math.PI*3/2 - (y2 + cols2) > Math.PI*3/4 - i*Math.PI/180 || Math.PI*3/2 - (y2 + cols2) < Math.PI/4 - i*Math.PI/180  ){
                gameover2();
              }
             }
        }
        }
       
        else if(((z2 + 4*x2 <= 300*v2 + 79 + x2 )&&( z2 + 4*x2 >= 300*v2 + x2 + 51)) ){
        	                
if( !(y2+ cols2 > Math.PI/2 && y2+cols2 < Math.PI) ){
                gameover2();
              }
        
        }
        else if(((z2 + 4*x2 <= 300*v2 - 51 + x2 )&&( z2 +4*x2 >= 300*v2 + x2- 79)) ){
        	                
if( !(y2 + cols2 > Math.PI*3/2 && y2 + cols2 < Math.PI*2 - Math.PI/180) ){
                gameover2();
              }
        
        }
        else if(((z2 + 4*x2 <= 300*c2 + 83 + x2 )&&( z2 + 4*x2 >= 300*c2 + x2 + 66)) ){
        if( !(y2 + cols2 > Math.PI/2 && y2+ cols2< Math.PI) ){
                gameover2();
              }
        
        }
        else if(((z2 + 4*x2 <= 300*c2 - 66 + x2 )&&( z2 + 4*x2 >= 300*c2 + x2 - 83)) ){
        	                
if( !(y2 + cols2 > Math.PI*3/2 && y2 + cols2 < Math.PI*2 - Math.PI/180) ){
                gameover2();
              }
        
        
}
else if(z2 + 4*x2 > 300*li2+x2-20 && z2+4*x2 < 300*li2+x2 ){
	if(!(0+l2+coll2 > 110&&0+l2+coll2<190)){
     gameover2();
	}
}
else if(z2 + 4*x2 > 300*lii2+x2-20 && z2+4*x2 < 300*lii2+x2 ){
	if(!(0+l2+coll2 > 110&&0+l2+coll2<190)){
     gameover2();
	}
}
else if(z2 +4*x2 > -150 + -1500*p12 + x2 && z2 +4*x2 < -130+ -1500*p12  + x2){
       	col2 = colors2[Math.floor(Math.random()*4)];
       	p12 -= 3;
       }
       else if(z2 +4*x2 > -150 + -1500*p22 + x2 && z2 +4*x2 < -130+ -1500*p22  + x2){
       	checkin2 = false;
       	col2 = 'Aqua';
       	setTimeout(checkins2,20000);
       	p22 -=3;

       }
       else if(z2 +4*x2 > -150 + -1500*p32 + x2 && z2+4*x2 < -130+ -1500*p32  + x2){
       	flypow2 = setInterval(fly2,10);
       	setTimeout(checkins2,6000);
       	p32 -=  3;
       }
        else if(z2+4*x2 >= 700){
        	gameover2();
        }
}
}
var l2,li2;
var flypow2;
function fly2(){
	z2 -= 4;
	x2 += 1;
	ctx2.beginPath();
    circle2 = ctx2.arc(200, z2 + 4*x2, 10, 0, Math.PI*2);
    ctx2.fillStyle = col2;
        ctx2.fill();
    go2(y2);
    xp2(y2);
    lines2();
    square2(y); 
    ctx2.clearRect(0, 0,canvas.width,  canvas.height); 
}
function checkins2(){
	checkin2 = true;
	clearInterval(flypow2);
	col2 = colors2[Math.floor(Math.random()*4)];
}
var p12, p22,p32;
 var phot2;
 	phot2 = new Image();
 	phot2.src = 'balss.png';
function power22(){
 	ctx2.drawImage(phot2,340,175,150,150,180,-150 + -1500*p12 + x2,50,50);
 }
  function power12(){
 	ctx2.drawImage(phot2,170,0,150,150,175,-150 + -1500*p22+ x2,50,50);
    ctx2.arc(200,500, 15, 0, Math.PI);	
    
 }
 function power32(){
 	ctx2.drawImage(phot2,25,175,150,150,175,-150 + -1500*p32+ x2,50,50);
    ctx2.arc(200,500, 15, 0, Math.PI);	
 }

var b2;
b2 = setInterval(hop2,100);
var obs2 = 1;
var obsy2 = 1;
var xa2 = 1;
 function hop2(){
 	h22.textContent = Math.round(x2/10);
 	ctx2.clearRect(0, 0,canvas.width,  canvas.height); 
 	check2();

 	ctx2.beginPath();
    circle2 = ctx2.arc(200, z2 + 4*x2, 10, 0, Math.PI*2);
    ctx2.fillStyle = col2;
        ctx2.fill();
    go2(y2);
    xp2(y2);
    lines2();
    square2(y2);
    power22();
    power32();
    power12();
    x2 += xa2;
    if(x2 > 600*obs2 - 75){
      obs2 += 0.5;
      xa2 += 0.1;
      rot2 -= 0.2;  
      if(v2 === obsy2){
      	v2 -= 5;
      }
      else if(n2 === obsy2){
      	n2-= 5;
      }
      else if(c2 === obsy2){
      	c2 -= 5;
      }
	    else if(li2 === obsy2){
      	li2 -= 5;
      }
	else if(lii2 === obsy2){
      	lii2 -= 5;
      } 
      obsy2--;
    }

}
 circle2 = ctx2.arc(200, z2, 10, 0, Math.PI*2)
 ctx2.fillStyle = col2;
        ctx2.fill(circle2);
        var y2 = 0;
        go2(0);
var b12 ;
var y1;
var rot2 = 50;
        var a2 = setInterval(gos2,rot2);
        //var d = setInterval(xp,50);
        function gos2 (){
        	go2(y2);
        	xp2(y2);
        	lines2();
        	square2(y2);
        	
        	
                	if( y2 <= Math.PI*2){
        	y2 += Math.PI/180;}
        	else{
        		y2 = 0;
        		y2 += Math.PI/180;
        	}
		l2++;
		if(l2 === 400){
		l2 === 0;
		}
        }
var n2,v2,c2;
var pownum2 = [];
for (var i = 0; i <3; i++) {
	pownum2.push(i);
}
var pp2 = 0;
poweradd2();
function poweradd2(){
	shuffle(pownum2);
p12 = 0 - pp2;
p22 = 1 - pp2;
p32 = 2- pp2;
}

var num2 = [];
for (var i = 1; i >-4; i--) {
	num2.push(i);
}
shuffle(num2);
var lii2;
n2 = num2[0];
v2 = num2[1];
c2 = num2[2];
li2 = num2[3];
lii2 = num2[4];
function shuffle(array) {
    var a = array.length;
    var t, i;
    while (a > 0) {
        i = Math.floor(Math.random() * a);
        a--;
        t = array[a];
        array[a] = array[i];
        array[i] = t;
    }
}

function go2(y2){
    ctx2.beginPath();
 b12 =   ctx2.arc(125,300*n2 + x2,75, 0 - y2, Math.PI*3/2 - y2, true );
        ctx2.strokeStyle = 'blue';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath();
 y1  =   ctx2.arc(125,300*n2 + x2,75, Math.PI*3/2 - y2, Math.PI - y2, true );
        ctx2.strokeStyle = 'yellow';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath();
    ctx2.arc(125,300*n2 + x2,75,  Math.PI - y2, Math.PI/2 - y2, true );
        ctx2.strokeStyle = 'purple';
        ctx2.lineWidth = 10;
        ctx2.stroke();
ctx2.beginPath();
    ctx2.arc(125,300*n2 + x2,75, Math.PI/2 - y2, 0 - y2 , true );
        ctx2.strokeStyle = 'red';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath();   

    ctx2.arc(275,300*n2 + x2,75, 0 + y2, Math.PI*3/2 + y2, true );
        ctx2.strokeStyle = 'yellow';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath();
    ctx2.arc(275,300*n2 + x2,75, Math.PI*3/2 + y2, Math.PI + y2, true );
        ctx2.strokeStyle = 'blue';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath();
    ctx2.arc(275,300*n2 + x2,75,  Math.PI + y2, Math.PI/2 + y2, true );
        ctx2.strokeStyle = 'red';
        ctx2.lineWidth = 10;
        ctx2.stroke();
ctx2.beginPath();
    ctx2.arc(275,300*n2 + x2,75, Math.PI/2 + y2, 0 + y2 , true );
        ctx2.strokeStyle = 'purple';
        ctx2.lineWidth = 10;
        ctx2.stroke();
}
xp2(y2);
function xp2(y2){
ctx2.beginPath();

   ctx2.arc(200,300*v2 + x2,60, 0 - y2, Math.PI*3/2 - y2, true );
        ctx2.strokeStyle = 'blue';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath();
  ctx2.arc(200,300*v2 + x2,60, Math.PI*3/2 - y2, Math.PI - y2, true );
        ctx2.strokeStyle = 'yellow';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath();
    ctx2.arc(200,300*v2 + x2,60,  Math.PI - y2, Math.PI/2 - y2, true );
        ctx2.strokeStyle = 'purple';
        ctx2.lineWidth = 10;
        ctx2.stroke();
ctx2.beginPath();
    ctx2.arc(200,300*v2 + x2,60, Math.PI/2 - y2, 0 - y2 , true );
        ctx2.strokeStyle = 'red';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath();

        ctx2.arc(200,300*v2 + x2,75, 0 + y2, Math.PI*3/2 + y2, true );
        ctx2.strokeStyle = 'yellow';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath();
    ctx2.arc(200,300*v2 + x2,75, Math.PI*3/2 + y2, Math.PI + y2, true );
        ctx2.strokeStyle = 'blue';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath();
    ctx2.arc(200,300*v2 + x2,75,  Math.PI + y2, Math.PI/2 + y2, true );
        ctx2.strokeStyle = 'red';
        ctx2.lineWidth = 10;
        ctx2.stroke();
ctx2.beginPath();
    ctx2.arc(200,300*v2 + x2,75, Math.PI/2 + y2, 0 + y2 , true );
        ctx2.strokeStyle = 'purple';
        ctx2.lineWidth = 10;
        ctx2.stroke();
}
function square2(y2){
}
square2(y2);
lines2();
function lines2(){
	  ctx2.beginPath();
    ctx2.arc(200,300*c2 + x2,75, 0 - y2, Math.PI*3/2 - y2, true );
        ctx2.strokeStyle = 'blue';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath();
    ctx2.arc(200,300*c2 + x2,75, Math.PI*3/2 - y2, Math.PI - y2, true );
        ctx2.strokeStyle = 'yellow';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath();
    ctx2.arc(200,300*c2 + x2,75,  Math.PI - y2, Math.PI/2 - y2, true );
        ctx2.strokeStyle = 'purple';
        ctx2.lineWidth = 10;
        ctx2.stroke();
ctx2.beginPath();
    ctx2.arc(200,300*c2 + x2,75, Math.PI/2 - y2, 0 - y2 , true );
        ctx2.strokeStyle = 'red';
        ctx2.lineWidth = 10;
        ctx2.stroke();
        ctx2.beginPath(); 
	ctx2.moveTo(0+l2,300*li2+x2);
	ctx2.lineTo(100+l2,300*li2+x2);
	ctx2.lineWidth = 30;
	ctx2.strokeStyle = 'yellow';
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(100+l2,300*li2+x2);
	ctx2.lineTo(200+l2,300*li2+x2);
	ctx2.strokeStyle = 'red';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(200+l2,300*li2+x2);
	ctx2.lineTo(300+l2,300*li2+x2);
	ctx2.strokeStyle = 'blue';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(300+l2,300*li2+x2);
	ctx2.lineTo(400+l2,300*li2+x2);
	ctx2.strokeStyle = 'purple';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(-400+l2,300*li2+x2);
	ctx2.lineTo(-300+l2,300*li2+x2);
	ctx2.lineWidth = 30;
	ctx2.strokeStyle = 'yellow';
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(-300+l2,300*li2+x2);
	ctx2.lineTo(-200+l2,300*li2+x2);
	ctx2.strokeStyle = 'red';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(-200+l2,300*li2+x2);
	ctx2.lineTo(-100+l2,300*li2+x2);
	ctx2.strokeStyle = 'blue';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(-100+l2,300*li2+x2);
	ctx2.lineTo(0+l2,300*li2+x2);
	ctx2.strokeStyle = 'purple';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	 ctx2.beginPath();
	ctx2.moveTo(400-l2,300*lii2-100+l2/2+x2);
	ctx2.lineTo(300-l2,300*lii2-50+l2/2+x2);
	ctx2.lineWidth = 30;
	ctx2.strokeStyle = 'yellow';
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(300-l2,300*lii2-50+l2/2+x2);
	ctx2.lineTo(200-l2,300*lii2+l2/2+x2);
	ctx2.strokeStyle = 'red';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(200-l2,300*lii2+l2/2+x2);
	ctx2.lineTo(100-l2,300*lii2+50+l2/2+x2);
	ctx2.strokeStyle = 'blue';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(100-l2,300*lii2+50+l2/2+x2);
	ctx2.lineTo(0-l2,300*lii2+100+l2/2+x2);
	ctx2.strokeStyle = 'purple';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(800-l2,300*lii2-300+l2/2+x2);
	ctx2.lineTo(700-l2,300*lii2-250+l2/2+x2);
	ctx2.lineWidth = 30;
	ctx2.strokeStyle = 'yellow';
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(700-l2,300*lii2-250+l2/2+x2);
	ctx2.lineTo(600-l2,300*lii2-200+l2/2+x2);
	ctx2.strokeStyle = 'red';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(600-l2,300*lii2-200+l2/2+x2);
	ctx2.lineTo(500-l2,300*lii2-150+l2/2+x2);
	ctx2.strokeStyle = 'blue';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(500-l2,300*lii2-150+l2/2+x2);
	ctx2.lineTo(400-l2,300*lii2+x2-100+l2/2);
	ctx2.strokeStyle = 'purple';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(0+l2,300*lii2-100+l2/2+x2);
	ctx2.lineTo(100+l2,300*lii2-50+l2/2+x2);
	ctx2.lineWidth = 30;
	ctx2.strokeStyle = 'yellow';
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(100+l2,300*lii2-50+l2/2+x2);
	ctx2.lineTo(200+l2,300*lii2+l2/2+x2);
	ctx2.strokeStyle = 'red';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(200+l2,300*lii2+l2/2+x2);
	ctx2.lineTo(300+l2,300*lii2+50+l2/2+x2);
	ctx2.strokeStyle = 'blue';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(300+l2,300*lii2+50+l2/2+x2);
	ctx2.lineTo(400+l2,300*lii2+100+l2/2+x2);
	ctx2.strokeStyle = 'purple';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(-400+l2,300*lii2-300+l2/2+x2);
	ctx2.lineTo(-300+l2,300*lii2-250+l2/2+x2);
	ctx2.lineWidth = 30;
	ctx2.strokeStyle = 'yellow';
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(-300+l2,300*lii2-250+l2/2+x2);
	ctx2.lineTo(-200+l2,300*lii2-200+l2/2+x2);
	ctx2.strokeStyle = 'red';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(-200+l2,300*lii2-200+l2/2+x2);
	ctx2.lineTo(-100+l2,300*lii2-150+l2/2+x2);
	ctx2.strokeStyle = 'blue';
	ctx2.lineWidth = 30;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.moveTo(-100+l2,300*lii2-150+l2/2+x2);
	ctx2.lineTo(0+l2,300*lii2+x2-100+l2/2);
	ctx2.strokeStyle = 'purple';
	ctx2.lineWidth = 30;
	ctx2.stroke();
}}
