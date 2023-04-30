export default function keyController() {
  const textarea = document.querySelector('.textarea');
  const keys = document.querySelectorAll('.key');

  let cursorPosition = 0;

  document.addEventListener('click', () => {
    textarea.focus();
  });

  function keyHandler(keyStr) {
    textarea.focus();
    cursorPosition = textarea.selectionStart;
    if (keyStr === 'Backspace') {
      textarea.value = textarea.value
        .slice(0, textarea.selectionStart - 1)
        .concat(textarea.value.slice(textarea.selectionStart));
      cursorPosition -= 1;
    } else if (keyStr === 'Del') {
      textarea.value = textarea.value
        .slice(0, cursorPosition)
        .concat(textarea.value.slice(cursorPosition + 1));
    } else if (keyStr === 'Enter') {
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}\n${textarea.value.slice(textarea.selectionStart)}`;
      cursorPosition += 1;
    } else if (keyStr === 'Shift'
      || keyStr === 'Ctrl'
      || keyStr === 'Alt'
      || keyStr === 'Win'
      || keyStr === 'Tab'
      || keyStr === 'CapsLock') {
      return;
    } else if (keyStr === '') {
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)} ${textarea.value.slice(textarea.selectionStart)}`;
      cursorPosition += 1;
    } else if (keyStr === '◄') {
      cursorPosition -= 1;
    } else if (keyStr === '►') {
      cursorPosition += 1;
    } else {
      textarea.value = textarea.value.slice(0, textarea.selectionStart)
        + keyStr
        + textarea.value.slice(textarea.selectionStart);
      cursorPosition += 1;
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
