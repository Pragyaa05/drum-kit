function handleClick(){
alert("I got clicked!");

}
var i;
for(i=0;i<7;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var buttonInnerHTML=this.innerHTML;
   switch(buttonInnerHTML){
    case "w": var audio=new Audio("sounds/tom-1.mp3"); 
    audio.play();
    this.style.color="white";
    break;
    case "a": var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    this.style.color="white";
    break;
    case "s": var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    this.style.color="white";
    break;
    case "d": var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    this.style.color="white";
    break;
    case "j":var audio=new Audio("sounds/snare.mp3");
    audio.play();
    this.style.color="white";
    break;
    case "k": var audio=new Audio("sounds/crash.mp3");
    audio.play();
    this.style.color="white";
    break;  
    case "l": var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    this.style.color="white";
    break;
    default: console.log(buttonInnerHTML);
   }
   buttonAnimation(buttonInnerHTML);
});
}
document.addEventListener("keypress",function(event){
    var key=event.key;
    switch(key)
    {
     case "w": var audio=new Audio("sounds/tom-1.mp3"); 
    audio.play();
    
    break;
    case "a": var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    
    break;
    case "s": var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
  
     break;
    case "d": var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    
    break;
    case "j":var audio=new Audio("sounds/snare.mp3");
    audio.play();
   
    break;
    case "k": var audio=new Audio("sounds/crash.mp3");
    audio.play();
    
    break;  
    case "l": var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    
    break;
    default: alert(key+" is not a valid key");
    }
    buttonAnimation(key);

})
function buttonAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("."+currentKey).classList.remove("pressed");
    
  }, 100);
}