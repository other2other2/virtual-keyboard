import state from './keyBoardState.js';

export default function switchLayout(lang, ...keys) {
  const pressed = new Set();
  const rusList = document.querySelectorAll('.rus');
  const engList = document.querySelectorAll('.eng');
  const languageBtn = document.querySelector('.change-language');
  const capsBtn = document.querySelector('.CapsLock');
  // const shiftLeft = document.querySelector('.ShiftLeft');
  // const shiftRight = document.querySelector('.ShiftRight');
  const shifts = [document.querySelector('.ShiftRight'), document.querySelector('.ShiftLeft')];

  function getActiveLanguage() {
    return (localStorage.getItem('lang') === 'eng') ? engList : rusList;
  }

  function langHidden(langKeyList) {
    langKeyList.forEach((key) => {
      if (!key.classList.contains('hidden')) {
        key.classList.add('hidden');
        Array.prototype.forEach.call(key.children, (el) => {
          el.classList.add('hidden');
        });
      }
    });
  }

  function langVisible(langKeyList) {
    langKeyList.forEach((key) => {
      if (key.classList.contains('hidden')) {
        key.classList.remove('hidden');
        Array.prototype.forEach.call(key.children, (el) => {
          if (el.classList.contains(state.get())) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        });
      }
    });
  }

  function changeCase(langKeyList) {
    langKeyList.forEach((key) => {
      key.classList.remove('hidden');
      Array.prototype.forEach.call(key.children, (el) => {
        if (el.classList.contains(state.get())) {
          el.classList.remove('hidden');
        } else {
          el.classList.add('hidden');
        }
      });
    });
  }

  capsBtn.addEventListener('click', () => {
    if (state.get() !== 'caps') {
      state.set('caps');
      capsBtn.classList.add('active');
      changeCase(getActiveLanguage());
    } else {
      state.set('caseDown');
      capsBtn.classList.remove('active');
      changeCase(getActiveLanguage());
    }
  });

  shifts.forEach((shift) => {
    shift.addEventListener('click', () => {
      if (state.get() !== 'caseUp') {
        state.set('caseUp');
        shift.classList.add('active');
        changeCase(getActiveLanguage());
      } else {
        state.set('caseDown');
        shift.classList.remove('active');
        changeCase(getActiveLanguage());
      }
    });
  });

  function changeLanguage() {
    if (localStorage.getItem('lang') === 'eng') {
      langHidden(engList);
      langVisible(rusList);
      localStorage.setItem('lang', 'rus');
      languageBtn.textContent = 'RU';
    } else {
      langHidden(rusList);
      langVisible(engList);
      localStorage.setItem('lang', 'eng');
      languageBtn.textContent = 'EN';
    }
  }

  if (lang === 'eng') {
    langHidden(rusList);
    langVisible(engList);
    languageBtn.textContent = 'EN';
  } else {
    langHidden(engList);
    langVisible(rusList);
    languageBtn.textContent = 'RU';
  }

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    if (event.code === 'CapsLock') {
      capsBtn.click();
    }

    // console.log(event.code);
    // console.log(state.get());
    if (state.get() === 'caps' && event.code === 'ShiftLeft') {
      state.set('shiftCaps');
      // console.log('hi');
      changeCase(getActiveLanguage());
    } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      state.set('caseUp');
      changeCase(getActiveLanguage());
    }

    // if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    //   state.set('caseUp');
    //   changeCase(getActiveLanguage());
    // }

    if (keys.every((key) => pressed.has(key))) {
      changeLanguage();
    }
  });

  languageBtn.addEventListener('click', () => {
    languageBtn.classList.add('active');
    changeLanguage();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      state.set('caseDown');
      changeCase(getActiveLanguage());
    }
    // if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    //   if (state.get() === 'shiftCaps') {
    //     state.set('caps');
    //     changeCase(getActiveLanguage());
    //   } else {
    //     state.set('caseDown');
    //     changeCase(getActiveLanguage());
    //   }
    // }
  });
}
