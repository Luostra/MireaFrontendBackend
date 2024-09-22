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
