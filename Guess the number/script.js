'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   when input field is black
  if (guess === '') {
    // document.querySelector('.message').textContent = '';
    displayMessage('⛔️ No Number!');
  } else if (guess === secretNumber) {
    //Change the background color for correct Guess
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game..');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Play Again...
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //   document.querySelector('.message').textContent = 'Start Guessing..';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
