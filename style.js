use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'π correct no!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('β No Number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('π Correct Number! You win π');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'πToo High!' : 'πToo Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('π­You Lost The Game!π');
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#b32000';
      document.querySelector('.number').style.width = '30rem';
    }
  }
  //when your guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'πToo High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'π­You Lost The Game!π';
  //       document.querySelector('.score').textContent = 0;

  //       document.querySelector('body').style.backgroundColor = '#b32000';
  //       document.querySelector('.number').style.width = '30rem';
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'πToo Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'π­You Lost The Game!π';
  //       document.querySelector('.score').textContent = 0;

  //       document.querySelector('body').style.backgroundColor = '#b32000';
  //       document.querySelector('.number').style.width = '30rem';
  //     }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = ' #161657';
  document.querySelector('.number').style.width = '15rem';
});
