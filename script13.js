// Получаем элемент заголовка H1
var h1Element = document.querySelector('h1');

// Добавляем обработчик события click на заголовок H1
h1Element.addEventListener('click', () => {
    alert("Вы кликнули на заголовок - так держать!");
});



// Список тем практик на второй семестр
const secondSemesterTopics = [
    "Базовое бэкенд-приложение",
    "HTTP-запросы",
    "JSON и работа с ним",
    "HTTP-ответы ",
    "Проектирование API ",
    "Роутинг и его настройка ",
    "NoSQL базы данных",
    "беспечение авторизации и доступа пользователей ",
    "Работа сторонних сервисов уведомления и авторизации",
    "Основы ReactJS ",
    "Работа с компонентами динамической DOM ",
    "Использование хуков в React ",
    "Основы микросервисной архитектуры ",
    "Разработка классических модулей веб-приложений ",
    "Разработка классических модулей веб-приложений"
];

// Функция для обновления данных в таблице на темы второго семестра
function showSecondSemesterTopics() {
    const practiceTable = document.getElementById('practiceTable');

    // Очищаем текущие данные в таблице
    practiceTable.innerHTML = "<tr><th>Темы праткика на 2 семестр</th></tr>";

    // Добавляем темы второго семестра в таблицу
    secondSemesterTopics.forEach(topic => {
        const newRow = document.createElement('tr');
        const newCell = document.createElement('td');
        newCell.textContent = topic;
        newRow.appendChild(newCell);
        practiceTable.appendChild(newRow);
    });
}

// Получаем кнопку "Посмотреть практики во втором семестре" и добавляем обработчик события click
const showSecondSemesterButton = document.getElementById('showSecondSemester');
showSecondSemesterButton.addEventListener('click', showSecondSemesterTopics);



// Получаем элементы фотографий студента и преподавателя
const studentPhoto = document.getElementById('changeablePhoto');

// Обработчик события mouseover для увеличения размера фотографии студента
studentPhoto.addEventListener('mouseover', () => {
    studentPhoto.style.width = `${studentPhoto.width * 1.1}px`;
    studentPhoto.style.height = `${studentPhoto.height * 1.1}px`;
});

// Обработчик события click для замены фотографии студента на фотографию преподавателя
studentPhoto.addEventListener('click', () => {
    studentPhoto.src = "/img/Safronov.jpg";
    studentPhoto.alt = "teacher";
});

// Обработчик события dblclick для вызова alert при двойном клике на фотографию студента
studentPhoto.addEventListener('dblclick', () => {
    alert("Не налегай, у меня не так много любимых преподавателей");
});


