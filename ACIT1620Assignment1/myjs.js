var botImageBotCoor = 0;
var botImageLeftCoor = 330;
var botImageHeight = 180;
var botImageWidth=240;

var topImageTopCoor = 0;
var topImageLeftCoor = 330;
var topImageHeight = 180;
var topImageWidth=240;

var leftImageBotCoor = 210;
var leftImageLeftCoor = 0;
var leftImageHeight = 180;
var leftImageWidth=240;

var rightImageBotCoor = 210;
var rightImageRightCoor = 0;
var rightImageHeight = 180;
var rightImageWidth=240;

var controlPanelBotCoor = 5;

/*document.getElementById("text").innerHTML = "Wow"*/

var mode = 0;

document.getElementById("barButton").addEventListener("click", function(){
    if (controlPanelBotCoor == 5){
        controlPanelBotCoor = -100;
    }
    else{
        controlPanelBotCoor = 5;
    }
    document.getElementById("controlPanelBot").style.bottom = controlPanelBotCoor+"px";
});

document.getElementById("reset").addEventListener("click", function(){
    switch(mode){
        case 0:
            document.getElementById("imgSpaceBot").style.bottom = "0px";
            document.getElementById("imgSpaceBot").style.left = "330px";
            document.getElementById("imgSpaceBot").style.width = "240px";
            document.getElementById("imgSpaceBot").style.height = "180px";
            botImageBotCoor = 0;
            botImageLeftCoor = 330;
            botImageHeight = 180;
            botImageWidth=240;
            break;
        case 1:
            document.getElementById("imgSpaceLeft").style.bottom = "210px";
            document.getElementById("imgSpaceLeft").style.left = "0px";
            document.getElementById("imgSpaceLeft").style.width = "240px";
            document.getElementById("imgSpaceLeft").style.height = "180px";
            leftImageBotCoor = 210;
            leftImageLeftCoor = 0;
            leftImageHeight = 180;
            leftImageWidth=240;
            break;
        case 2:
            document.getElementById("imgSpaceRight").style.bottom = "210px";
            document.getElementById("imgSpaceRight").style.right = "0px";
            document.getElementById("imgSpaceRight").style.width = "240px";
            document.getElementById("imgSpaceRight").style.height = "180px";
            rightImageBotCoor = 210;
            rightImageRightCoor = 0;
            rightImageHeight = 180;
            rightImageWidth=240;
            break;
        case 3:
            document.getElementById("imgSpaceTop").style.top = "0px";
            document.getElementById("imgSpaceTop").style.left = "330px";
            document.getElementById("imgSpaceTop").style.width = "240px";
            document.getElementById("imgSpaceTop").style.height = "180px";
            topImageTopCoor = 0;
            topImageLeftCoor = 330;
            topImageHeight = 180;
            topImageWidth=240;
            break;
    }
});

document.getElementById("imgSpaceBot").addEventListener("click", function(){
   mode = 0; 
   document.getElementById("text").innerHTML = "[Pic: Bot]";
   document.getElementById("text").style.width = "65px";
   document.getElementById("panelThumb1").src = "Images/BotImg/img1.jpg"
   document.getElementById("panelThumb2").src = "Images/BotImg/img2.jpg"
   document.getElementById("panelThumb3").src = "Images/BotImg/img3.jpg"
});

document.getElementById("imgSpaceLeft").addEventListener("click", function(){
   mode = 1; 
   document.getElementById("text").innerHTML = "[Pic: Left]";
   document.getElementById("text").style.width = "69px";
   document.getElementById("panelThumb1").src = "Images/LeftImg/img1.jpg"
   document.getElementById("panelThumb2").src = "Images/LeftImg/img2.jpg"
   document.getElementById("panelThumb3").src = "Images/LeftImg/img3.jpg"
});

document.getElementById("imgSpaceRight").addEventListener("click", function(){
   mode = 2; 
   document.getElementById("text").style.width = "77px";
   document.getElementById("text").innerHTML = "[Pic: Right]";
   
   document.getElementById("panelThumb1").src = "Images/RightImg/img1.jpg"
   document.getElementById("panelThumb2").src = "Images/RightImg/img2.jpg"
   document.getElementById("panelThumb3").src = "Images/RightImg/img3.jpg"
});

document.getElementById("imgSpaceTop").addEventListener("click", function(){
   mode = 3; 
   document.getElementById("text").innerHTML = "[Pic: Top]";
   document.getElementById("text").style.width = "67px";
   document.getElementById("panelThumb1").src = "Images/TopImg/img1.jpg"
   document.getElementById("panelThumb2").src = "Images/TopImg/img2.jpg"
   document.getElementById("panelThumb3").src = "Images/TopImg/img3.jpg"
});

document.getElementById("botImgBox1").addEventListener("click",function(){
    switch(mode){
        case 0:
            document.getElementById("botImage").src=("Images/BotImg/img1.jpg");
            break;
        case 1:
            document.getElementById("leftImage").src=("Images/LeftImg/img1.jpg");
            break;
        case 2:
            document.getElementById("rightImage").src=("Images/RightImg/img1.jpg");
            break;
        case 3:
            document.getElementById("topImage").src=("Images/TopImg/img1.jpg");
            break;
    }
   
});

document.getElementById("botImgBox2").addEventListener("click",function(){
    switch(mode){
        case 0:
            document.getElementById("botImage").src=("Images/BotImg/img2.jpg");
            break;
        case 1:
            document.getElementById("leftImage").src=("Images/LeftImg/img2.jpg");
            break;
        case 2:
            document.getElementById("rightImage").src=("Images/RightImg/img2.jpg");
            break;
        case 3:
            document.getElementById("topImage").src=("Images/TopImg/img2.jpg");
            break;
    }
   
});

document.getElementById("botImgBox3").addEventListener("click",function(){
    switch(mode){
        case 0:
            document.getElementById("botImage").src=("Images/BotImg/img3.jpg");
            break;
        case 1:
            document.getElementById("leftImage").src=("Images/LeftImg/img3.jpg");
            break;
        case 2:
            document.getElementById("rightImage").src=("Images/RightImg/img3.jpg");
            break;
        case 3:
            document.getElementById("topImage").src=("Images/TopImg/img3.jpg");
            break;
    }
});

document.getElementById("botLeftCtrl").addEventListener("click",function(){
    switch(mode){
        case 0:
            botImageLeftCoor -= 10;
            document.getElementById("imgSpaceBot").style.left = botImageLeftCoor + "px";
            break;
        case 1:
            leftImageLeftCoor -= 10;
            document.getElementById("imgSpaceLeft").style.left =leftImageLeftCoor + "px";
            break;
        case 2:
            rightImageRightCoor += 10;
            document.getElementById("imgSpaceRight").style.right = rightImageRightCoor + "px";
            break;
        case 3:
            topImageLeftCoor -= 10;
            document.getElementById("imgSpaceTop").style.left = topImageLeftCoor + "px";
            break;
        default:
            break;
    }
   
});

document.getElementById("botRightCtrl").addEventListener("click",function(){
    switch(mode){
        case 0:
            botImageLeftCoor += 10;
            document.getElementById("imgSpaceBot").style.left = botImageLeftCoor + "px";
            break;
        case 1:
            leftImageLeftCoor += 10;
            document.getElementById("imgSpaceLeft").style.left = leftImageLeftCoor + "px";
            break;
        case 2:
            rightImageRightCoor -= 10;
            document.getElementById("imgSpaceRight").style.right = rightImageRightCoor + "px";
            break;
        case 3:
            topImageLeftCoor += 10;
            document.getElementById("imgSpaceTop").style.left = topImageLeftCoor + "px";
            break;
    }
   
});

document.getElementById("botUpCtrl").addEventListener("click",function(){
    switch(mode){
        case 0:
            botImageBotCoor += 10;
            document.getElementById("imgSpaceBot").style.bottom = botImageBotCoor + "px";
            break;
        case 1:
            leftImageBotCoor += 10;
            document.getElementById("imgSpaceLeft").style.bottom = leftImageBotCoor + "px";
            break;
        case 2:
            rightImageBotCoor += 10;
            document.getElementById("imgSpaceRight").style.bottom = rightImageBotCoor + "px";        
            break;
        case 3:
            topImageTopCoor -= 10;
            document.getElementById("imgSpaceTop").style.top = topImageTopCoor + "px";       
            break;
    }
    
});

document.getElementById("botDownCtrl").addEventListener("click",function(){
    switch(mode){
        case 0:
            botImageBotCoor -= 10;
            document.getElementById("imgSpaceBot").style.bottom = botImageBotCoor + "px";
            break;
        case 1:
            leftImageBotCoor -= 10;
            document.getElementById("imgSpaceLeft").style.bottom = leftImageBotCoor + "px";        
            break;
        case 2:
            rightImageBotCoor -= 10;
            document.getElementById("imgSpaceRight").style.bottom = rightImageBotCoor + "px";        
            break;
        case 3:
            topImageTopCoor += 10;
            document.getElementById("imgSpaceTop").style.top = topImageTopCoor + "px";        
            break;
    }

});

document.getElementById("botEnlargeCtrl").addEventListener("click",function(){
    switch(mode){
        case 0:
            botImageHeight += 3;
            botImageWidth += 4;
            document.getElementById("imgSpaceBot").style.height = botImageHeight + "px";
            document.getElementById("imgSpaceBot").style.width = botImageWidth + "px";
            break;
        case 1:
            leftImageHeight += 3;
            leftImageWidth += 4;
            document.getElementById("imgSpaceLeft").style.height = leftImageHeight + "px";
            document.getElementById("imgSpaceLeft").style.width = leftImageWidth + "px";        
            break;
        case 2:
            rightImageHeight += 3;
            rightImageWidth += 4;
            document.getElementById("imgSpaceRight").style.height = rightImageHeight + "px";
            document.getElementById("imgSpaceRight").style.width = rightImageWidth + "px";        
            break;
        case 3:
            topImageHeight += 3;
            topImageWidth += 4;
            document.getElementById("imgSpaceTop").style.height = topImageHeight + "px";
            document.getElementById("imgSpaceTop").style.width = topImageWidth + "px";        
            break;
    }

});

document.getElementById("botMinimizeCtrl").addEventListener("click",function(){
    switch(mode){
        case 0:
            botImageHeight -= 3;
            botImageWidth -= 4;
            document.getElementById("imgSpaceBot").style.height = botImageHeight + "px";
            document.getElementById("imgSpaceBot").style.width = botImageWidth + "px";
            break;
        case 1:
            leftImageHeight -= 3;
            leftImageWidth -= 4;
            document.getElementById("imgSpaceLeft").style.height = leftImageHeight + "px";
            document.getElementById("imgSpaceLeft").style.width = leftImageWidth + "px";        
            break;
        case 2:
            rightImageHeight -= 3;
            rightImageWidth -= 4;
            document.getElementById("imgSpaceRight").style.height = rightImageHeight + "px";
            document.getElementById("imgSpaceRight").style.width = rightImageWidth + "px";        
            break;
        case 3:
            topImageHeight -= 3;
            topImageWidth -= 4;
            document.getElementById("imgSpaceTop").style.height = topImageHeight + "px";
            document.getElementById("imgSpaceTop").style.width = topImageWidth + "px";
            break;
    }

});