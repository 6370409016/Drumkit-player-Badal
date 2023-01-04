var numberOfDrums = (document.querySelectorAll(".drum")).length;
/* here we just store the length of array which contains position
or number of all buttons */

/* here for loop is just add addEventListener into every buttons just after when the page load so when
we click any button it show the messege because already that function added to all buttons */
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonsInnerHtml = this.innerHTML; // here we store all the key included in buttons
                                           // here .this refers to the entire element of clicked button
  makeSound(buttonsInnerHtml);
   buttonAnimation(buttonsInnerHtml);
  });

}

document.addEventListener("keydown",function(event){ // here we captured the key from user and reponse according that key
   makeSound(event.key);
   buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    default:
    alert("You clicked wrong key");

  }
}

function buttonAnimation(currentKey){  // here we choosed the key
   var selectedKey=document.querySelector("."+currentKey); // here we just choosed entire button associate with that keydown
   selectedKey.classList.add("pressed");        // here we just add pressed class to the current key

   setTimeout(function(){         // here we setTimeout function to remove the pressed class after 100 milisecond
     selectedKey.classList.remove("pressed");
   }, 100);
}
