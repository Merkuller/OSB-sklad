// Этот скрипт фильтрует содержимое вкладок и переключает стиль активной вкладки
if (document.querySelector('.deliveryButton_delivery')) {
    let deliveryBtn_delivery = document.querySelectorAll('.deliveryButton_delivery');
    let btnDelivery_delivery = document.querySelectorAll('.deliveryOption_delivery');
    let btnDeliveryArray_delivery = [];
    let deliveryBtnArray_delivery = [];
    let selectedBtnArray_delivery = [];

    for (let btn of btnDelivery_delivery) {
        btnDeliveryArray_delivery.push(btn);
    }

    for (let btn of deliveryBtn_delivery) {
        deliveryBtnArray_delivery.push(btn);
    }

    // Фильтрация
    let btnsSorting = function (filterValue) {
        for (let i = 0; i <= btnDeliveryArray_delivery.length - 1; i ++) {
            btnDeliveryArray_delivery[i].style.display = "none";
            if (btnDeliveryArray_delivery[i].dataset.criterionFilter === filterValue) {
                btnDeliveryArray_delivery[i].style.display = "block";
            }
        }
    }

    // Состояние фильтра по-умолчанию
    let defaultBtn_delivery = deliveryBtnArray_delivery[0];
    for (let i = 0; i <= btnDelivery_delivery.length - 1; i ++) {
        if (defaultBtn_delivery.dataset.filter !== btnDelivery_delivery[i].dataset.criterionFilter) {
            btnDelivery_delivery[i].style.display = "none";
        }
    }

    // Фильтр
    for (let i = 0; i <= deliveryBtnArray_delivery.length - 1; i ++) {
        deliveryBtnArray_delivery[i].onclick = function () {
            deliveryBtnArray_delivery[i].classList.add('buttonClick_delivery');
            selectedBtnArray_delivery[0] = deliveryBtnArray_delivery[i];
            let filterValue = selectedBtnArray_delivery[0].dataset.filter;
            btnsSorting(filterValue);
            for (let j = 0; j <= deliveryBtnArray_delivery.length - 1; j ++) {
                if (selectedBtnArray_delivery[0] !== deliveryBtnArray_delivery[j]) {
                    deliveryBtnArray_delivery[j].classList.remove('buttonClick_delivery');
                }
            }
        }    
    }
}