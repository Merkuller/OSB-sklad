if (document.querySelector('#newField')) {
    let fieldBlock_index = document.querySelector('.filedBlock_index'); // Контейнер с блоками плоскостей
    let template_index = document.querySelector('#newField').content; // Содержимое шаблона
    let newField_index = template_index.querySelector('.plane_index'); // Сохраняем содержимое шаблона в переменную
    let addNewField_index = document.querySelector('.addNewPlane_index'); // Кнопка добавления новой плоскости
    let addBtnArea_index = document.querySelector('.addButton_index'); // Контейнер с кнопкой добавления плоскости и текстом
    let nextFieldValue_index = document.querySelector('.filedsValue_index'); // Порядковый номер очередной плоскости
    let calculateItBtn_index = document.querySelector('.calculateIt_index'); // Кнопка расчитать
    let totalSquare_index = document.querySelector('.totalSquareValue_index'); // Вывод общей влечины S
    let requiredNumbers_index = document.querySelector('.requiredNumbersValue_index'); // Вывод общего количества плит
    let calcBtn_index = document.querySelector('.orderBtn_index'); // Кнопка заказать
    let fields_index = fieldBlock_index.children; // Динамическа коллекция дочерних элементов
    let x;


    let calculator = function(field) {
        let lengthValue = field.querySelector('.lengthField_index');
        let heightValue = field.querySelector('.heightField_index');
        x = lengthValue.value * heightValue.value;
        return x;
    }

    addNewField_index.addEventListener('click', function() {
        let newElement = newField_index.cloneNode(true);
        fieldBlock_index.appendChild(newElement);
        for (let i = 0; i <= fields_index.length - 1; i ++) {
            let fieldNumber_index = fields_index[i].querySelector('.fieldNumber_index');
            fieldNumber_index.textContent = i + 1;
        }
        nextFieldValue_index.textContent = fields_index.length + 1;
        if (fields_index.length === 6) {
            addBtnArea_index.style.display = "none";
            calculateItBtn_index.style.margin = "0px auto";
        }
    })

    calcBtn_index.addEventListener('click', function() {
        let total = 0;
        for (let i = 0; i <= fields_index.length - 1; i++) {
            calculator(fields_index[i]);
            total += x;
        }
        totalSquare_index.textContent = total;
    })
}
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
// Этот скрипт переключает кнопки карточки товара и и пределяет цену за шт и метр кв в зависимости от выбранного значения толщины 
if (document.querySelector('.productCard')) {
    let cardsProduct_productCard = document.querySelectorAll('.productCard');
    let selectBtn_productCard = [];

    for (let i = 0; i <= cardsProduct_productCard.length - 1; i ++) {
        let firstBtns = cardsProduct_productCard[i].querySelectorAll('.productBtn');
        let defaultPriceVaules = cardsProduct_productCard[i].querySelector('.materialPriceValue');
        let defaultValueNumbers = cardsProduct_productCard[i].querySelector('.materialValueNumber');
        for (let j = 0; j <= firstBtns.length - 1; j ++) {
            firstBtns[0].classList.add('selectButton');
            defaultPriceVaules.textContent = firstBtns[0].dataset.priceFilter;
            defaultValueNumbers.textContent = firstBtns[0].dataset.valueFilter;
        }
    }

    let btnsToggler_productCard = function (card) {
        let list = card.querySelectorAll('.productBtn');
        let priceList = card.querySelector('.materialPriceValue');
        let materialValue = card.querySelector('.materialValueNumber');
        for (let i = 0; i <= list.length - 1; i ++) {
            list[i].addEventListener('click', function () {
                list[i].classList.add('selectButton');
                priceList.textContent = list[i].dataset.priceFilter;
                materialValue.textContent = list[i].dataset.valueFilter;
                selectBtn_productCard[0] = list[i];
                for (let j = 0; j <= list.length - 1; j ++) {
                    if (selectBtn_productCard[0] !== list[j]) {
                        list[j].classList.remove('selectButton');
                    }
                }
            }) 
        }
    }

    for (var i = 0; i <= cardsProduct_productCard.length - 1; i ++) {
        cardsProduct_productCard[i].addEventListener('click', function () {
            btnsToggler_productCard(this);
        }, true)
    }
}
if (document.querySelector('.placeholder1_contacts')) {
    let citySelect3_contacts = document.querySelector('#city_contacts');
    let resetButton3_contacts = document.querySelector('.resetCity_contacts');
    let yourCity3_contacts = document.querySelector('.placeholder1_contacts');

    citySelect3_contacts.oninput = function() {
        if (citySelect3_contacts.value.length >= 1) {
            resetButton3_contacts.classList.add('shown_contacts');
            yourCity3_contacts.classList.add('moveCityText_contacts');
        } else {
            resetButton3_contacts.classList.remove('shown_contacts');
            yourCity3_contacts.classList.remove('moveCityText_contacts');
        };
    };
}
// Этот скрипт отслеживает наличие текста в поле ввода. И отображает её при его наличии. 
if (document.querySelector('.resetCity_delivery')) {
    let citySelect_delivery = document.querySelector('#city_delivery');
    let resetButton_delivery = document.querySelector('.resetCity_delivery');
    let yourCity1_delivery = document.querySelector('.placeholder1_delivery');

    citySelect_delivery.oninput = function() {
        if (citySelect_delivery.value.length >= 1) {
            resetButton_delivery.classList.add('shown_delivery');
            yourCity1_delivery.classList.add('moveCityText_delivery');
        } else {
            resetButton_delivery.classList.remove('shown_delivery');
            yourCity1_delivery.classList.remove('moveCityText_delivery');
        }
    }

    resetButton_delivery.addEventListener('click', function() {
        resetButton_delivery.classList.remove('shown_delivery');
    })
}
if (document.querySelector('.filterCollapse_osbOnFloor')) {
    let filterCheckbox_osbOnFloor = document.querySelector('.filterCollapse_osbOnFloor');

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 1006) {
            filterCheckbox_osbOnFloor.classList.remove('show');
        } else {
            filterCheckbox_osbOnFloor.classList.add('show');
        }
    })
}
if (document.querySelector('.slider2LinkShowAll_index')) {
    let tabsFirstFilter_index = document.querySelectorAll('.button_catalog');
    let filterLink_index = document.querySelector('.slider2LinkShowAll_index');
    let tabName_index = document.querySelector('.tabTitle_index');

    tabName_index.textContent = tabsFirstFilter_index[0].textContent;
    filterLink_index.href = tabsFirstFilter_index[0].dataset.link;

    for (let i = 0; i <= tabsFirstFilter_index.length - 1; i ++) {
        tabsFirstFilter_index[i].addEventListener('click', function() {
            tabName_index.textContent = tabsFirstFilter_index[i].textContent;
            filterLink_index.href = tabsFirstFilter_index[i].dataset.link;
        })
    }
}
// Этот скрипт определяет количество дополнительных элементов списка и по нажатию на кнопку "ещё" показывает их.

let footerList_index = document.querySelector('.footerMenuByApplicationList'); 
let elementsList_index = footerList_index.querySelectorAll('li');
let valueHiddenElements_index = footerList_index.querySelector('.hiddenListElements_index');
let moreListElements_index = footerList_index.querySelector('.moreEl');
let counter = 0;
let hiddenListElements_index = [];


for (let i = 0; i <= elementsList_index.length - 1; i ++) {
    counter ++;
    if (counter > 8) {
        elementsList_index[i].style.display = "none";
        hiddenListElements_index.push(elementsList_index[i]);
        valueHiddenElements_index.textContent = hiddenListElements_index.length;
    }
}

moreListElements_index.addEventListener('click', function() {
    for (let i = 0; i <= hiddenListElements_index.length - 1; i ++) {
        hiddenListElements_index[i].style.display = "block";
        moreListElements_index.style.display = "none";
    }
})
// Этот скрипт отвечает за галлерею страницы. 
if (document.querySelector('.page3ContentImg')) {
    let btns_productCard = document.querySelectorAll('.thicknessButton_productCard');
    let galleryImgContainer_productCard = document.querySelector('.page3ContentImg');
    let galleryBtns_productCard = document.querySelectorAll('.previewImg_productCard');
    let galleryImgs_productCard = document.querySelectorAll('.galleryBackground_productCard');
    let galleryBtnsArray_productCard = [];
    let selectedBtnsArray_productCard = [];
    let galleryImgsArray_productCard = [];

    if (btns_productCard.length > 0) {
        for (let btn of galleryBtns_productCard) {
            galleryBtnsArray_productCard.push(btn);
        }

        for (let pic of galleryImgs_productCard) {
            galleryImgsArray_productCard.push(pic);
        }
        if (galleryImgsArray_productCard.length > 0) {
            galleryImgContainer_productCard.style.backgroundImage = 'url(' + galleryImgsArray_productCard[0].getAttribute("src") + ')';

            for (let i = 0; i <= galleryBtnsArray_productCard.length - 1; i ++) {
                galleryBtnsArray_productCard[i].onclick = function () {
                    galleryBtnsArray_productCard[i].classList.add('shownIcon_productCard');
                    galleryImgContainer_productCard.style.backgroundImage = 'url(' + galleryImgsArray_productCard[i].getAttribute("src") + ')';
                    selectedBtnsArray_productCard[0] = galleryBtnsArray_productCard[i];
                    for (let j = 0; j <= galleryBtnsArray_productCard.length - 1; j ++) {
                        if (selectedBtnsArray_productCard[0] !== galleryBtnsArray_productCard[j]) {
                            galleryBtnsArray_productCard[j].classList.remove('shownIcon_productCard');
                        }
                    } 
                }
            }
        }
    }
}
// Этот скрипт перемещает placeholder в поле ввода по нажатию на него
if (document.querySelector('.mottexPhone_contacts')) {
    var citySelect = document.querySelector('#city_contacts');
    var yourCity1 = document.querySelector('.placeholder1_contacts');
    var resetButton = document.querySelector('.resetCity_contacts');

    /*Подсказка поле ввода "доставка"*/
    citySelect.onclick = function() {
        yourCity1.classList.add('moveCityText_contacts');
        resetButton_contacts.classList.add('shown_contacts');
    };

    resetButton.onclick = function() {
        yourCity1.classList.remove('moveCityText_contacts');
    };

    resetButton.addEventListener('click', function() {
        resetButton.classList.remove('shown_contacts');
    })
}


// Этот скрипт перемещает placeholder в поле ввода по нажатию на него
if (document.querySelector('.deliveryMenu_delivery')) {
    var citySelect = document.querySelector('#city_delivery');
    var yourCity1 = document.querySelector('.placeholder1_delivery');
    var resetButton = document.querySelector('.resetCity_delivery');


    /*Подсказка поле ввода "доставка"*/
    citySelect.onclick = function() {
        yourCity1.classList.add('moveCityText_delivery');
    };

    resetButton.onclick = function() {
        yourCity1.classList.remove('moveCityText_delivery');
        resetButton_delivery.classList.remove('shown_delivery');
    };
}


// Перемещение placeholder'а в поле ввода телефона вверх
if (document.querySelector('#phone') && document.querySelector('.placeholder')) {
    var phoneSelect_page1 = document.querySelector('#phone');
    var yourPhone_page1 = document.querySelector('.placeholder');

    phoneSelect_page1.onclick = function() {
        yourPhone_page1.classList.add('move');
    };
}
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
// Маска для поля ввода номера
if (document.querySelector('#phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('#phone'), function(input) {
            var keyCode;
            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                var pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                var matrix = "+7 (___)-___-__-__",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function(a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                    });
                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i)
                }
                var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                    function(a) {
                        return "\\d{1," + a.length + "}"
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                if (event.type == "blur" && this.value.length < 5)  this.value = ""
            }

            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false)

        });
    });
}
if (document.querySelector('.popover_productCard')) {
    let popover_productCard = document.querySelector('.popover_productCard');
    let popoverText_productCard = document.querySelector('.popoverText_productCard');

    let fadePopup_productCard = function () {
        popover_productCard.style.opacity = "0";
        popover_productCard.style.display = "none";
    }

    function openPopup (text, type) {
        popover_productCard.style.opacity = "1";
        popoverText_productCard.textContent = text;
        if (type === 'danger') {
            popover_productCard.style.borderColor = "#e84d4d";
            popoverText_productCard.style.color = "#e84d4d";
        }
        if (type === 'info') {
            popover_productCard.style.borderColor = "#5bc793";
            popoverText_productCard.style.color = "#5bc793";
        }
        if (type === 'warning') {
            popover_productCard.style.borderColor = "#d9c836";
            popoverText_productCard.style.color = "#d9c836";
        }
        setTimeout(fadePopup_productCard, 3000);
    }
}

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
if (document.querySelector('.secondSectionMenu_osbOnFloor')) {
    $(document).ready(function () {
        var offset = $('#fixed').offset();
        var topPadding = 0,
        bottomPadding = 4810;
        $(window).scroll(function() {
            if (window.innerWidth >= 1006) {
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
// Перключатель стилей у активных вкладок 
if (document.querySelector('.button_certificates')) {   
   let tabs_certificates = document.querySelectorAll('.button_certificates');
   let certificateName_certificates = document.querySelector('.serificateName_certificates');
   let selectTab;

    certificateName_certificates.textContent = tabs_certificates[0].textContent;
    tabs_certificates[0].classList.add('tabSelect');

    for (let i = 0; i <= tabs_certificates.length - 1; i ++) {
        tabs_certificates[i].addEventListener('click', function () {
            tabs_certificates[i].classList.add('tabSelect');
            selectTab = tabs_certificates[i];
            console.log(certificateName_certificates.textContent);
            certificateName_certificates.textContent = selectTab.textContent;  
            for (let j = 0; j <= tabs_certificates.length - 1; j ++) {
                if (tabs_certificates[j] !== selectTab) {
                    tabs_certificates[j].classList.remove('tabSelect');
                }
            }
        })
    }
}
// Этот скрипт перемещает грузовик и отображает кнопку прокрутки "в начало"
if (document.querySelector('.up-button') && document.querySelector('.track_index')) {
    var upButton = document.querySelector('.up-button');
    var track = document.querySelector('.track_index');

    window.onscroll = function() {
        if (window.pageYOffset > 3200) {
            upButton.classList.add('shown');
            track.classList.add('trackMove_index');
        } else {
            upButton.classList.remove('shown');
        };
    };

    upButton.onclick = function() {
        scrollTo(0, 0);
    };
}
// Этот скрипт переключает состояние кнопок карточки товара и определяет значения параметров страницы в зависимости от выбронного значения толщины
if (document.querySelector('.thicknessButtons_productCard')) {
    let btns_productCard = document.querySelectorAll('.thicknessButton_productCard');
    let price_productCard = document.querySelector('.priceForPieceValue_productCard');
    let priceForMeter = document.querySelector('.priceForMeterValue_productCard');
    let inStock_productCard = document.querySelector('.countInStock_productCard');
    let thicknessCharacteristic_productCard = document.querySelector('.thicknessValue_productCard');
    let weightCharacteristic_productCard = document.querySelector('.weigthValue_productCard');
    let hiddenValue = document.querySelector('.hiddenValue_productCard');
    let btnsArray_productCard = [];
    let selectBtnArray = [];

    for (let btn of btns_productCard) {
        btnsArray_productCard.push(btn)
    }

    price_productCard.textContent = btnsArray_productCard[0].dataset.price;
    priceForMeter.textContent = btnsArray_productCard[0].dataset.priceForMeter;
    inStock_productCard.textContent = btnsArray_productCard[0].dataset.count;
    thicknessCharacteristic_productCard.textContent = btnsArray_productCard[0].dataset.thicknessFilter;
    weightCharacteristic_productCard.textContent = btnsArray_productCard[0].dataset.weightFilter;
    hiddenValue.value = btnsArray_productCard[0].dataset.id;

    for (let i = 0; i <= btnsArray_productCard.length - 1; i ++) {
        btnsArray_productCard[i].onclick = function () {
            price_productCard.textContent = btnsArray_productCard[i].dataset.price;
            priceForMeter.textContent = btnsArray_productCard[i].dataset.priceForMeter;
            inStock_productCard.textContent = btnsArray_productCard[i].dataset.count;
            hiddenValue.value = btnsArray_productCard[i].dataset.id;
            thicknessCharacteristic_productCard.textContent = btnsArray_productCard[i].dataset.thicknessFilter;
            weightCharacteristic_productCard.textContent = btnsArray_productCard[i].dataset.weightFilter;
            selectBtnArray[0] = btnsArray_productCard[i];
            btnsArray_productCard[i].classList.add('selectButton');
            for (let j = 0; j <= btnsArray_productCard.length - 1; j ++) {
                if (selectBtnArray[0] !== btnsArray_productCard[j]) {
                    btnsArray_productCard[j].classList.remove('selectButton');
                }
            }
        }
    }
}
