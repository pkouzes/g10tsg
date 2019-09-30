function gameStart(){
        	var initialBet = document.forms["game"]["initialBet"].value;
          var roll1;
        	var roll2;
        	var total;
          var pot = initialBet;
        	var winnings = 0;
        	var rolls = 0;
        	var maxRoll = 0;

function rollDice() {
return Math.floor(Math.random() * 6) + 1;
}
  if(pot<1){
		alert("Please bid $1 or greater to play!");
	}


	else{
    		while(pot >= 1){
    			roll1 = rollDice();
    			roll2 = rollDice();
    			total = roll1 + roll2;
    			rolls++;
    			if(total != 7){
    				pot--;
    				console.log("lost");
    			}
    			else{
    				pot += 4;
    				if(winnings < pot){
    					winnings += (pot-winnings);
    					maxRoll = rolls;
    				}
    				console.log("win");
			}
		}
	}
	document.getElementById("gameEnd").style.display = "block";
	document.getElementById("sbet").innerText = initialBet;
	document.getElementById("numRolls").innerText = rolls;
	document.getElementById("winnings").innerText = winnings;
	document.getElementById("maxRoll").innerText = maxRoll;
  document.getElementById("submit").innerText = "Roll Again?";
	return false;
}
