var timer = 30;
var score = 0;
var newhit  ;
function makescore(){
    score =score+ 10;
    document.querySelector("#scorevar").textContent = score;
}
function makebubble() {
  var clutter = "";
  for (var i = 0; i <= 197; i++) {
    var num = Math.floor(Math.random() * 10);
    clutter += `<div class="bbble">${num}</div>`;
  }
  document.querySelector(".pannelbot").innerHTML = clutter;
}
function ruunTimer(){

    var timeclr = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#time").textContent = timer;
        }
        else{
            clearInterval(timeclr);
            document.querySelector(".pannelbot").innerHTML=`<h1 style =" font-size: 80px font-family: 'Noto Sans', sans-serif;">Game Over </h1>
             
            <h2 style =" font-size: 30px  font-family: 'Noto Sans', sans-serif" >Your Score is ${score}</h2>`;
        }
    } , 1000);
}

function getnewhit(){
      newhit = Math.floor(Math.random()*10);
    document.querySelector("#hitvar").textContent = newhit;
}

document.querySelector(".pannelbot")
.addEventListener("click" ,function(dets){
    
    var clicknuum = (Number(dets.target.textContent));
   
    if(clicknuum === newhit){
        makescore();
       
        getnewhit();
        makebubble();
    }
})


// window.addEventListener('keydown', (event) => {
//     if (event.code === 'Enter') {
//       // do your stuff
//     }
//   });

makebubble();
ruunTimer();
getnewhit();