let gameSeq=[];
let userSeq=[];
 let body=document.querySelector("body");
let btns=["yellow","red","purple"
,"green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let highscore=0;


document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
    console.log("game started");

    levelUp();
}   
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");},200);
    };

function levelUp(){
    h3.innerText="";
     userSeq=[];
    level++;
    console.log("game current level",level);
    h2.innerText=`Level ${level}`;
    //random btn choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);// ithil ".${randColor}"... class Name choose cheyyan eg:.yellow
    gameSeq.push(randColor);
    console.log("##GameSeq:",gameSeq);
     btnFlash(randBtn);

}
function checkAns(idx){

    
    if(userSeq[idx]===gameSeq[idx]){
    
        if(userSeq.length==gameSeq.length){
        
        setTimeout(levelUp,1000);
       
        }

    }
    else{
        h2.innerHTML=`GAME OVER! <BR><I><br>press any key to restart<br></I>
      <br><b>YOUR SCORE<BR> ${level-1}</b>`;
        backgroundFlash();
        let score=level;
        highScore(score);
        reset();

    }
}
function btnPress(){
    let btn=this;// ithu ee fn il pass aakunn argument btn il store aakunn
    btnFlash(btn);
    console.log(this);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log("userSeq:",userSeq);
    checkAns(userSeq.length-1);

}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    level=0;
     gameSeq=[];
    userSeq=[];
    started=false;
}
function backgroundFlash(){
    body.classList.add("reset");
    setTimeout(function(){
        body.classList.remove("reset");},200);}

function highScore(score){
    if(score>highscore){
    highscore=score-1;
    };
    h3.innerHTML=`HIGH SCORE=<b>${highscore}</b>`
}