// exercice  1
const button1 = document.querySelector("button-id")
const button2 = document.querySelector("button-stop-id")


 function firstAction ()  {
   console.log("start")
   
 }

 function secondAction () {
    console.log("end")
 }



 function clock() {
   let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" +d.getSeconds())
 }


  firstAction()
  secondAction() 
  clock()

 

 // exercice  2 
const button1 = document.querySelector("button-id")
const button2 = document.querySelector("button-stop-id")


 function firstAction ()  {
   console.log("start")

 }

   function clock() {
     setTimeout(()=> {
   let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" +d.getSeconds())
 },3000);
 
    }
   

 function secondAction () {
    console.log("end")
 }



  firstAction()
  clock()
  secondAction ()

  //  exercice 3 

const button1 = document.querySelector("button-id")
const button2 = document.querySelector("button-stop-id")


  function consoleLog() {
   console.log("start")
   let currentime = Date();
   setTimeout(()=> {
     console.log(currentime)
   },3000);
   console.log ("end ")
  }
   consoleLog()
 

setInterval(myFunction2, 1000);

 function myFunction2() {
  let d = new Date();
  document.getElementById("clock").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
   d.getSeconds();
}

exercice 4

const button1 = document.querySelector("button-id")
const button2 = document.querySelector("button-stop-id")

function display() {
   document.getElementById("start").innerHTML= "start"
   document.getElementById("end").innerHTML= "end"
}

function random1 () {

let random1 = Math.floor(Math.random()*101);
setTimeout(()=> {
document.getElementById("random1").innerHTML= random1 
},3000);

}


function random2 () {

let random2 = Math.floor(Math.random()*101);
setTimeout(()=> {
document.getElementById("random2").innerHTML= random2
},5000);

}


function random3 (){

let random3 = Math.floor(Math.random()*101);
setTimeout(()=>{
document.getElementById("random3").innerHTML= random3
},7000);

}

display();
random1();
random2();
random3();


const button1 = document.querySelector("button-id")
const button2 = document.querySelector("button-stop-id")

let inputElement = document.getElementById("input")
let divElement = document.getElementById("main-container")

function onload()
{
setInterval(getRandomNumber,1000);
}

function getRandomNumber() 
{
let random =Math.floor(Math.random()*inputElement.value
) 
console.log(random)
divElement.innerHTML=random
}


// exercice 6 

const button1 = document.querySelector("button-id")
const button2 = document.querySelector("button-stop-id")

let inputElement = document.getElementById("input")
let divElement = document.getElementById("main-container")

function onload()
{
setInterval(setBg,1000);
}
const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

genNew.addEventListener("click", setBg);
setBg();
}

// autre methode 

function colorChange()
{
let num = "123456789ABCDEF";
let rgb="#" ;

for (let i=0, i<6; i++) {
  rgb=rgb+num[Math.floor(Math.random()*num.length)]
}
document.body.style.backgroundColor= rgb;
}
setInterval(colorChange,1000)
 

   
   
    


