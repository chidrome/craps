# Craps
[LIVE SITE](https://chidrome.github.io/craps/)

## How to Play
### Summary
There are two phases to playing craps. One is before the Point is On and is called the "Come Out" phase. While the other is the "Point" phase. *You must place a bet on the Pass Line in order to "shoot".* During the Come Out phase, a roll of either 7 or 11 will win you the round. A roll of 2, 3 or 12 is considered "crapping out". If a 4, 5, 6, 8, 9 or 10 is rolled, then the second phase of the round begins and the point becomes whatever the shooter just rolled. For example, if the shooter rolled a 6, then the point becomes 6 and the point phase is now active. During this phase, the only way you can lose is if you roll a 7 a.k.a. "crapping out". When this happens, the Pass Line loses and the round will end.

1. Click on the chips to select the desired betting amount.
2. Place a bet on the Pass Line before the point is on.
3. Roll the Dice.
4. Bets "across" (4,5,6,8,9,10), can only be placed when the Point is On.

### Technologies Used 
* Materialize CSS Framework
* HTML
* CSS
* Javascript

### Known Bugs
* chip images when placing bets.
* payouts during round for any bets, other than the Pass Line, when point is on is not happening.

### Future Updates
* Calculation for different payouts depending on where the bet is placed. ie; 7 to 1.
* Field Bets and Come Bets.

## Process
1. Build out the table
2. Create all my divs. I ended up having to refactor ALOT of the divs after getting better acquainted with how to make shapes in only css. 
* center div container first
	* smaller divs for bet placements
* left side bets
	* small divs for across the bets
	* pass line bets
	* dont come divs
	* field bets div
	* come bets div
* info divs on the right as well as the dice divs
3. I started doing the js by declaring all my known variables and functions(at this point). ie; win(), lose(), start(), resetGame(), etc
4. Added listeners based on a boolean if the point was on or not.
5. Roll Dice and Clicked function
* logic on when to pay out
* logic on when to win/lose
* logic for payouts
6. Added arrays for each bets div in order for me to push bets into those array and then calculate payouts based on if those arrays were empty or not.



