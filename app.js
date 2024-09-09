//Set Movement Distance
const moveDistance = 100;
//Set Bounds Of Environment
const environment= document.getElementById("environment");
const environmentHeight = environment.style.height="1000px";
const environmentWidth = environment.style.width="1000px"
//Our Hero (play protagonist) And His Position
const Hero = document.getElementById("player");
let heroXPos = parseInt(Hero.style.left="500px");
let heroYPos = parseInt(Hero.style.top="500px");

//Defining the Arrowkeys
const upArrow = document.getElementById("UP");
const rightArrow = document.getElementById("RIGHT");
const leftArrow = document.getElementById("LEFT");
const downArrow = document.getElementById("DOWN");

const arrowKeys =[upArrow,rightArrow,leftArrow,downArrow];
const arrowText =["Up","Right","Left","Down"];


//Loops Through ArrowKeys And Attaches A ArrowText To The MoveHero Function
function physicalClicks(){
   for(let i = 0;i<arrowKeys.length;i++){
    arrowKeys[i].addEventListener("click",()=>{
        console.log(heroXPos,heroYPos)
        moveHero(arrowText[i])
    })
   }
};

//This Makes Sure We Log Physical Clicks
function moveHero(direction){
    if(direction=="Up"){
        heroYPos-=moveDistance;
        console.log("Moved Up: "+moveDistance);
    }else if(direction=="Right"){
        heroXPos+=moveDistance;
        console.log("Moved Left: "+moveDistance)
    }else if(direction=="Left"){
        heroXPos-=moveDistance;
        console.log("Moved Right: "+moveDistance)
    }else if(direction=="Down"){
        heroYPos+=moveDistance;
        console.log("Moved Down: "+moveDistance);
    }
    Hero.style.left=heroXPos+"px";
    Hero.style.top=heroYPos+"px";
}
if (heroXPos<=0||heroXPos>=1000){
    environment.style.border="5px solid red";
}else{
    environment.style.border="5px solid black";
}

physicalClicks();