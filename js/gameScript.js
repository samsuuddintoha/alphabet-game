document.addEventListener('keyup', (event) => {
  const playerPressedKey = event.key;
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;

  if (playerPressedKey === 'Escape') {
    endGame();
  }

  if (playerPressedKey === currentAlphabet) {
    removeKeyboardBackgroundColorById(currentAlphabet);
    const score = getElementIntValueById('current-score');
    const newScore = score + 1;
    setElementValueById('current-score', newScore);

    continueGame();
    removeClassById('current-alphabet', 'shake');
    removeClassById('current-alphabet', 'text-red-600');
  } else {
    const life = getElementIntValueById('current-life');

    const existLife = life - 1;
    setElementValueById('current-life', existLife);

    if (existLife) {
      addClassById('current-alphabet', 'shake');
      addClassById('current-alphabet', 'text-red-600');
    }
    if (existLife === 0) {
      endGame();
    }
  }
});

function endGame() {
  hideElementById('playground');
  showElementById('score');

  const currentAlphabet = document.getElementById('current-alphabet').innerText;
  removeKeyboardBackgroundColorById(currentAlphabet);

  const score = getElementIntValueById('current-score');
  setElementValueById('total-score', score);
}

function continueGame() {
  const alphabet = getARandomAlphabet();
  document.getElementById('current-alphabet').innerText = alphabet;
  setKeyboardBackgroundColorById(alphabet);
}

function play() {
  hideElementById('home-screen');
  showElementById('playground');
  hideElementById('score');

  setElementValueById('current-score', 0);
  setElementValueById('current-life', 5);

  removeClassById('current-alphabet', 'shake');
  removeClassById('current-alphabet', 'text-red-600');

  continueGame();
}
