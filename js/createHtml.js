export default function createHtml() {
  const body = document.querySelector('body');

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
}
