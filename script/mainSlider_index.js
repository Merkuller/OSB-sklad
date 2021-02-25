// Этот скрипт отображает слайдер главного баннера страницы
if (document.querySelector('.slider1_index')) {
    $('.slider1_index').slick({
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 1700,
        pauseOnHover: true,
        pauseOnFocus: false,
        arrows: false,
        dots: true,
        adaptiveHeight: false,
        pauseOnDotsHover: false
    });
}