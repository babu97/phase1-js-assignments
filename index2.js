
// Write a program that takes the speed of a car as input e.g 80. If the
//  speed is less than 70,it should print “Ok”. Otherwise, for every 5 km/s
//   above the speed limit (70), it should give the driver one demerit point
//    and print the total number of demerit points. For example,
//     if the speed is 80, it should print: “Points: 2”. If the driver 
//     gets more than 12 points, the function should print: “License suspended”.
let  speedInput = document.getElementById("speed")
let results = document.getElementById("result")

function detectSpeed(){
    //Declare Variables BasseSpeed to hold the accepted speed and points to keep track of the points
    let speed = parseFloat(speedInput.value)
    const baseSpeed = 70
     let points = 0
    if (speed <=baseSpeed){
        results.textContent='Speed Ok';
    }else {
       let points = (speed-baseSpeed)/5
      if (points>12){
        results.textContent='Your License has been suspended!'
    
      }else{
        results.textContent=`Points: ${points}`
      }


    }
  
}

const button= document.getElementById("btn")
button.addEventListener("click", detectSpeed )

