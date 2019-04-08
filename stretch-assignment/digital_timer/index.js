
const ten = document.querySelector("#msTens")
const hundreds = document.querySelector("#msHundreds")
const secondOnes = document.querySelector("#secondOnes")

let ml = 0
let hundredMl = 0
let secondMl = 0

let secondsCounter = 0


let start = window.setInterval(loopToTen, 10)
function loopToTen(){
ml = ml + 1
console.log(ml)
if(ml === 10){
    ml = 0
}

ten.textContent = ml

if(ml % 10 === 0){

    hundredMl = hundredMl + 1
    hundreds.textContent = hundredMl
    if(hundredMl === 9){
        hundredMl = 0
    }
}

if(ml)

secondMl = secondMl + 1

if(secondMl % 100 === 0){
    secondsCounter = secondsCounter + 1
    secondOnes.textContent = secondsCounter
    

}



}


  



setTimeout(stop_interval, 10000);
function stop_interval(){
  clearInterval(start);
}











