//global variables
var results = document.getElementById('results');
var pointButton = false;
var availableBets = document.getElementsByClassName('bets');
var beforePointBets = document.getElementsByClassName('beforePointBets');
var anytimeBets = document.getElementsByClassName('anytimeBets');
var currency = document.getElementsByClassName('currency');
var currentBet = document.getElementById('currentBet');
var bet = 0;

document.addEventListener("DOMContentLoaded", start)

function start(){
	addPassLineListeners();
	addAnytimeListeners();
	currencyListener();
}

function clicked() {
	this.value = bet;
	console.log(this.value);
}

function rollDice() {
	var firstDice = document.getElementById('dieOne');
	var secondDice = document.getElementById('dieTwo');
	var d1 = Math.floor(Math.random() * 6) + 1;
	var d2 = Math.floor(Math.random() * 6) + 1;
	var total = d1 + d2;
	firstDice.innerHTML = d1;
	secondDice.innerHTML = d2;
	results.innerHTML = total;
	console.log(results);
	checkWin();
}

function checkWin() {
	if(results.innerHTML == 7) {
		results.innerHTML = "You've Crapped Out!";
		lose();
	}
	else if(results.innerHTML != 7) {
		results.innerHTML = "You've Won!"
	}
}

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
			bet = parseInt(this.id) + bet
			currentBet.innerHTML = 'Current Bet: $'+bet;
			console.log(bet);
		});
	}
}

function lose(){
	//turn off all listeners
}

function reset(){
	//turn off all listeners
}