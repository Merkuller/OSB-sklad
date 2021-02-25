// Перемещение placeholder'а в поле ввода телефона вверх
if (document.querySelector('#phone') && document.querySelector('.placeholder')) {
    var phoneSelect_page1 = document.querySelector('#phone');
    var yourPhone_page1 = document.querySelector('.placeholder');

    phoneSelect_page1.onclick = function() {
        yourPhone_page1.classList.add('move');
    };
}