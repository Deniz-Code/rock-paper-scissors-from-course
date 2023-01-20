//1.define any variables used to track the state of the game
//user choice
//computers choice
//win/lose/tie message

//2.
//choices(rock paper scissors)
//a dom element to display messages

//3.Handle a player clicking a button

//4.handle generating random selection for the computer player

//5.compare the player choice to the computer choice

//6.win/lose/tie message 
//
//
//
//==================constants==================
const choices = ["rock", "paper", "scissors"];
//===========================Variables====================================
let playerChoice;
let computerChoice;
let msg;

//===========================cached element references==================
const resultDisplayEl = document.getElementById("result-display");

//==================event listeners====================================
document.getElementById("rock").addEventListener("click",play)
document.getElementById("paper").addEventListener("click",play)
document.getElementById("scissors").addEventListener("click",play)

//adds a event listener on every button 
// document.querySelectorAll("button").forEach(function(button){
//   button.addEventListener("click",play)
// })
//==================functions=============================================
function play(event){
  console.dir(event.target);
  getPlayerChoice(event)
  getComputerChoice()
  console.log(computerChoice);
  compare();
  console.log(msg)
  render(event)
}
function getPlayerChoice(event){
  console.log("getPlayerChoice invocked! event:",event);
  playerChoice=event.target.id
console.log("player Choice :",playerChoice);
}

function getComputerChoice() {
  const randomIndex=Math.floor(Math.random()*choices.length)
  computerChoice=choices[randomIndex]
  
}
function compare(){
  if (playerChoice===computerChoice){
    msg="You tied lol"
  }
  else if(playerChoice===choices[0]&& computerChoice===choices[2]){
    msg="You won EzPz"
  }
  else if(playerChoice===choices[1]&& computerChoice===choices[0]){
    msg="You won EzPz"
  }
  else if(playerChoice===choices[2]&& computerChoice===choices[1]){
    msg="You won EzPz"
  }
  else {
    msg="You lost to a computer,yikes."
  }
}

function render() {
  resultDisplayEl.textContent=`You chose ${playerChoice} and the computer chose ${computerChoice}.  ${msg}`
  
}