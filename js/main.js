import { createHtml, createKeyboard } from './createHtml.js';
import keyHighlight from './keyHighlights.js';
import switchLayout from './switchLayout.js';
import keyController from './keyController.js';

function getlang() {
  if (localStorage.getItem('lang') !== null) {
    return localStorage.getItem('lang');
  }
  return 'eng';
}

window.addEventListener('load', () => {
  createHtml();
  createKeyboard();
  keyHighlight();
  switchLayout(getlang(), 'ControlLeft', 'AltLeft');
  keyController();
});
