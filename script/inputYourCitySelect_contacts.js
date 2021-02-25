// Этот скрипт перемещает placeholder в поле ввода по нажатию на него
if (document.querySelector('.mottexPhone_contacts')) {
    var citySelect = document.querySelector('#city_contacts');
    var yourCity1 = document.querySelector('.placeholder1_contacts');
    var resetButton = document.querySelector('.resetCity_contacts');

    /*Подсказка поле ввода "доставка"*/
    citySelect.onclick = function() {
        yourCity1.classList.add('moveCityText_contacts');
        resetButton_contacts.classList.add('shown_contacts');
    };

    resetButton.onclick = function() {
        yourCity1.classList.remove('moveCityText_contacts');
    };

    resetButton.addEventListener('click', function() {
        resetButton.classList.remove('shown_contacts');
    })
}

