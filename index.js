var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png";  // dice1.png- dice6

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6

// document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);




var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// player one

if (randomNumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
    document.getElementsByTagName("h1")[0].style.color = "Green";
}
// player two
else if (randomNumber1 < randomnumber2) {

    document.querySelector("h1").innerHTML= "Player 2 Wins!";
    document.getElementsByTagName("h1")[0].style.color = "yellow";
}
// draw
else {
    document.querySelector("h1").innerHTML = "Draw!";
    document.getElementsByTagName("h1")[0].style.color = "blue";
}