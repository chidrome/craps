// ----------------- global variables -------------------- //
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

// bet placement arrays for calculating payout
var anySeven = [];
var hardFour = [];
var hardTen = [];
var hardEight = [];
var hardSix = [];
var aceDeuce = [];
var snakeEyes = [];
var midnight = [];
var yo = [];
var anyCraps = [];
var dontComeBar = [];
var across4 = [];
var across5 = [];
var across6 = [];
var across8 = [];
var across9 = [];
var across10 = [];
var verticalPassLineName = [];
var verticalDontPassBarName = [];
var come = [];
var fieldBets = [];
var rightBottomDontPassBarName = [];
var bottomPassLineName = [];

// booleans
var pointButton = false;
var bet = 0;
var confirmedBet = 0;
var point = 0;
var totalBetPlaced = 0;
var previousDivCheckArray = [];
var selectBet = true;

// static
var currentStack = 1000;

// dice
var firstDice = document.getElementById('dieOne');
var secondDice = document.getElementById('dieTwo');