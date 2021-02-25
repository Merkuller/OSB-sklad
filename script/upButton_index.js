// Этот скрипт перемещает грузовик и отображает кнопку прокрутки "в начало"
if (document.querySelector('.up-button') && document.querySelector('.track_index')) {
    var upButton = document.querySelector('.up-button');
    var track = document.querySelector('.track_index');

    window.onscroll = function() {
        if (window.pageYOffset > 3200) {
            upButton.classList.add('shown');
            track.classList.add('trackMove_index');
        } else {
            upButton.classList.remove('shown');
        };
    };

    upButton.onclick = function() {
        scrollTo(0, 0);
    };
}