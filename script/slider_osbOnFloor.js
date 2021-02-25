// Этот скрипт отображает баннер страницы
if (document.querySelector('.slider_osbOnFloor')) {
    $('.slider_osbOnFloor').slick({
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 1700,
        pauseOnHover: true,
        pauseOnFocus: false,
        arrows: true,
        dots: true,
        pauseOnDotsHover: false,
        prevArrow: $('#next_osbOnFloor'),
        nextArrow: $('#previous_osbOnFloor')
    });
}