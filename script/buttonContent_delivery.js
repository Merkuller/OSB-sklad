// Этот скрипт переключает стили у активных опций доставки и отображает соответсвующую ей картинку
if (document.querySelector('.deliveryButton_delivery')) {
    let btns_delivery = document.querySelectorAll('.deliveryOption_delivery');
    let imgWindow_delivery = document.querySelector('.deliveryContent_delivery');
    let btnsArray_delivery = [];
    let selectBtnArray_delivery = [];

    for (let btn of btns_delivery) {
        btnsArray_delivery.push(btn);
    }

    imgWindow_delivery.style.backgroundImage = 'url(' + btnsArray_delivery[0].getAttribute("data-src") + ')';


    for (let i = 0; i <= btnsArray_delivery.length - 1; i ++) {
        btnsArray_delivery[i].onclick = function () {
            btnsArray_delivery[i].classList.add('shownButton_delivery');
            selectBtnArray_delivery[0] = btnsArray_delivery[i];
            imgWindow_delivery.style.backgroundImage = 'url(' + btnsArray_delivery[i].getAttribute("data-src") + ')';
            for (let j = 0; j <= btnsArray_delivery.length - 1; j ++) {
                if (selectBtnArray_delivery[0] !== btnsArray_delivery[j]) {
                    btnsArray_delivery[j].classList.remove('shownButton_delivery');
                }
            }
        }
    }
}