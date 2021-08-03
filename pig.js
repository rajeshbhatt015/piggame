// Glbal variable
var player;
var current;
var score;
var dice;
var activeClass;
var playing;

// intialize the game 
init();
//RollDice
document.querySelector('.btn--roll').addEventListener('click', play);
// Hold button
document.querySelector('.btn--hold').addEventListener('click', holdPlay);
//
document.querySelector('.btn--new').addEventListener('click', init);





//Functions

function init() {
   // get the elemnts and score
   player = [0, 0];
   current = 0;
   score = 0;
   playing = true;

   // get the Plyers elementes and intialize it to 0
   document.getElementById('score--0').textContent = 0;
   document.getElementById('score--1').textContent = 0;

   //get the current Element and intilize to 0
   document.getElementById('current--0').textContent = 0;
   document.getElementById('current--1').textContent = 0;

   //Hide the dice;
   dice = document.querySelector('.dice');
   dice.style.display = 'none';
}

//play
function play() {

   if (playing) {
      // show dice;
      dice.style.display = 'block';
      // genrate a randon Number
      var randomNumber = getRandomNumber();
      console.log(randomNumber);
      //show  the dice number
      dice.src = "images/dice-" + randomNumber + '.png';
      // update current score only if is not 1
      if (randomNumber !== 1) {
         score += randomNumber;
         //show score 
         document.getElementById('current--' + current).innerHTML = score;
      } else {
         changePlayer();
      }
   }
}

//Hold button
function holdPlay() {
   if(playing){
      player[current] += score;
      //get the players score
      document.querySelector('#score--' + current).innerHTML = player[current];
      // set Winner
      if (player[current] >= 100) {
         dice.style.transition = "all 2s"
         dice.style.display = "none";
         document.querySelector('#name--' + current).innerHTML = "WINNER";
         document.querySelector('#name--' + current).classList.add("name");
         document.querySelector(".player--" + current).classList.add(".player--winner");
         playing=false; 
      } else
         changePlayer();
   }    
}

function getRandomNumber() {
   return (Math.ceil(Math.random() * 6))
}
function changePlayer() {
   // current score 0
   score = 0;
   document.getElementById('current--' + current).innerHTML = score;
   // change player
   current = 1 - current;
   // change current player active class
   document.querySelector('.player--0').classList.toggle("player--active");
   document.querySelector('.player--1').classList.toggle("player--active");
   //Hide the dice
   dice.style.display = 'none';
}