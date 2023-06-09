const surprise = document.getElementById('surprise');
const gameBoard = document.getElementById('game-board');
const errorMessage = document.createElement('p');
errorMessage.classList.add('error-message');
errorMessage.innerText = 'Lo siento, intenta de nuevo';

gameBoard.addEventListener('click', (event) => {
  if (event.target === surprise) {
    surprise.style.display = 'none';
    alert('¡Encontraste la sorpresa! ¡Feliz aniversario!');
  } else {
    gameBoard.appendChild(errorMessage);
    setTimeout(() => {
      errorMessage.remove();
    }, 1000);
  }
});
