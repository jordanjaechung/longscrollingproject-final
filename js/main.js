// document.getElementById('counter').innerHTML = "hello";



// intialized - set-up variables
var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;
var a = document.getElementById('a');
var b = document.getElementById('b');



counter.innerHTML = "Fallout";

//pseudo code - when the user is scrolling update the variable fromTop and make decisions to change stuff on the page
//window.onscroll is a boolean (yes/no)

window.onscroll = function(){
  //when the user scrolls do all of this ...


var  y  = window.pageYOffset;
  //test if it works
  console.log(y);

  counter.style.top = 550 + y + "px";
  counter.innerHTML = y + "px";
  a.style.top = 50 + y + "px";
  a.innerHTML = y + "px";
//   if (fromTop > 5000){
//     counter.innerHTML ="hello?";
//     counter.style.backgroundColor= "red";
//     // counter.style.backgroundImage= "url(img/yellowsubmarine.png)";
//   }
//     else{
//       counter.innerHTML ="harro";
//       counter.style.backgroundColor= "clear";
//       // counter.style.backgroundImage= "url(img/yellowsubmarine.png)";
//     }
// }


  if (y < 1000) {
    console.log("y < 1000");
    counter.style.backgroundColor = "clear";
    a.style.backgroundColor = "white";
    a.innerHTML ="<h1> Fallout 0 </h1>";
    counter.innerHTML = "Fallout";
    // pride.style.backgroundImage= "url()";

  }else if (y > 1000 && y < 2000) {
    console.log("y > 1000 && y < 2000 ");
    a.innerHTML ="<h1> Fallout 1 </h1>";
    a.style.backgroundColor = "white";
    counter.style.backgroundColor = "purple";
    counter.innerHTML = "Fallout";
  }
}
