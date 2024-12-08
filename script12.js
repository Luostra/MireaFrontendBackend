// Функция showMessage принимает строку в качестве аргумента и выводит это сообщение в консоль
function showMessage(message) {
    console.log(message);
}

// Функция changeBackgroundColor принимает цвет в качестве аргумента и изменяет цвет фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция toggleVisibility принимает селектор элемента и переключает его видимость например img или p
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Функция для извлечения значения параметра utm_term из URL и замены текста H1
// достаточно просто дописать ?utm_term=term_here в url
function updateH1TextFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('h1');

    if (utmTerm) {
        h1Element.textContent = utmTerm;
    }
    // Дополнительные действия при отсутствии параметра utm_term могут быть добавлены здесь
}

// Функция для вывода текущего времени в формате "ЧЧ:ММ:СС" в консоль
function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const currentTime = `${hours}:${minutes}:${seconds}`;
    console.log(currentTime);
}

// Функция для сброса цвета фона к исходному значению "white"
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}


