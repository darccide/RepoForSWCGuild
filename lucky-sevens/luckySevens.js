function playGame() {
	startBetNum = Number(document.forms['luckySevens']['startBetNum'].value);

	if (startBetNum <= 0) {
		alert('Starting but must be greater than zero.');
		document.forms['luckySevens']['startBetNum'].value = '';
		document.forms['luckySevens']['startBetNum'].focus();
		return false;
	}

	var winningArray = [startBetNum];
	var rollCounter = 0;
	for (var playMoney = startBetNum; playMoney >= 1; rollCounter++) {
		diceOne = Math.ceil(Math.random() * (1 + 6 - 1));
		diceTwo = Math.ceil(Math.random() * (1 + 6 - 1));

		if (Number(diceOne + diceTwo) == 7) {
			playMoney += 4;
			winningArray[winningArray.length] = playMoney;
		} else {
			playMoney--;
			winningArray[winningArray.length] = playMoney;
		}
	}

	var maxWon = 0;

	for (var indexCounter = 0; indexCounter < winningArray.length; indexCounter++) {
		if (winningArray[indexCounter] > maxWon) {
			maxWon = winningArray[indexCounter];
		}
	}

	document.getElementById('results').style.display = 'block';
	document.getElementById('startBet').innerText = '$' + startBetNum.toFixed(2);
	document.getElementById('totalRolls').innerText = rollCounter;
	document.getElementById('highestAmount').innerText = '$' + maxWon.toFixed(2);
	document.getElementById('highestRollCount').innerText = winningArray.indexOf(maxWon);
	document.getElementById('submitButton').innerText = 'Play Again';
	document.forms['luckySevens']['startBetNum'].focus();
	return false;
}
