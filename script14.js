// Получаем элемент заголовка H1
let h1Element = document.querySelector('h1');

// Добавляем обработчик события mouseover для увеличения размера заголовка при наведении мыши
h1Element.addEventListener('mouseover', () => {
    h1Element.style.transform = 'translate(5%, 5%) scale(1.1)';
});

// Добавляем обработчик события mouseout для возвращения исходного размера заголовка после ухода мыши
h1Element.addEventListener('mouseout', () => {
    h1Element.style.transition = "transform 0.3s ease";
    h1Element.style.transform = 'scale(1)';
});






// Получаем все элементы параграфов на странице
const allParagraphs = document.querySelectorAll('p');

// Для каждого параграфа добавляем обработчик события click для изменения цвета фона с плавным эффектом
allParagraphs.forEach(paragraph => {
    paragraph.addEventListener('click', () => {
        // Генерируем случайный цвет в формате HEX
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        
        // Применяем анимацию плавного изменения цвета фона
        paragraph.style.transition = "background-color 0.5s";
        paragraph.style.backgroundColor = randomColor;
    });
});






// Получаем кнопку "Показать лекции" и таблицу с лекциями
const showLecturesButton = document.getElementById('showLecturesButton');
const lectureTable = document.getElementById('lectureTable');

// Добавляем обработчик события click для плавного появления таблицы с лекциями
showLecturesButton.addEventListener('click', () => {
    // Убираем класс table-hidden и добавляем класс table-show для анимации плавного появления
    lectureTable.classList.remove('table-hidden');
    lectureTable.classList.add('table-show');
});






// Получаем элемент фотографии студента
const studentPhoto = document.getElementById('studentPhoto');

// Добавляем обработчик события mouseover для вращения фотографии при наведении мыши
studentPhoto.addEventListener('mouseover', () => {
    studentPhoto.style.transition = 'transform 0.5s';
    studentPhoto.style.transform = 'rotate(360deg)';
});

// Добавляем обработчик события mouseout для возврата фотографии в исходное положение
studentPhoto.addEventListener('mouseout', () => {
    studentPhoto.style.transition = 'transform 0.5s';
    studentPhoto.style.transform = 'rotate(0deg)';
});





// Получаем форму
const form = document.querySelector('form');

// Добавляем обработчик события submit для формы
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы, чтобы увидеть анимацию

    const message = document.createElement('p');
    message.textContent = "Форма отправлена!";
    message.style.transition = 'color 0.5s'; // Анимация изменения цвета текста
    message.style.color = 'blue'; // Начальный цвет текста
    
    form.appendChild(message);

    // Задержка перед сменой цвета текста (через 100 мс)
    setTimeout(() => {
        message.style.color = 'green'; // Цвет текста сменится на зеленый
    }, 100);
});

