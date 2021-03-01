//stickySidebar_shopBasket1

if (document.querySelector('.mainContentPart2_shopBasketFirstStep')) {
    let pageHeight_shopBasket1 = document.querySelector('body');
    let shopPart1_shopBasket1 = document.querySelector('.mainContent_shopBasketFirstStep');
    let header = document.querySelector('header');
    // let breadcrums_shopBasket1 = document.querySelector('.firstSection_shopBasketFirstStep > .breadcrumbsOSB');
    let title_shopBasket1 = document.querySelector('.firstSection_shopBasketFirstStep > .sectionTitle_index');   
    

    $(document).ready(function () {
        var offset = $('#fixed_2').offset();
        var topPadding = 0,
        bottomPadding = pageHeight_shopBasket1.clientHeight - (shopPart1_shopBasket1.clientHeight + header.clientHeight + (120) + title_shopBasket1.clientHeight);
        $(window).scroll(function() {
            if (window.innerWidth >= 1007) {
                if ($(window).scrollTop() > offset.top) {
                    if ($(document).height() - bottomPadding > $(window).scrollTop() + $("#fixed_2").height()) $("#fixed_2").stop().animate({
                    marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                }
                else {
                    $('#fixed_2').stop().animate({marginTop: 0});
                }
            }
        });
    });
}