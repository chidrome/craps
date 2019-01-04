
document.addEventListener("DOMContentLoaded", start)


function start(){
	moneyStatusText.innerHTML = 'Current Stack: $' + currentStack;
	if(!pointButton){
		currencyListener();
		addPassLineListeners();
		addAnytimeListeners();
		pointStatus.innerHTML = 'Point is Off';
	}
	else{
		currencyListener();
		addAcrossListeners();
		pointStatus.innerHTML = 'Point is ' + point;
	}
}

function clicked() {
	if(currentStack >= totalBetPlaced && (totalBetPlaced + bet) <= currentStack && bet != 0){
		console.log(totalBetPlaced)
		results.innerHTML = '';
		totalBetPlaced = totalBetPlaced + bet;
		totalBetPlacedText.innerHTML = 'Total Bet Placed: $' + totalBetPlaced;
		if(this.childNodes.length >= 2){
			this.childNodes[0].textContent = this.childNodes[0].textContent;
			switch(true){
				case this.id === 'anySeven':
					anySeven.push(bet);
				break;
				case this.id === 'hardFour':
					hardFour.push(bet);
				break;
				case this.id === 'hardTen':
					hardTen.push(bet);
				break;
				case this.id === 'hardSix':
					hardSix.push(bet);
				break;
				case this.id === 'ace-deuce':
					aceDeuce.push(bet);
				break;
				case this.id === 'snakeEyes':
					snakeEyes.push(bet);
				break;
				case this.id === 'midnight':
					midnight.push(bet);
				break;
				case this.id === 'yo':
					yo.push(bet);
				break;
				case this.id === 'anyCraps':
					anyCraps.push(bet);
				break;
				case this.id === 'dontComeBar':
					dontComeBar.push(bet);
				break;
				case this.id === 'across4':
					across4.push(bet);
				break;
				case this.id === 'across5':
					across5.push(bet);
				break;
				case this.id === 'across6':
					across6.push(bet);
				break;
				case this.id === 'across8':
					across8.push(bet);
				break;
				case this.id === 'across9':
					across9.push(bet);
				break;
				case this.id === 'across10':
					across10.push(bet);
				break;
				case this.id === 'verticalPassLineName':
					verticalPassLineName.push(bet);
				break;
				case this.id === 'verticalDontPassBarName':
					verticalDontPassBarName.push(bet);
				break;
				case this.id === 'come':
					come.push(bet);
				break;
				case this.id === 'field_bets':
					fieldBets.push(bet);
				break;
				case this.id === 'rightBottomDontPassBarName':
					rightBottomDontPassBarName.push(bet);
				break;
				case this.id === 'bottomPassLineName':
					bottomPassLineName.push(bet);
				break;
				default:
			};
		}
		else {
			var addImg = document.createElement('img');
			addImg.setAttribute('src', 'imgs/red-poker-chip.png');
			this.appendChild(addImg);
			this.childNodes[1].setAttribute("class", "chips");
			switch(true){
				case this.id === 'anySeven':
					anySeven.push(bet);
				break;
				case this.id === 'hardFour':
					hardFour.push(bet);
				break;
				case this.id === 'hardTen':
					hardTen.push(bet);
				break;
				case this.id === 'hardSix':
					hardSix.push(bet);
				break;
				case this.id === 'ace-deuce':
					aceDeuce.push(bet);
				break;
				case this.id === 'snakeEyes':
					snakeEyes.push(bet);
				break;
				case this.id === 'midnight':
					midnight.push(bet);
				break;
				case this.id === 'yo':
					yo.push(bet);
				break;
				case this.id === 'anyCraps':
					anyCraps.push(bet);
				break;
				case this.id === 'dontComeBar':
					dontComeBar.push(bet);
				break;
				case this.id === 'across4':
					across4.push(bet);
				break;
				case this.id === 'across5':
					across5.push(bet);
				break;
				case this.id === 'across6':
					across6.push(bet);
				break;
				case this.id === 'across8':
					across8.push(bet);
				break;
				case this.id === 'across9':
					across9.push(bet);
				break;
				case this.id === 'across10':
					across10.push(bet);
				break;
				case this.id === 'verticalPassLineName':
					verticalPassLineName.push(bet);
				break;
				case this.id === 'verticalDontPassBarName':
					verticalDontPassBarName.push(bet);
				break;
				case this.id === 'come':
					come.push(bet);
				break;
				case this.id === 'field_bets':
					fieldBets.push(bet);
				break;
				case this.id === 'rightBottomDontPassBarName':
					rightBottomDontPassBarName.push(bet);
				break;
				case this.id === 'bottomPassLineName':
					bottomPassLineName.push(bet);
				break;
				default:
			};
		}
	}
}

function rollDice() {
	if(!pointButton && bet != 0){
		var d1 = Math.floor(Math.random() * 6) + 1;
		var d2 = Math.floor(Math.random() * 6) + 1;
		total = d1 + d2;
		firstDice.innerHTML = d1;
		secondDice.innerHTML = d2;
		results.innerHTML = total;
		switch(true) {
			case total === 7 || total === 11:
				win();
				var sum = bottomPassLineName.reduce((a,b)=> a + b, 0);
				currentStack = currentStack + sum;
				moneyStatusText.innerHTML = 'Current Stack: $' + currentStack;
				bottomPassLineName = [];
			break;
			case total === 3 || total === 2 || total === 12:
				lose();
				console.log('You\'ve Crapped out!');
			break;
			default:
				point = total;
				pointStatus.innerHTML = 'Point is ' + point;
				pointButton = true;
				addAcrossListeners();
				console.log(pointButton);
		}
	}
	else if(pointButton && bet != 0){
		var d1 = Math.floor(Math.random() * 6) + 1;
		var d2 = Math.floor(Math.random() * 6) + 1;
		firstDice.innerHTML = d1;
		secondDice.innerHTML = d2;
		total = d1 + d2;
		results.innerHTML = total;
		switch(true) {
			case total === point && point === 4:
				win();
				var sum = across4.reduce((a,b)=> a + b , 0);
				currentStack = currentStack + sum;
				passSumPay();
				moneyStatusText.innerHTML = 'Current Stack: $' + currentStack;
				bottomPassLineName = [];
			break;
			case total === point && point === 6:
				win();
				var sum = across6.reduce((a,b)=> a + b , 0);
				currentStack = currentStack + sum;
				passSumPay();
				moneyStatusText.innerHTML = 'Current Stack: $' + currentStack;
				bottomPassLineName = [];
			break;
			case total === point && point === 8:
				win();
				var sum = across8.reduce((a,b)=> a + b , 0);
				currentStack = currentStack + sum;
				passSumPay();
				moneyStatusText.innerHTML = 'Current Stack: $' + currentStack;
				bottomPassLineName = [];
			break;
			case total === point && point === 9:
				win();
				var sum = across9.reduce((a,b)=> a + b , 0);
				currentStack = currentStack + sum;
				passSumPay();
				moneyStatusText.innerHTML = 'Current Stack: $' + currentStack;
				bottomPassLineName = [];
			break;
			case total === point && point === 10:
				win();
				var sum = across10.reduce((a,b)=> a + b , 0);
				currentStack = currentStack + sum;
				passSumPay();
				moneyStatusText.innerHTML = 'Current Stack: $' + currentStack;
				bottomPassLineName = [];
			break;
			case total === 7:
				currentStack = currentStack - totalBetPlaced;
				moneyStatusText.innerHTML = 'Current Stack: $' + currentStack;
				bottomPassLineName = [];
				lose();
			break;
			default:
		}
	}
}

//add listeners
function addPassLineListeners(){
	for(var i = 0; i < beforePointBets.length; i++){
		beforePointBets[i].addEventListener('click', clicked);
	}
}

function addAnytimeListeners(){
	for(var i = 0; i < anytimeBets.length; i++){
		anytimeBets[i].addEventListener('click', clicked);
	}
}

function currencyListener(){
	for(var i = 0; i < currency.length; i++){
		currency[i].addEventListener('click', function(){
			if(selectBet && currentStack > bet && (bet + parseInt(this.alt)) <= currentStack){
				bet = parseInt(this.alt) + bet;
				currentBetText.innerHTML = 'Current Bet: $' + bet;
			}
		});
	}
}

function addAcrossListeners(){
	for(var i = 0; i < across.length; i++){
		across[i].addEventListener('click', clicked);
	}
}

function removeAcrossListeners(){
	for(var i = 0; i < across.length; i++){
		across[i].removeEventListener('click', clicked);
	}
}

function win(){
	results.innerHTML = "You've Won!"
	console.log(total);

	//payout

	//reset everything
	reset();
}

function lose(){
	console.log(total);
	results.innerHTML = 'You\'ve Lost!';
	reset();
}

function reset(){
	// turn on selectBet boolean
	selectbet = true;
	//turn off all listeners

	// reset the current bet to 0
	bet = 0;
	totalBetPlaced = 0;

	// reset the button to false
	pointButton = false;
	point = 0;

	// remove all the currency images
	var currencyImgs = document.querySelectorAll('.chips');
	currencyImgs.forEach((c)=>{
		c.remove();
	});

	// change the point text and result text
	pointStatus.innerHTML = 'Point is Off';
	totalBetPlacedText.innerHTML = 'Total Bet Placed: $' + totalBetPlaced;
	currentBetText.innerHTML = 'Current Bet: $' + bet;
	

	// reset the dice
	firstDice.innerHTML = '';
	secondDice.innerHTML = '';

	removeAcrossListeners();
}

//refactor payout
function passSumPay(){
	var passSum = bottomPassLineName.reduce((a,b)=> a + b , 0);
	currentStack = currentStack + passSum;
}

// reset the whole game and the stack
function resetGame(){
	reset();
	currentStack = 1000;
	results.innerHTML = '';
	moneyStatusText.innerHTML = 'Current Stack: $' + currentStack;
}

function clearBet(){
	bet = 0;
	currentBetText.innerHTML = 'Current Bet: $' + bet;
}


