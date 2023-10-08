let isInCinemaMode = false;
const buttonText = document.getElementById('buttonText');
const cinemaIcon = document.getElementById('cinemaIcon');

function toggleCinemaMode() {
  const button = document.getElementById('toggleCinemaMode');
  const body = document.body;

  isInCinemaMode = !isInCinemaMode;

  if (isInCinemaMode) {
    buttonText.style.display = 'none'; // Скрываем текст
    cinemaIcon.style.display = 'inline'; // Показываем изображение
    // button.style.borderRadius = '30px';
    button.style.border = '0px solid #ffff';
    body.classList.add('cinema-mode', 'active');
  } else {
    buttonText.style.display = 'inline'; // Показываем текст
    cinemaIcon.style.display = 'none'; // Скрываем изображение
    button.style.borderRadius = '3px';
    button.style.border = '1px solid #ffff';
    body.classList.remove('active');
    setTimeout(() => {
      body.classList.remove('cinema-mode');
    }, 400);
  }
}