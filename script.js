let timer=10;
let score=0;
let rn=0;

function Score(){
    score +=10;
    document.querySelector("#score").textContent=score;
}

function Makebubble(){
    let rn="";

for(i=1;i<=102;i++){
    let num = Math.floor(Math.random()*10)
    rn += `<div class="bbl">${num}</div>`;
}

document.querySelector('.main').innerHTML = rn
}

function Timer(){
    
    function counter(){
        let tmr = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#ctr").textContent=timer
        }
        else{
            clearInterval(tmr)
            document.querySelector(".main").innerHTML=`<h1>&nbsp;&nbsp;Game Over</br>Your Score is ${score}</h1>`;
        }
    }, 1000)
}

counter()
}

function Hit()
{
rn = Math.floor(Math.random()*10)
document.querySelector("#hit").textContent=rn;

}

document.querySelector(".main").addEventListener("click",function(dets){
    let cn = (Number(dets.target.textContent))
    if(rn === cn){
        Score()
        Hit()
        Makebubble()
    }
})

Hit()
Makebubble()
Timer()