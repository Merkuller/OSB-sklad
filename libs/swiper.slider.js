
        document.querySelector('.swiper-wrapper').classList.remove('sliderContent_catalog');
        import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
        // import Swiper from '../libs/swiper-bundle.esm.browser.min.js';
        // import Swiper from 'swiper';
        // let  {Swiper} = require ('swiper');
        export function sayHi(options, containerSelector, categoriesButtons, buttons) {
    
                function initSwiper(containerSelector) {
                    return new Swiper(containerSelector + ' .swiper-container', options);
                }
    
                function initPortfolio (

    
                ) {
                    const $categoriesButtons = categoriesButtons
                     //console.log($categoriesButtons);
    
                    const itemsSwiper = initSwiper(containerSelector);
                    const $items = $('.catalog-slider-slide', containerSelector).clone();
    
                    function activateCategoryButton($button) {
                        const categoryId = $button.data('categoryId');
                        $categoriesButtons.removeClass('tabSelect');
                        $button.addClass('tabSelect');
    
                        const $newSlides = $items.filter(function() {
                            const categories = $(this).data('categories');
                            return categories ? categories.indexOf(categoryId) !== -1 : false;
                        });
    
                        itemsSwiper.removeAllSlides();
                        itemsSwiper.appendSlide($newSlides.toArray());
                    }
    
                    if ($categoriesButtons && $categoriesButtons.length) {
                        activateCategoryButton($categoriesButtons.first());
                        $categoriesButtons.on('click', function() {
                            activateCategoryButton($(this));
                        });
                    }
                };
    
                initPortfolio();
            }
    
            const categoriesButtons = $('.slider-osb-nav').find(
                        '.slider-osb-nav__item'
                    );
            const categoriesButtons2 = $('.slider-reviews-nav').find(
                        '.slider-reviews-nav__item'
                    );

                const options = {
                    navigation: {
                        nextEl: '.right1Index',
                        prevEl: '.left1Index'
                    },
                    pagination: {
                        el: '.totalNumber_index',
                        type: 'fraction',
                        },
                    slidesPerView: 5,
                    spaceBetween: 20,
                    preloadImages: false,
                    freeMode: true,
                    loop: true,
                    breakpoints: {
                        2560: {
                            slidesPerView: 5,
                            spaceBetween: 40
                        },
                        1500: {
                            slidesPerView: 5,
                        },
                        1100: {
                            slidesPerView: 4,
                        },
                        816: {
                            slidesPerView: 3,
                            
                        },
                        608: {
                            slidesPerView: 2,

                        },
                        200: {
                            slidesPerView: 1,
                            centeredSlides: true,
                            freeMode: false
                        }
                    }
                };
                const options2 = {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    preloadImages: false,
                    navigation: {
                        nextEl: '.s3_right2Index',
                        prevEl: '.s3_left2Index'
                    },
                    pagination: {
                        el: '.totalNumber_index',
                        type: 'fraction',
                    },
                    breakpoints: {
                        2560: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        1500: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        800: {
                            slidesPerView: 2,
                        },
                        700: {
                            slidesPerView: 2,
                        },
                        200: {
                            slidesPerView: 1,
                            centeredSlides: true
                        }
                    }
                };
                const buttons = '.button_catalog'
                const buttons2 = '.button_reviews'
            sayHi(options, '#slider', categoriesButtons, buttons )
            sayHi(options2, '#slider2', categoriesButtons2, buttons2 )
