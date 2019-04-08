
const ten = document.querySelector("#msTens")
const hundreds = document.querySelector("#msHundreds")

let ml = 0
let hundredMl = 0
let hundredCounter = 0


let start = window.setInterval(loopToTen, 10)
function loopToTen(){
ml = ml + 1
hundredMl = hundredMl + 1
if(ml === 10){
    ml = 0
}

if(ml === 100){
    hundredMl + 1
    

}



  
ten.textContent = ml

}
setTimeout(stop_interval, 10000);
function stop_interval(){
  clearInterval(start);
}











