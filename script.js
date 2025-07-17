const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

console.log(`Computer choice: ${computerChoice}`);
console.log(`Human choice: ${humanChoice}`);


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