//stickySidebar_shopBasket3

if (document.querySelector('.mainContentPart2_shopBasketThirdStep')) {
    let pageHeight_shopBasket1 = document.querySelector('body');
    let shopPart1_shopBasket1 = document.querySelector('.mainContent_shopBasketThirdStep');
    let header = document.querySelector('header');
    let breadcrums_shopBasket1 = document.querySelector('.firstSection_shopBasketThirdStep > .breadcrumbsOSB');
    let title_shopBasket1 = document.querySelector('.firstSection_shopBasketThirdStep > .sectionTitle_index');   
    

    $(document).ready(function () {
        var offset = $('#fixed_4').offset();
        var topPadding = 0,
        bottomPadding = pageHeight_shopBasket1.clientHeight - (shopPart1_shopBasket1.clientHeight + header.clientHeight + (breadcrums_shopBasket1.clientHeight + 80) + title_shopBasket1.clientHeight);
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