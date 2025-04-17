'use strict';

let secert_number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      document.querySelector('.message').textContent = 'd5l raqam ya 3gl';
    } else if (guess === secert_number) {
      document.querySelector('.message').textContent = '3ash ya 3gl';

      document.querySelector('.number').textContent = secert_number;
      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      } else {
        document.querySelector('.highscore').textContent = highscore;
      }
     else if (guess > secert_number) {
      document.querySelector('.message').textContent = 'ta7t ya 3ars';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secert_number) {
      document.querySelector('.message').textContent = 'a3la ya 3ars';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score == 0) {
      document.querySelector('.message').textContent = '5srt ya 3ars';
      score == 0;
      document.querySelector('.score').textContent = score;
    }

    if (score < 0) {
      document.querySelector('.message').textContent = '5srt ya 3ars';
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
