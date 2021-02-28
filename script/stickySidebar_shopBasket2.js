//stickySidebar_shopBasket2

if (document.querySelector('.mainContentPart2_shopBasketSecondStep')) {
    let pageHeight_shopBasket2 = document.querySelector('body');
    let shopPart1_shopBasket2 = document.querySelector('.mainContent_shopBasketSecondStep');
    let header = document.querySelector('header');
    let breadcrums_shopBasket2 = document.querySelector('.firstSection_shopBasketSecondStep > .breadcrumbsOSB');
    let title_shopBasket2 = document.querySelector('.firstSection_shopBasketSecondStep > .sectionTitle_index');   
    

    $(document).ready(function () {
        var offset = $('#fixed_4').offset();
        var topPadding = 0,
        bottomPadding = pageHeight_shopBasket2.clientHeight - (shopPart1_shopBasket2.clientHeight + header.clientHeight + (breadcrums_shopBasket2.clientHeight + 80) + title_shopBasket2.clientHeight);
        $(window).scroll(function() {
            if (window.innerWidth >= 1007) {
                if ($(window).scrollTop() > offset.top) {
                    if ($(document).height() - bottomPadding > $(window).scrollTop() + $("#fixed_4").height()) $("#fixed_4").stop().animate({
                    marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                }
                else {
                    $('#fixed_4').stop().animate({marginTop: 0});
                }
            }
        });
    });
}