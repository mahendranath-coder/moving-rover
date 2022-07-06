canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

images_array=["1.jpg","2.jpg","3.jpg","4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
r_width=100;
r_height=90;

bg_img=images_array[random_number];
console.log*("background image-"+bg_img);

r_img="rover.png";

r_x=10;
r_y=10;

function add(){
    bg_imgtag=new Image();
    bg_imgtag.onload=uploadBg;
    bg_imgtag.src=bg_img;

    r_imgtag=new Image();
    r_imgtag.onload=uploadR;
    r_imgtag.src=r_img;
}

function uploadBg(){
    ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
}

function uploadR(){
    ctx.drawImage(r_imgtag,r_x,r_y,r_width,r_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    key_p=e.keyCode;

    console.log(key_p);

    if(key_p=='38'){
        up();
        console.log("up");
    }
    if(key_p=='40'){
        down();
        console.log("down");
    }
    if(key_p=='37'){
        left();
        console.log("left");
    }
    if(key_p=='39'){
        right();
        console.log("right");
    }
}

function up(){
    if(r_y>=0){
        r_y=r_y-10;
        console.log("when up arrow is pressed,x="+r_x+",y="+r_y);
uploadBg();
uploadR();

    }
}


function down(){
    if(r_y<=500){
        r_y=r_y+10;
        console.log("when down arrow is pressed,x="+r_x+",y="+r_y);
uploadBg();
uploadR();

    }
}

function left(){
    if(r_x>=0){
        r_x=r_x-10;
        console.log("when left arrow is pressed,x="+r_x+",y="+r_y);
uploadBg();
uploadR();

    }
}


function right(){
    if(r_x<=700){
        r_x=r_x+10;
        console.log("when right arrow is pressed,x="+r_x+",y="+r_y);
uploadBg();
uploadR();

    }
}