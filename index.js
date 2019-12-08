var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function rollDice(randomNumber, ind) {
    for (var i = 1; i <= 6; i++) {
        if (randomNumber === i) {
            document.querySelector(".img" + ind).setAttribute("src", "images/dice" + i + ".png");
        }
    }
}

rollDice(randomNumber1, 1);
rollDice(randomNumber2, 2);

var text;
if (randomNumber1 > randomNumber2) {
    text = "🚩 Player 1 Won!";
}
else if (randomNumber1 === randomNumber2) {
    text = "Draw!";
}
else {
    text = "Player 2 Won! 🚩";
}

document.querySelector("h1").textContent = text;
