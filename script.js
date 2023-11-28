let time=60;
let score=0;
var valuern=0;

function makeBubble(){
    let clutter="";

    for(let i=1;i<=75;i++)
    {
        let no=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${no}</div>`;
    }
    document.querySelector(".pbtm").innerHTML=clutter;
}

function runTimer(){
    var endtime=setInterval(function(){
        if(time>0){
        time--;
        document.querySelector("#timercontent").textContent=time;
        }
        else
        {
            clearInterval(endtime);
            document.querySelector(".pbtm").innerHTML=`<h1>Game Over</h1>`
        }
    },1000);
}

function getNewHit()
{
    valuern=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=valuern;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector(".pbtm").addEventListener("click",function(e){
    var clickedNumber=Number(e.target.textContent);
    if(clickedNumber===valuern){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
makeBubble();
runTimer();