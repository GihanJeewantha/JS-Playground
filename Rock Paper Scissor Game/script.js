let playGame = confirm("Shall we play Rock, Paper, Scissor ?");

if(playGame){
    let playerChoice = prompt("Please Enter : Rock, Paper, Scissor.");

    if(playerChoice) {
        let playerOne = playerChoice.trim().toLocaleLowerCase();
        if(
            playerOne === "rock" ||
            playerOne === "papre" ||
            playerOne === "scissor"
        ) {
            let computerChoice = Math.floor(Math.random()*3 + 1);
            let computer =
            computerChoice === 1
            ? "rock"
            : computerChoice === 2
            ? "paper"
            : "scissor";

            let result =
            playerOne === computer
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissor"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "scissor" && computer === "rock"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;

        alert(result);
        let playAgain = confirm("play Again ?");
        playAgain ? location.reload() : alter ("OK, thanks for playing !");
        } else {
            alert("You didn't enter rock, paper, scissor.");
        }
    } else  {
        alter ("I guess you change your mind. maybe next time");
    }
} else {
    alert("ok, maybe next time.");
}