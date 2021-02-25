// Этот скрипт отслеживает наличие текста в поле ввода. И отображает её при его наличии. 
if (document.querySelector('.resetCity_delivery')) {
    let citySelect_delivery = document.querySelector('#city_delivery');
    let resetButton_delivery = document.querySelector('.resetCity_delivery');
    let yourCity1_delivery = document.querySelector('.placeholder1_delivery');

    citySelect_delivery.oninput = function() {
        if (citySelect_delivery.value.length >= 1) {
            resetButton_delivery.classList.add('shown_delivery');
            yourCity1_delivery.classList.add('moveCityText_delivery');
        } else {
            resetButton_delivery.classList.remove('shown_delivery');
            yourCity1_delivery.classList.remove('moveCityText_delivery');
        }
    }

    resetButton_delivery.addEventListener('click', function() {
        resetButton_delivery.classList.remove('shown_delivery');
    })
}