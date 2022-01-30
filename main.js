canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_x=30;
car_y=320;
car_width=80;
car_height=170; 
bg_image = "parkingLot.jpg";
greencar_image = "car2.png";



function add() {
	bgobject=new Image();
    bgobject.onload=uploadbg;
	bgobject.src="parkingLot.jpg";
    car_object=new Image();
    car_object.onload=uploadgreencar;
	car_object.src="car2.png";
 }

function uploadbg() {
	ctx.drawImage(bgobject, 0,0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(car_object,car_x,car_y,car_width,car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (car_y>0){
		car_y=car_y-10;
		uploadbg();
		uploadgreencar();
}
}

function down()
{
	if (car_y<500){
		car_y=car_y+10;
		uploadbg();
		uploadgreencar();
}
}

function left()
{
	if (car_x>0){
		car_x=car_x-10;
		uploadbg();
		uploadgreencar();
}
}

function right()
{
	if (car_x<720){
        car_x=car_x+10;
        uploadbg();
        uploadgreencar();
}
}
