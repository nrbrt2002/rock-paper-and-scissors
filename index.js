const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;


choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));


function computerTurn(){
    const randomNum = Math.floor(Math.random() * 3)+1;

    switch(randomNum){
        case 1:
            computer = "✊";
            break;
        case 2:
            computer = "🖐️";
            break;
        case 3:
            computer = "✌️";
            break;
    }
}

function checkWinner(){
    if(player === computer){
        return "Draw!"
    }else if(computer === "✊"){
        return (player == "🖐️")?"You WIN!":"YOU LOSE!"
    }else if(computer === "🖐️"){
        return (player == "✌️")?"You WIN!":"YOU LOSE!"
    }else if(computer === "✌️"){
        return (player == "✊")?"You WIN!":"YOU LOSE!"
    }
}