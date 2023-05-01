export default function keyHighlight() {
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    const keyPressed = document.querySelector(`.${event.code}`);
    if (!(keyPressed === null)) {
      keyPressed.classList.add('active');
    }
  });

  document.addEventListener('keyup', (event) => {
    event.preventDefault();
    const keyUp = document.querySelector(`.${event.code}`);
    if (!(keyUp === null) && event.code !== 'CapsLock') {
      keyUp.classList.remove('active');
    }
  });
}
