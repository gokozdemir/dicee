var firstDice = Math.floor((Math.random() * 6) + 1);
var secondDice = Math.floor((Math.random() * 6) + 1);

for(i = 1; i <= 6; i++){
    if(firstDice == i){
        document.querySelector(".img1").setAttribute("src", "images/dice" + i + ".png");
    }

    if(secondDice == i){
        document.querySelector(".img2").setAttribute("src", "images/dice" + i + ".png");
    }
}

if(firstDice > secondDice){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(firstDice < secondDice){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}