let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p= document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
     const choices = ['r', 'p', 's'];
     //consoler.log(Math.random())
     //consoler.log(Math.random()*3)
     const randomNumber = Math.floor(Math.random()*3);
     console.log("Computer ha scelto: " + choices[randomNumber]);
     return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    console.log("USER VINCE.");
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(userChoice) + " batte " + convertToWord(computerChoice) + ", hai vinto! :-)";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove("green-glow")
    }, 300);
}

function lose(userChoice, computerChoice) {
    console.log("COMPUTER VINCE.");
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(computerChoice) + " batte " + convertToWord(userChoice) + ", hai perso! :-(";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove("red-glow")
    }, 300);
}

function draw(userChoice, computerChoice) {
    console.log("PAREGGIO.");
    result_p.innerHTML = "Pareggio!";
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove("grey-glow")
    }, 300);
}

function convertToWord(letter) {
    if (letter == "r") return "Sasso";
    if (letter == "p") return "Carta";
    if (letter == "s") return "Forbici";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("Io ho scelto: " + userChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game('r');
    })

    paper_div.addEventListener('click', function () {
        game('p');
    })

    scissors_div.addEventListener('click', function () {
        game('s');
    })
}

main();