import { createHtml, createKeyboard } from './createHtml.js';
import keyHighlight from './keyHighlights.js';

window.addEventListener('load', () => {
  createHtml();
  createKeyboard();
  keyHighlight();
});
