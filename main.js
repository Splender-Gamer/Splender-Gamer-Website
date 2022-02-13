var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas1 = document.getElementById("myCanvas1");
ctx = canvas1.getContext("2d");
color = "black";
width_of_line = 1;

//Computer version beta v0.96
canvas1.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}
canvas1.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas1.offsetLeft;
    current_position_of_y = e.clientY - canvas1.offsetTop;

    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}
canvas1.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}
canvas1.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseLeave";
}
//mobile version beta v0.96

//Changing canvas size depending on device
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height -300;
if(width < 992)
{
    document.getElementById("myCanvas1").width = new_width;
    document.getElementById("myCanvas1").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas1.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    //Additional activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Additional activity ends
    last_position_of_x = e.touches[0].clientX - canvas1.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas1.offsetTop;

}
canvas1.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX - canvas1.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas1.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates =");
    console.log("x =" + last_position_of_x + "y =" + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates =");
    console.log("x =" + current_position_of_touch_x + "y =" + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}

function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}
// Minecraft beta v0.96
var canvas2 = new fabric.Canvas("myCanvas2")

Player_x = 10;
Player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set(
            {
                top:Player_y,
                left:Player_x
            }
        );
        canvas2.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set(
            {
                top:Player_y,
                left:Player_x
            }
        );
        canvas2.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift key pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("m and shift key pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '84')
    {
        new_image("trunk.jpg");
        console.log("t");
    }
    if(keyPressed == '68')
    {
        new_image("dark_green.png");
        console.log("d");
    }
    if(keyPressed == '76')
    {
        new_image("light_green.png");
        console.log("l");
    }
    if(keyPressed == '71')
    {
        new_image("ground.png");
        console.log("g");
    }
    if(keyPressed == '87')
    {
        new_image("wall.jpg");
        console.log("w");
    }
    if(keyPressed == '89')
    {
        new_image("yellow_wall.png");
        console.log("y");
    }
    if(keyPressed == '82')
    {
        new_image("roof.jpg");
        console.log("r");
    }
    if(keyPressed == '67')
    {
        new_image("cloudy.jpg");
        console.log("c");
    }
    if(keyPressed == '85')
    {
        new_image("unique.png");
        console.log("u");
    }
}
function up()
{
    if(Player_y >0)
    {
        Player_y = Player_y - block_image_height;
        console.log("block image height ="+ block_image_height);
        console.log("when up arrow is pressed, x = "+ Player_x+"y = "+ Player_y);
        canvas2.remove(player_object);
        player_update();
    }
}
function down()
{
    if(Player_y <500)
    {
        Player_y = Player_y + block_image_height;
        console.log("block image height ="+ block_image_height);
        console.log("when down arrow is pressed, x = "+ Player_x+"y = "+ Player_y);
        canvas2.remove(player_object);
        player_update();
    }
}
function left()
{
    if(Player_x >0)
    {
        Player_x = Player_x - block_image_height;
        console.log("block image height ="+ block_image_height);
        console.log("when left arrow is pressed, x = "+ Player_x+"y = "+ Player_y);
        canvas2.remove(player_object);
        player_update();
    }
}
function right()
{
    if(Player_x <850)
    {
        Player_x = Player_x + block_image_height;
        console.log("block image height ="+ block_image_height);
        console.log("when right arrow is pressed, x = "+ Player_x+"y = "+ Player_y);
        canvas2.remove(player_object);
        player_update();
    }
}