'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let attempts = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage(
      '⛔️ Digite um número ou clique na setas acima do "Acertei? 🤷‍♂️"!'
    );

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Número correto!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 16) {
      displayMessage(
        guess > secretNumber ? '📈 Muito alto!' : '📉 Muito baixo!'
      );
      score--;
      attempts++;
      document.querySelector('.score').textContent = score;
      document.querySelector('.attempts').textContent = attempts;
    } else {
      attempts++;
      document.querySelector('.attempts').textContent = attempts;
      displayMessage(
        '💥 GAME OVER, você perdeu o jogo, clique em "Jogar Novamente!"'
      );
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  attempts = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Comece a adivinhar');
  document.querySelector('.score').textContent = score;
  document.querySelector('.attempts').textContent = attempts;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
