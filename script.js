// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const btn1 = document.getElementById("openModal1");
const btn2 = document.getElementById("openModal2");
const btn3 = document.getElementById("openModal3");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Открываем модальное окно при нажатии на кнопку
btn1.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на "X"
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

jQuery(document).ready(function() {jQuery(".phone").mask("+7 (999) 999-99-99");});





// Валидация формы и обработка отправки
// Получаем форму

// Добавляем обработчик события submit для формы
// Получаем форму

// Добавляем обработчик события submit для формы
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы, чтобы увидеть анимацию

    // Создаем всплывающее окно с сообщением
    const popup = document.createElement('div');
    popup.textContent = "Форма отправлена!";
    popup.className = 'popup';
    popup.style.transition = 'color 0.5s'; // Анимация изменения цвета текста
    popup.style.color = 'blue'; // Начальный цвет текста

    // Добавляем всплывающее окно в body
    document.body.appendChild(popup);
    setTimeout(() => {
      popup.style.color = 'green'; // Цвет текста сменится на зеленый
    }, 100);
    // Задержка перед удалением всплывающего окна
    setTimeout(() => {
        popup.remove(); // Удаляем всплывающее окно после определенного времени
        modal.style.display = "none";
    }, 3000); // Время задержки в миллисекундах (например, 3000 мс = 3 секунды)
    
});

