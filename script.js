'use strict';

let secert_number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      document.querySelector('.message').textContent = 'enter a number';
    } else if (guess === secert_number) {
      document.querySelector('.message').textContent = '3ash ya dude correct';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secert_number;
      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      } else {
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > secert_number) {
      document.querySelector('.message').textContent = 'lower';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secert_number) {
      document.querySelector('.message').textContent = 'higher';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score == 0) {
      document.querySelector('.message').textContent = 'you lost';
      score == 0;
      document.querySelector('.score').textContent = score;
    }

    if (score < 0) {
      document.querySelector('.message').textContent = 'you lost';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secert_number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing';
});

// Add touch support for mobile devices
document.querySelector('.check').addEventListener('touchend', function (e) {
  e.preventDefault(); // Prevent default touch behavior
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'enter a number';
  } else if (guess === secert_number) {
    document.querySelector('.message').textContent = '3ash ya dude correct';
     document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secert_number;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secert_number) {
    document.querySelector('.message').textContent = 'lower';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secert_number) {
    document.querySelector('.message').textContent = 'higher';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (score == 0) {
    document.querySelector('.message').textContent = 'you lost';
    score == 0;
    document.querySelector('.score').textContent = score;
  }
  if (score < 0) {
    document.querySelector('.message').textContent = 'you lost';
    score = 0;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('touchend', function (e) {
  e.preventDefault(); // Prevent default touch behavior
  score = 20;
  document.querySelector('.score').textContent = score;
  secert_number = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing';
});
