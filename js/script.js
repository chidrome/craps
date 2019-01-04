//global variables
var results = document.getElementById('results');
var availableBets = document.getElementsByClassName('bets');
var beforePointBets = document.getElementsByClassName('beforePointBets');
var anytimeBets = document.getElementsByClassName('anytimeBets');
var currency = document.getElementsByClassName('currency');
var currentBet = document.getElementById('currentBet');
var across = document.getElementsByClassName('across');
var pointStatus = document.getElementById('pointStatus');
var moneyStatus = document.getElementById('playerMoney');
var pointButton = false;
var bet = 0;
var confirmedBet = 0;
var point = 0;
var previousDivCheckArray = [];

var currentStack = 500;

// dice
var firstDice = document.getElementById('dieOne');
var secondDice = document.getElementById('dieTwo');

document.addEventListener("DOMContentLoaded", start)


function start(){
	moneyStatus.innerHTML = 'Current Stack: $' + currentStack;
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
	if(this.childNodes.length >= 2){
		console.log('Hi');
	}
	else {
		var addImg = document.createElement('img');
		addImg.setAttribute('src', 'imgs/red-poker-chip.png');
		this.appendChild(addImg);
		this.childNodes[1].setAttribute("class", "chips");
		console.log(this);
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
		if(total === 7 || total === 11){
			console.log('You WIN!')
			win();
		}
		else if(total === 3 || total === 2 || total === 12){
			console.log('You\'ve Crapped out');
			lose();
		}
		else{
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
		if(total === point){
			console.log('You WIN');
			win();
		}
		else if(total === 7){
			lose();
		}
	}

}

function checkWin() {
	if(results.innerHTML == 7) {
		results.innerHTML = "You've Crapped Out!";
		reset();
	}
	else if(results.innerHTML != 7) {

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
			bet = parseInt(this.alt) + bet;
			currentBet.innerHTML = 'Current Bet: $' + bet;
			console.log(bet);
			console.log(currentStack);
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
	//turn off all listeners

	// reset the current bet to 0
	bet = 0;

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

	// reset the dice
	firstDice.innerHTML = '';
	secondDice.innerHTML = '';
}









