export default function keyController() {
  const textarea = document.querySelector('.textarea');
  const keys = document.querySelectorAll('.key');
  const sound1 = document.querySelector('#sound-1');
  const sound2 = document.querySelector('#sound-2');
  const sound3 = document.querySelector('#sound-3');

  let cursorPosition = 0;

  document.addEventListener('click', () => {
    textarea.focus();
  });

  function playSound(typeSound) {
    if (typeSound === 'key') {
      if (localStorage.getItem('lang') === 'eng') {
        sound1.currentTime = 0;
        sound1.play();
      } else {
        sound2.currentTime = 0;
        sound2.play();
      }
    } else if (typeSound === 'funcKey') {
      sound3.currentTime = 0;
      sound3.play();
    }
  }

  function keyHandler(keyStr) {
    textarea.focus();
    cursorPosition = textarea.selectionStart;
    if (keyStr === 'Backspace') {
      textarea.value = textarea.value
        .slice(0, textarea.selectionStart - 1)
        .concat(textarea.value.slice(textarea.selectionStart));
      cursorPosition -= 1;
      playSound('funcKey');
    } else if (keyStr === 'Del') {
      textarea.value = textarea.value
        .slice(0, cursorPosition)
        .concat(textarea.value.slice(cursorPosition + 1));
      playSound('funcKey');
    } else if (keyStr === 'Enter') {
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}\n${textarea.value.slice(textarea.selectionStart)}`;
      cursorPosition += 1;
      playSound('funcKey');
    } else if (keyStr === 'Shift'
      || keyStr === 'Ctrl'
      || keyStr === 'Alt'
      || keyStr === 'Win'
      || keyStr === 'Tab'
      || keyStr === 'CapsLock') {
      playSound('funcKey');
      return;
    } else if (keyStr === '') {
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)} ${textarea.value.slice(textarea.selectionStart)}`;
      cursorPosition += 1;
      playSound('funcKey');
    } else if (keyStr === '◄') {
      cursorPosition -= 1;
      playSound('funcKey');
    } else if (keyStr === '►') {
      cursorPosition += 1;
      playSound('funcKey');
    } else {
      textarea.value = textarea.value.slice(0, textarea.selectionStart)
        + keyStr
        + textarea.value.slice(textarea.selectionStart);
      cursorPosition += 1;
      playSound('key');
    }
    textarea.selectionStart = cursorPosition;
    textarea.selectionEnd = cursorPosition;
  }

  keys.forEach((key) => {
    key.addEventListener('click', (event) => {
      keyHandler(event.srcElement.textContent);
    });
  });

  document.addEventListener('keydown', (event) => {
    const keyButton = document.querySelector(`.${event.code} span :not(.hidden)`).textContent;
    keyHandler(keyButton);
  });
}
