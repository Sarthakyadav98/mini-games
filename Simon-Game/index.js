let userClickedPattern =[];
let level = 0;
let gamePattern = [];
var temp;

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            console.log("Success");
            userClickedPattern = [];
            setTimeout(function(){
                next();
            },1000);
        }

    }
    else{
        console.log("Wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        playSound("wrong");
        startOver();
    }
}


function animatePress(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);
}

function playSound(name){ 
    var audio = new Audio('./sounds/'+name+'.mp3');
    audio.play();
}

function next(){    
    level++;
    $("h1").text("Level "+ level);
    var randomNumber = Math.floor((Math.random()*4));
    
    switch(randomNumber){
        case 0:
            $("#green").addClass("pressed");
            temp = "green";
            break;
        case 1:
            $("#red").addClass("pressed");
            temp = "red";
            break;
        case 2:
            $("#yellow").addClass("pressed");
            temp = "yellow";
            break;
        case 3:
            $("#blue").addClass("pressed");
            temp = "blue";
            break;
    }

        animatePress(temp);
        playSound(temp);
        gamePattern.push(temp);

}

$(".btn").click(function(e){
    var userChosenColour = (e.target.id);
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length-1);

});


$(document).keypress(function(){
    if (level===0){
        next();
    }
});

$("#start-button").click(function(){
    if (level===0){
        next();
    }
});


