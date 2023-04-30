import { keyboardKeys, keyboardKeysCase } from './keyboardKeys.js';

export function createHtml() {
  const body = document.querySelector('body');
  body.innerHTML = '<audio src="./audio/keyboard-click-1.mp3" id="sound-1"></audio> <audio src="./audio/keyboard-click-2.mp3" id="sound-2"></audio> <audio src="./audio/keyboard-click-3.mp3" id="sound-3"></audio>';

  const centralizer = document.createElement('div');
  centralizer.className = 'centralizer';
  body.append(centralizer);

  const title = document.createElement('p');
  title.className = 'title';
  title.textContent = 'RSS Виртуальная клавиатура';
  centralizer.append(title);

  const textArea = document.createElement('textarea');
  textArea.className = 'body__textarea textarea';
  textArea.setAttribute('id', 'my-textarea');
  textArea.setAttribute('cols', '50');
  textArea.setAttribute('rows', '5');
  centralizer.append(textArea);

  const keyboard = document.createElement('div');
  keyboard.classList = 'body__keyboard keyboard';
  keyboard.setAttribute('id', 'keyboard');
  centralizer.append(keyboard);

  const description = document.createElement('p');
  description.classList = 'description';
  description.textContent = 'Клавиатура создана в операционной системе Windows';
  centralizer.append(description);

  const language = document.createElement('p');
  language.classList = 'language';
  language.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
  centralizer.append(language);

  const languageBtn = document.createElement('div');
  languageBtn.classList = 'change-language';
  languageBtn.textContent = 'en/ru';
  centralizer.append(languageBtn);

  const soundBtn = document.createElement('div');
  soundBtn.classList = 'sound-off';
  centralizer.append(soundBtn);

  const soundImg = document.createElement('div');
  soundImg.classList = 'sound-img';
  soundBtn.append(soundImg);
}

export function createKeyboard() {
  for (let i = 0; i < 5; i += 1) {
    const keyboard = document.querySelector('.keyboard');
    const keyboardRow = document.createElement('div');
    keyboardRow.classList = 'keyboard__row row';
    keyboard.append(keyboardRow);
  }

  function createKey(key) {
    // create key wrapper
    const keyDiv = document.createElement('div');
    keyDiv.classList = `keyboard__key key ${key}`;

    if (!(key in keyboardKeysCase)) {
      return keyDiv;
    }

    // create inner span of key rus language
    const langRusSpan = document.createElement('span');
    langRusSpan.classList = 'rus hidden';
    keyDiv.append(langRusSpan);

    // create inner spans of span rus language
    const langRusCaseDownSpan = document.createElement('span');
    langRusCaseDownSpan.classList = 'caseDown hidden';
    langRusCaseDownSpan.textContent = keyboardKeysCase[key].rus.caseDown;
    langRusSpan.append(langRusCaseDownSpan);

    const langRusCaseUp = document.createElement('span');
    langRusCaseUp.classList = 'caseUp hidden';
    langRusCaseUp.textContent = keyboardKeysCase[key].rus.caseUp;
    langRusSpan.append(langRusCaseUp);

    const langRusCaps = document.createElement('span');
    langRusCaps.classList = 'caps hidden';
    langRusCaps.textContent = keyboardKeysCase[key].rus.caps;
    langRusSpan.append(langRusCaps);

    const langRusShiftCaps = document.createElement('span');
    langRusShiftCaps.classList = 'shiftCaps hidden';
    langRusShiftCaps.textContent = keyboardKeysCase[key].rus.shiftCaps;
    langRusSpan.append(langRusShiftCaps);

    // create inner span of key eng language
    const langEngSpan = document.createElement('span');
    langEngSpan.classList = 'eng';
    keyDiv.append(langEngSpan);

    // create inner spans of span eng language
    const langEngCaseDownSpan = document.createElement('span');
    langEngCaseDownSpan.classList = 'caseDown';
    langEngCaseDownSpan.textContent = keyboardKeysCase[key].eng.caseDown;
    langEngSpan.append(langEngCaseDownSpan);

    const langEngCaseUp = document.createElement('span');
    langEngCaseUp.classList = 'caseUp hidden';
    langEngCaseUp.textContent = keyboardKeysCase[key].eng.caseUp;
    langEngSpan.append(langEngCaseUp);

    const langEngCaps = document.createElement('span');
    langEngCaps.classList = 'caps hidden';
    langEngCaps.textContent = keyboardKeysCase[key].eng.caps;
    langEngSpan.append(langEngCaps);

    const langEngShiftCaps = document.createElement('span');
    langEngShiftCaps.classList = 'shiftCaps hidden';
    langEngShiftCaps.textContent = keyboardKeysCase[key].eng.shiftCaps;
    langEngSpan.append(langEngShiftCaps);

    return keyDiv;
  }

  const keyboardRow = document.querySelectorAll('.row');

  for (let i = 0; i < keyboardRow.length; i += 1) {
    for (let j = 0; j < keyboardKeys[i].length; j += 1) {
      keyboardRow[i].append(createKey(keyboardKeys[i][j]));
    }
  }
}
