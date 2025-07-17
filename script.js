function getComputerChoice() {
    switch(Math.floor(Math.random() * 3) + 1) {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
    }
}

function getHumanChoice() {
    const anwser = prompt('What do chose: Rock, Paper or Scissors? ')
    return anwser.toLowerCase();
}

function playRound(computerChoice, humanChoice)
 {
    console.log(`Computer choice: ${computerSelection} | Human choice: ${humanSelection}`);

    if(computerChoice === humanChoice) {
        console.log(`Draw! ${computerChoice} vs ${humanChoice}`);
    } else if(humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`Player win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }else if(humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`Player win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`Player win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else {
        console.log(`Computer win! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
    
    console.log(`Computer score: ${computerScore} | Human score: ${humanScore} `);
}



let computerScore = 0;
let humanScore = 0;
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();



playRound(computerSelection, humanSelection);

