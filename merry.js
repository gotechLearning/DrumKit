var numOfButtons=document.querySelectorAll(".song").length;

for(var i=0; i<numOfButtons; i++){
    document.querySelectorAll(".song")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "c":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "h":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "r":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "i":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "s":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case "t":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

        case "m":
        var crash=new Audio("Sounds/crash.mp3");
        crash.play();
        break;

        case "a":
        var snare1=new Audio("sounds/snare.mp3");
        snare1.play();
        break;

        case "ss":
        var newtom2=new Audio("sounds/tom-1.mp3");
        newtom2.play();
        break;

        default: console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);

}