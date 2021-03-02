// Этот скрипт копирует содержимое первого элемента списка при десктопной версии и в первый элемент списка мобильной версии
// transferCitySelect

if (document.querySelector('.firstNavMenu')) {
    if (window.innerWidth <= 1199) {
        $( init );
        function init() {
            $('#citySelectTopNav').append( $('#citySelectBottomNav>.test1') );

        }
    }
}