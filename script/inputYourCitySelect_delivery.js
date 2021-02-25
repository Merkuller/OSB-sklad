// Этот скрипт перемещает placeholder в поле ввода по нажатию на него
if (document.querySelector('.deliveryMenu_delivery')) {
    var citySelect = document.querySelector('#city_delivery');
    var yourCity1 = document.querySelector('.placeholder1_delivery');
    var resetButton = document.querySelector('.resetCity_delivery');


    /*Подсказка поле ввода "доставка"*/
    citySelect.onclick = function() {
        yourCity1.classList.add('moveCityText_delivery');
    };

    resetButton.onclick = function() {
        yourCity1.classList.remove('moveCityText_delivery');
        resetButton_delivery.classList.remove('shown_delivery');
    };
}

