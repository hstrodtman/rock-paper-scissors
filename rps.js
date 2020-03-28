let outcome;

window.addEventListener("load", function() {
    let compSelect = document.getElementById("computer"); 
    let playerChoiceButton = document.getElementById("choice"); 
    let resetButton = document.getElementById('reset');  
    let outcomeTextLocation = document.getElementById("outcome");


playerChoiceButton.onclick = function(){
 
    let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase(); 
    let random = Math.floor(Math.random() * 3); 
         
    if (random===0) {
        outcome ='rock'; 
        } else if (random===1) {
        outcome ='paper'; 
        } else {
        outcome='scissors';
        }
 
    while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){
        playerSelection = prompt('Invalid Entry. You must enter rock, paper, or scissors').toLowerCase(); 
    }
  
    playerChoiceButton.innerHTML = playerSelection; 
    
    compSelect.innerHTML= outcome;

    if (playerSelection==="rock" && outcome==='scissors' || playerSelection===
        'paper' && outcome==='rock' || playerSelection==='scissors' && outcome==='paper') { 
        outcomeMessage = 'Yay, You Won!'; 
        }
     else if (playerSelection===outcome) {
       outcomeMessage = 'Tie, Try Again!'; 
    } else {
        outcomeMessage = "Boo, You Lost!"; 
    }
    outcomeTextLocation.innerHTML = outcomeMessage; 

    resetButton.style.display = "inline"; 

    }  

    
    resetButton.onclick = function() {
        compSelect.innerHTML = "Hidden"; 
        playerChoiceButton.innerHTML= "Make a Selection"; 
        outcomeTextLocation.innerHTML = "Who Will Win?"
    }

 }); 




 