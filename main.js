
var canvas = document.getElementById("Canvases");
var ctx = canvas.getContext("2d")
var img_width = 300;
var img_height = 100;
var img_image;
var img_x = 100;
var img_y = 100;
 function add(){

 }




window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey();
			
	
		
		
	    }
		if(keyPressed >=48 && keyPressed<=57){
          numberkey();

		}
		if(keyPressed >=37 && keyPressed<=40){
			arrowkey();
  
		  }if(keyPressed >=17 && keyPressed<=18){
			specialkey();
  
		  }
		  if(keyPressed ==27 ){
			specialkey();
  
		  }
		  

}

function aplhabetkey()
{
	
	img_image="Alpkey.png";
	document.getElementById("img1").src = img_image;
	document.getElementById("d1").innerHTML="You pressed an Alphabet";

}
function numberkey()
{
	
	img_image="numkey.png";
	document.getElementById("img1").src = img_image;
	document.getElementById("d1").innerHTML="You pressed an number";
}
function arrowkey()
{
	img_image="Arrkey.png";
	document.getElementById("img1").src = img_image;
	document.getElementById("d1").innerHTML="You pressed an arrow";
}
function specialkey()
{
	img_image="spkey.png";
	document.getElementById("img1").src = img_image;
	document.getElementById("d1").innerHTML="You pressed an special";
}
function otherkey()
{
	
	img_image="otherkey.png";
	document.getElementById("img1").src = img_image;
	document.getElementById("d1").innerHTML="You pressed an other";
	
}
	
