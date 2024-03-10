const imgElement1 = document.querySelector('.img1');
const imgElement2 = document.querySelector('.img2');




// var p1 = prompt("Enter the name of Player 1 ");
// document.querySelectorAll(".dice p")[0].innerHTML=p1;
// var p2 = prompt("Enter the name of Player 2 ");
// document.querySelectorAll(".dice p")[1].innerHTML=p2;


let x = Math.ceil(Math.random()*6);
let y = Math.ceil(Math.random()*6);

let newSrc1 = "images/" + "dice" + x + ".png";
let newSrc2 = "images/" + "dice" + y + ".png";


imgElement1.setAttribute('src', newSrc1);

imgElement2.setAttribute('src', newSrc2);

if (x>y){
    document.querySelector("h1").innerHTML="🚩Player 1 wins! ";
}

else if (x<y){
    document.querySelector("h1").innerHTML="🚩Player 2 wins! ";
}

else{
    document.querySelector("h1").innerHTML="! Draw ! ";

}
