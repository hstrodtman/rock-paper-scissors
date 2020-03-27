let outcome;

//plays one round of rock, paper, scissors

window.addEventListener("load", function() {
    let compSelect = document.getElementById("computer"); 
    let playerChoiceButton = document.getElementById("choice");  

        let random = Math.floor(Math.random() * 3); 
        if (random===0) {
            outcome ='rock'; 
            } else if (random===1) {
            outcome ='paper'; 
            } else {
            outcome='scissors';
        }
        // return outcome; 

playerChoiceButton.onclick = function(){

    let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase(); 

    let outcomeTextLocation = document.getElementById("outcome"); 
  
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
}


 }); 




 