function bajade(buttonInnerHTML){

    switch (buttonInnerHTML){
        case "w":
        var audio = new Audio('./sounds/tom-1.mp3');
        break;

        case "a":
        var audio = new Audio('./sounds/tom-2.mp3');
        break;

        case "s":
        var audio = new Audio('./sounds/tom-3.mp3');
        break;

        case "d":
        var audio = new Audio('./sounds/tom-4.mp3');
        break;

        case "j":
        var audio = new Audio('./sounds/snare.mp3');
        break;

        case "k":
        var audio = new Audio('./sounds/crash.mp3');
        break;

        case "l":
        var audio = new Audio('./sounds/kick-bass.mp3');
        break;

        default:
        console.log(this.innerHTML);
        }



        audio.play();
}


for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){

        var buttonInnerHTML = this.innerHTML;
        bajade(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);   

    });
}


addEventListener("keypress",function(event){
    bajade(event.key.toLowerCase());
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}