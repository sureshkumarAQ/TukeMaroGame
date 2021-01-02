'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let HighScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!🤦‍♂️';
  }
  // guess === secretNumber
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > HighScore) {
      HighScore = score;
    }

    document.querySelector('.highscore').textContent = HighScore;
  }
  // guess > secretNumber
  else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😱You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  // guess < secretNumbe
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😱You Lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Again

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = '🥱Start Searching..';

  //guess = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.check').addEventListener('click', function () {
    guess = Number(document.querySelector('.guess').value);

    //console.log(guess, typeof guess);

    if (!guess) {
      document.querySelector('.message').textContent = 'No Number!🤦‍♂️';
    }
    // guess === secretNumber
    else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
    }
    // guess > secretNumber
    else if (guess != secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '😱You Lost the game';
        document.querySelector('.score').textContent = 0;
      }
    }

    // guess < secretNumbe
    // else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉 Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '😱You Lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  });
});
