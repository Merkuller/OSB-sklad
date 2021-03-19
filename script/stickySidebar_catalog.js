//stickySidebar_catalog

if (document.querySelector('.secondSectionMenu_osbOnFloor')) {
    let pageHeight_catalog = document.querySelector('body');
    let productCard_catalog = document.querySelector('.sectionTwo_osbOnFloor');
    let header = document.querySelector('header');
    let breadcrums_catalog = document.querySelector('main > .wrapper');
    let catalogContent_catalog = document.querySelector('main > .mainContent_catalog > .wrapper');
    let showGoods_catalog = document.querySelector('.filterBtn_osbOnFloor');
    
    showGoods_catalog.addEventListener('click', () => {
        productCard_catalog.scrollTo(0);
    });

    $(document).ready(function () {
        var offset = $('#fixed').offset();
        var topPadding = 0,
        bottomPadding = pageHeight_catalog.clientHeight - (productCard_catalog.clientHeight + header.clientHeight + breadcrums_catalog.clientHeight + catalogContent_catalog.clientHeight);
        $(window).scroll(function() {
            if (window.innerWidth >= 1007) {
                if ($(window).scrollTop() > offset.top) {
                    if ($(document).height() - bottomPadding > $(window).scrollTop() + $("#fixed").height()) $("#fixed").stop().animate({
                    marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                }
                else {
                    $('#fixed').stop().animate({marginTop: 0});
                }
            }
        });
    });
}
