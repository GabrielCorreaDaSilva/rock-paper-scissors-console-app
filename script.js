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

function playRound(computerChoice, humanChoice, computerScore, humanScore)
 {
    console.clear();
    console.log(
        `Computer choice: ${computerChoice} | Human choice: ${humanChoice} `);

    if(computerChoice === humanChoice) {
        console.log(`Draw! ${computerChoice} vs ${humanChoice}`);
    } else if(
    (humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'scissors' && computerChoice === 'paper') || 
    (humanChoice === 'paper' && computerChoice === 'rock')) {
        console.log(`Player win! ${humanChoice} beats ${computerChoice}`);
        return 'player';
    } else {
        console.log(`Computer win! ${computerChoice} beats ${humanChoice}`);
        return 'computer'
    }
}

function playGame() {
    let rounds = 5;
    let computerScore = 0;
    let humanScore = 0;
    
    while(rounds > 0) {
        
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
    
        let winner = playRound(computerSelection, humanSelection, computerScore, humanScore);
        if(winner === 'player') humanScore++;
        else if(winner === 'computer') computerScore++;
        rounds -= 1;
        console.log(`Computer score: ${computerScore} | Human score: ${humanScore} | Rounds remaining: ${rounds}`);
    }

}

playGame();

