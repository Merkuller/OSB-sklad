//stickySidebar_osbOnFloor

if (document.querySelector('.secondSectionMenu_osbOnFloor')) {
    let pageHeight_osbOnFloor = document.querySelector('body');
    let productCard_osbOnFloor = document.querySelector('.productCards');
    let header = document.querySelector('header');
    let slider_sobOnFloor = document.querySelector('.sectionOne_osbOnFloor');
    let breadcrums_osbOnFloor = document.querySelector('main > .wrapper');
    let secondSectionMenuTitle_osbOnFloor = document.querySelector('.secondSectionMenu_osbOnFloor');   
    

    $(document).ready(function () {
        var offset = $('#fixed').offset();
        var topPadding = 0,
        bottomPadding = pageHeight_osbOnFloor.clientHeight - (productCard_osbOnFloor.clientHeight + header.clientHeight + slider_sobOnFloor.clientHeight + breadcrums_osbOnFloor.clientHeight + secondSectionMenuTitle_osbOnFloor.clientHeight);
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
