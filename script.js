//paper rock scissors using prompt()
let game = ["Rock", "Paper", "Scissors"];
let countComputer = 0 ;
let countHuman = 0;

function getComputerChoice() {
    return game[(Math.floor(Math.random() * game.length))];
};
function playRound(playerSelection, computerSelection) {
     if (computerSelection === "Rock" && playerSelection === "Scissors") {
         ++countComputer;
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
        ++countComputer;
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
       ++countComputer;
    }
     else if (playerSelection === "Rock" && computerSelection === "Scissors") {
       ++countHuman;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
         ++countHuman;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
          ++countHuman;
     }
     else {
         countHuman;
    }
    
};

function gamePaper() {
    for (let i = 0; i < 5; i++) {
    let user = prompt("Paper or Scissors or Rock");
        playRound(user, getComputerChoice());
    }
       if (countComputer > countHuman) {
            console.log("you lost "+countHuman+" "+countComputer)
        } else if (countComputer < countHuman) {
            console.log("you won "+countHuman+" "+countComputer);
        } else {
            console.log("draw"+ countHuman + " "+countComputer);
        }
};
gamePaper();
//Code Academy challenge
// const getUserChoice = (userInput)=>{
//   userInput = userInput.toLowerCase();
//   if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
//     return userInput ;
//   }else {
//     console.log('Error');
//   }
// };
// const getComputerChoice = () =>{ 
//   let number = Math.floor(Math.random() * 3);
//   if(number === 0){
//     return 'rock';
//   }else if(number === 1){
//     return 'paper';
//   }else if(number === 2){
//     return 'scissors';
//   }
// };
// const determineWinner = (userChoice,computerChoice) =>{
//   if(userChoice === 'bomb'){
//     return 'Human Won'
//   }
// if(userChoice === computerChoice){
//   return 'tie';
// }else if(userChoice === 'rock'){
//   if(computerChoice === 'paper'){
//     return 'Computer won';
//   }else {
//     return 'Human won';
//   }
// }else if (userChoice === 'paper'){
// if(computerChoice === 'scissors'){
//   return 'Computer Won';
// }else {
//   return 'Human Won';
// }
// }else if(userChoice === 'scissors'){
//   if(computerChoice === 'rock'){
//     return 'Computer Won' ;
//   }else{
//     return 'Human Won';
//   }
// }
// };
// const playGame = () =>{
// let userChoice = getUserChoice('bomb');
// let computerChoice = getComputerChoice();
// console.log(determineWinner(userChoice,computerChoice));
// };
// playGame();
