//global variables
var results = document.getElementById('results');
var availableBets = document.getElementsByClassName('bets');
var beforePointBets = document.getElementsByClassName('beforePointBets');
var anytimeBets = document.getElementsByClassName('anytimeBets');
var currency = document.getElementsByClassName('currency');
var currentBetText = document.getElementById('currentBet');
var across = document.getElementsByClassName('across');
var pointStatus = document.getElementById('pointStatus');
var moneyStatusText = document.getElementById('playerMoney');
var totalBetPlacedText = document.getElementById('totalBetPlaced');
var pointButton = false;
var bet = 0;
var confirmedBet = 0;
var point = 0;
var totalBetPlaced = 0;
var previousDivCheckArray = [];
var selectBet = true;

var currentStack = 500;

// dice
var firstDice = document.getElementById('dieOne');
var secondDice = document.getElementById('dieTwo');

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
	
	console.log(selectBet);
	if(currentStack >= bet && bet != 0){
		selectBet = false;
		updateCurrentStack();
		totalBetPlaced = totalBetPlaced + bet;
		totalBetPlacedText.innerHTML = 'Total Bet Placed: $' + totalBetPlaced;
		if(this.childNodes.length >= 2){
			console.log('Hi');
		}
		else {
			var addImg = document.createElement('img');
			addImg.setAttribute('src', 'imgs/red-poker-chip.png');
			this.appendChild(addImg);
			this.childNodes[1].setAttribute("class", "chips");
		}
	}
}

function rollDice() {
	if(!pointButton){
		var d1 = Math.floor(Math.random() * 6) + 1;
		var d2 = Math.floor(Math.random() * 6) + 1;
		total = d1 + d2;
		firstDice.innerHTML = d1;
		secondDice.innerHTML = d2;
		results.innerHTML = total;
		switch(true) {
			case total === 7 || total === 11:
				win();
				console.log('You WIN!');
			break;
			case total === 3 || total === 2 || total === 12:
				lose();
				console.log('You\'ve Crapped out!');
			break;
			default:
				point = total;
				pointStatus.innerHTML = 'Point is ' + point;
				pointButton = true;
				console.log(pointButton);
		}
	}
	else if(pointButton){
		var d1 = Math.floor(Math.random() * 6) + 1;
		var d2 = Math.floor(Math.random() * 6) + 1;
		firstDice.innerHTML = d1;
		secondDice.innerHTML = d2;
		total = d1 + d2;
		results.innerHTML = total;
		switch(true) {
			case total === point:
				console.log('You WIN');
				win();
			break;
			case total === 7:
				lose();
			break;
			default:
		}
	}
}

// function checkWin() {
// 	if(results.innerHTML == 7) {
// 		results.innerHTML = "You've Crapped Out!";
// 		reset();
// 	}
// 	else if(results.innerHTML != 7) {
// 	}
// }

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
				console.log(bet);
				console.log(currentStack);
			}
		});
	}
}

function addAcrossListeners(){
	for(var i = 0; i < across.length; i++){
		across[i].addEventListener('click', clicked);
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
	totalBetPlacedText = 'Total Bet Placed: $' + totalBetPlaced;

	// reset the dice
	firstDice.innerHTML = '';
	secondDice.innerHTML = '';
}

function updateCurrentStack(){
	if(!selectBet){
		currentStack = currentStack - bet;
		moneyStatusText.innerHTML = 'Current Stack: $' + currentStack;
		console.log(currentStack);
		selectBet = true;
	}
}

function clearBet(){
	bet = 0;
	currentBetText.innerHTML = 'Current Bet: $' + bet;
}

function payOut(){

}




