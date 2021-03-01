//addNewTemplate.js
//Калькулятор на главной

let formats_select = document.getElementById('format_list')
let height_select = document.getElementById('heigth_list')
let tmp = []
let parent_container = document.getElementById('parent')

//panels  << index

function changeSelects(event) {
    if (event.target.getAttribute('id') === 'format_list') {
        formats_select = event.target
        height_select = formats_select.closest('.form').querySelector('.heigth_list')
        height_select.innerHTML = ''
        tmp = []
        let id = formats_select.selectedIndex
        let length = Number(formats_select[id].dataset.length)
        let width = Number(formats_select[id].dataset.width)
        panels.forEach(item => {
            if (item.length == length && item.width == width) {
                createOption(height_select, item.heigth, item)
            }
        })
    }

}

function createOption(domElement, textContent, item) {
    if (domElement) {
        if (tmp.indexOf(textContent) < 0) {
            let el = document.createElement("option")
            el.textContent = textContent
            el.value = item.id
            el.dataset.length = item.length
            el.dataset.width = item.width
            el.dataset.heigth = item.heigth
            domElement.appendChild(el)
            tmp.push(textContent)
        }
    }

}

function getAllValues() {
    let AllForms = document.querySelectorAll('.form')
    let p = []
    AllForms.forEach(square => {
        let form = new FormData(square)
        let obj = {}
        for(let pair of form.entries()) {
            obj[pair[0]] = pair[1]
        }
        p.push(obj)
    })

    return p
}

function renderResults(array) {
    let result_parent = document.getElementById('result_parent')
    let result_template = document.getElementById('result_template')
    let result_child = document.querySelectorAll('.result_child')
    result_child.forEach(item => item.remove())
    let i=1
    array.forEach(result => {
        let clone = result_template.cloneNode()
        let id = Date.now()
        clone.id = id
        clone.classList.add ('result_child')
        clone.style.display = "block"
        clone.innerHTML = result_template.innerHTML
        clone.querySelector('.square_id').innerHTML     = i++
        // clone.querySelector('.panel_name').innerHTML     = result.name
        clone.querySelector('.square').innerHTML        = result.s_user
        clone.querySelector('.panel_count').innerHTML   = result.count
        // clone.querySelector('.panel_cost').innerHTML    = result.price
        clone.querySelector('.total_price').innerHTML   = result.total_cost
        result_parent.appendChild(clone)

    } )
}

let add_square = document.querySelector('.addNewPlane_index')
    if(add_square) {
        add_square.addEventListener('click', (e) => {
        let template = document.getElementById('template')
        if (document.querySelectorAll('.child_element').length >= 4) {
            e.target.classList.add('disabled')
        }
        let clone = template.cloneNode()
        let id = Date.now()
        clone.id = id
        clone.classList.add('child_element')
        clone.innerHTML = template.innerHTML
        parent_container.appendChild(clone)

        })
    }


if (parent_container) {
    parent_container.addEventListener('change', e => changeSelects(e))
    panels.forEach(item => {
        createOption(formats_select, item.length + 'x' + item.width, item)
        createOption(height_select, item.heigth, item)
    })
}

let calc_button = document.getElementById('calc_button')
    if (calc_button) {
        calc_button.addEventListener('click', () => {
            let AllSquares = getAllValues()
            let results = []
            AllSquares.forEach(square => {
                let panel = panels.filter(item => item.id == square.heigth)
                let obj = {}
                panel.forEach(item => {
                    let s_user = (Number(square.length_field) * Number(square.height_filed)) / 1000000
                    let s_panel = (Number(item.length) * Number(item.width)) / 1000000
                    let count = Math.ceil(s_user / s_panel)
                    let total_cost = count * Number(item.price)
                    obj = {
                        name: item.name,
                        count: count,
                        s_user: parseFloat(s_user).toFixed(2),
                        price: item.price.toLocaleString('ru-RU'),
                        total_cost: total_cost.toLocaleString('ru-RU')
                    }
                    results.push(obj)
                })

            })
            renderResults(results)
        })
    }

// Этот скрипт переключает стили у активных опций доставки и отображает соответсвующую ей картинку
// buttonContent_delivery.js

if (document.querySelector('.deliveryButton_delivery')) {
    let btns_delivery = document.querySelectorAll('.deliveryOption_delivery');
    let imgWindow_delivery = document.querySelector('.deliveryContent_delivery');
    let btnsArray_delivery = [];
    let selectBtnArray_delivery = [];

    for (let btn of btns_delivery) {
        btnsArray_delivery.push(btn);
    }

    imgWindow_delivery.style.backgroundImage = 'url(' + btnsArray_delivery[0].getAttribute("data-src") + ')';
    imgWindow_delivery.style.backgroundSize = 'cover';

    for (let i = 0; i <= btnsArray_delivery.length - 1; i ++) {
        btnsArray_delivery[i].onclick = function () {
            btnsArray_delivery[i].classList.add('shownButton_delivery');
            selectBtnArray_delivery[0] = btnsArray_delivery[i];
            imgWindow_delivery.style.backgroundImage = 'url(' + btnsArray_delivery[i].getAttribute("data-src") + ')';
            imgWindow_delivery.style.backgroundSize = 'cover';
            for (let j = 0; j <= btnsArray_delivery.length - 1; j ++) {
                if (selectBtnArray_delivery[0] !== btnsArray_delivery[j]) {
                    btnsArray_delivery[j].classList.remove('shownButton_delivery');
                }
            }
        }
    }
}

// Этот скрипт фильтрует содержимое вкладок и переключает стиль активной вкладки
//buttonToggleFor_delivery
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

// Этот скрипт выполняет сортировку контента на странице catalog
// buttonTogglerFor_catalog

if (document.querySelector('.mainContent_catalog')) {

    let filterBtns_catalog = document.querySelectorAll('.firstTabs_index');
    let cards_catalog = document.querySelectorAll('.s2_slide_catalog');
    console.log(cards_catalog);

    
    // Состояние фильтра по-умолчанию
    let defaultBtn_catalog = filterBtns_catalog[0];
    for (let i = 0; i <= cards_catalog.length - 1; i ++) {
        if (defaultBtn_catalog.dataset.category !== cards_catalog[i].dataset.id) {
            cards_catalog[i].style.display = "none";
        }
    }


    // Фильтрация
    let btnsSorting = function (filterValue) {
        for (let i = 0; i <= cards_catalog.length - 1; i ++) {
            cards_catalog[i].style.display = "none";
            if (cards_catalog[i].dataset.id === filterValue) {
                cards_catalog[i].style.display = "block";
            }
        }
    }

    //Фильтр
    for (let i = 0; i <= filterBtns_catalog.length - 1; i ++) {
        filterBtns_catalog[0].classList.add('tabSelect');
        filterBtns_catalog[i].onclick = function () {
            filterBtns_catalog[i].classList.add('tabSelect');
            let x = filterBtns_catalog[i];
            for (let j = 0; j <= filterBtns_catalog.length - 1; j ++) {
                if (x !== filterBtns_catalog[j]) {
                    filterBtns_catalog[j].classList.remove('tabSelect');
                }
            }
            let filterValue = x.dataset.category;
            btnsSorting(filterValue);
        }
    }
}
// Этот скрипт переключает кнопки карточки товара и и пределяет цену за шт и метр кв в зависимости от выбранного значения толщины
//cardButtonSwitcher
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

//
//closeButtonAppear_contacts


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
//closeButtonAppear_delivery

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

//filterNameToggler_index

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

//filterNameToggler_index

if (document.querySelector('.slider2LinkShowAll_index')) {
    let tabsFirstFilter_index = document.querySelectorAll('.button_catalog');
    let filterLink_index = document.querySelector('.slider2LinkShowAll_index');
    let tabName_index = document.querySelector('.tabTitle_index');
    if (tabName_index) {
        tabName_index.textContent = tabsFirstFilter_index[0].textContent;
        filterLink_index.href = tabsFirstFilter_index[0].dataset.link;

        for (let i = 0; i <= tabsFirstFilter_index.length - 1; i ++) {
            tabsFirstFilter_index[i].addEventListener('click', function() {
                tabName_index.textContent = tabsFirstFilter_index[i].textContent;
                filterLink_index.href = tabsFirstFilter_index[i].dataset.link;
            })
        }
    }

}

// Этот скрипт определяет количество дополнительных элементов списка и по нажатию на кнопку "ещё" показывает их.

let footerList = document.querySelector('.footerMenuByApplicationList'); 
let elementsList = footerList.querySelectorAll('li');
let valueHiddenElements = footerList.querySelector('.hiddenListElements');
let moreListElements = footerList.querySelector('.moreEl');
let counter = 0;
let hiddenListElements = [];

moreListElements.style.visibility = 'hidden';

for (let i = 0; i <= elementsList.length - 1; i ++) {
    counter ++;
    if (counter > 8) {
        moreListElements.style.visibility = 'visible';
        elementsList[i].style.display = "none";
        hiddenListElements.push(elementsList[i]);
        valueHiddenElements.textContent = hiddenListElements.length;
    }
}

moreListElements.addEventListener('click', function() {
    for (let i = 0; i <= hiddenListElements.length - 1; i ++) {
        hiddenListElements[i].style.display = "block";
        moreListElements.style.display = "none";
    }
})
// Этот скрипт отвечает за галлерею страницы.
//gallerySwitcher_productCard
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
            galleryImgContainer_productCard.style.backgroundSize = 'cover';

            for (let i = 0; i <= galleryBtnsArray_productCard.length - 1; i ++) {
                galleryBtnsArray_productCard[i].onclick = function () {
                    galleryBtnsArray_productCard[i].classList.add('shownIcon_productCard');
                    galleryImgContainer_productCard.style.backgroundImage = 'url(' + galleryImgsArray_productCard[i].getAttribute("src") + ')';
                    galleryImgContainer_productCard.style.backgroundSize = 'cover';
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
//inputYourCitySelect_contacts
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
//inputYourCitySelect_delivery
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
//inputYourPhoneNumber

if (document.querySelector('#phone') && document.querySelector('.placeholder')) {
    var phoneSelect_page1 = document.querySelector('#phone');
    var yourPhone_page1 = document.querySelector('.placeholder');

    phoneSelect_page1.onclick = function() {
        yourPhone_page1.classList.add('move');
    };
}

// Этот скрипт отображает слайдер главного баннера страницы
//mainSlider_index
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
//phoneNumberMask
if (document.querySelector('.dataField_shopBasketThirdStep')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.dataField_shopBasketThirdStep'), function(input) {
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
// Маска для поля ввода номера
//phoneNumberMask
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

//popover_productCard
if (document.querySelector('.popover_productCard')) {
    let popover_productCard = document.querySelector('.popover_productCard');
    let popoverText_productCard = document.querySelector('.popoverText_productCard');
    

    let fadePopup_productCard = function () {
        popover_productCard.style.opacity = "0";
        popover_productCard.style.display = "none";
        popoverText_productCard.textContent = '';
        popover_productCard.style.borderColor = "none";
        popoverText_productCard.style.color = "none";
    }

    function openPopup (text, type) {
        popover_productCard.style.opacity = "1";
        popover_productCard.style.display = "block";
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

// Маска для поля ввода номера
//popupPhoneNumberMask
if (document.querySelector('.popup')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('#popupPhoneNumber'), function(input) {
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
if (document.querySelector('.productCard')) {
    let popup = document.querySelector('.popup');
    let cards = document.querySelectorAll('.productCard');
    let closePopupBtn = popup.querySelector('.popupCloseBtn');
    let popupProductName = popup.querySelector('.popupProductName');
    let hiddenFormField = popup.querySelector('.goodName');
    let html = document.querySelector('html');

    let popupOpen = function () {
        popup.classList.add('showPopup');
        popup.addEventListener('click', function(e) {
            if (!e.target.closest('.popupContent')) {
                popupClose();
                bodyLock();
            }
        })
        bodyLock();
    };

    let popupClose = function () {
        popup.classList.remove('showPopup');
    };

    let bodyLock = function () {
        let popupActive = document.querySelector('.popup.showPopup');
        if (popupActive) {
            html.classList.add('lock');
            html.classList.add('bodyPaddingRight');
        } else {
            html.classList.remove('lock');
            html.classList.remove('bodyPaddingRight');
        }
    };

    let cardClickHandler = function(item) {
        if (item.querySelector('.refineRemainder')) {
            let productCardBtn = item.querySelector('.refineRemainder');
            productCardBtn.addEventListener('click', function(evt) {
                popupOpen();
                let prodcutName = item.querySelector('.productDescription > a');
                popupProductName.textContent = prodcutName.textContent;
                hiddenFormField.value = prodcutName.textContent;
            });
        }
    }

    for (let i = 0; i < cards.length; i ++) {
        cardClickHandler(cards[i]);
    };

    closePopupBtn.addEventListener('click', function() {
        popupClose();
        bodyLock();
    });

    document.addEventListener('keydown', function(evt){
        if (evt.key === 'Escape') {
            popupClose();
            bodyLock();
        }
    });
}
// Этот скрипт отображает баннер страницы
//slider_osbOnFloor
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
//stickySidebar_shopBasket2

if (document.querySelector('.mainContentPart2_shopBasketSecondStep')) {
    let pageHeight_shopBasket2 = document.querySelector('body');
    let shopPart1_shopBasket2 = document.querySelector('.mainContent_shopBasketSecondStep');
    let header = document.querySelector('header');
    // let breadcrums_shopBasket2 = document.querySelector('.firstSection_shopBasketSecondStep > .breadcrumbsOSB');
    let title_shopBasket2 = document.querySelector('.firstSection_shopBasketSecondStep > .sectionTitle_index');   
    

    $(document).ready(function () {
        var offset = $('#fixed_3').offset();
        var topPadding = 0,
        bottomPadding = pageHeight_shopBasket2.clientHeight - (shopPart1_shopBasket2.clientHeight + header.clientHeight + (120) + title_shopBasket2.clientHeight);
        $(window).scroll(function() {
            if (window.innerWidth >= 1007) {
                if ($(window).scrollTop() > offset.top) {
                    if ($(document).height() - bottomPadding > $(window).scrollTop() + $("#fixed_3").height()) $("#fixed_3").stop().animate({
                    marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                }
                else {
                    $('#fixed_3').stop().animate({marginTop: 0});
                }
            }
        });
    });
}
//stickySidebar_shopBasket3

if (document.querySelector('.mainContentPart2_shopBasketThirdStep')) {
    let pageHeight_shopBasket1 = document.querySelector('body');
    let shopPart1_shopBasket1 = document.querySelector('.mainContent_shopBasketThirdStep');
    let header = document.querySelector('header');
    // let breadcrums_shopBasket1 = document.querySelector('.firstSection_shopBasketThirdStep > .breadcrumbsOSB');
    let title_shopBasket1 = document.querySelector('.firstSection_shopBasketThirdStep > .sectionTitle_index');   
    

    $(document).ready(function () {
        var offset = $('#fixed_4').offset();
        var topPadding = 0,
        bottomPadding = pageHeight_shopBasket1.clientHeight - (shopPart1_shopBasket1.clientHeight + header.clientHeight + (120) + title_shopBasket1.clientHeight);
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
// Перключатель стилей у активных вкладок
//tabsToggler_certificates
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

if (document.querySelector('.firstNavMenu')) {
    if (window.innerWidth <= 1199) {
            $( init );
            function init() {
                $('#citySelectTopNav').append( $('#citySelectBottomNav>.test1') );

            }
        }
    }
// Этот скрипт перемещает грузовик и отображает кнопку прокрутки "в начало"
//upButton_index
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

// Этот скрипт переключает состояние кнопок карточки товара и
// определяет значения параметров страницы в зависимости от выбронного значения толщины
// valueSender_productCard.js


if (document.querySelector('.thicknessButtons_productCard')) {
    let btns_productCard = document.querySelectorAll('.thicknessButton_productCard');
    

    function renderProductParameters(obj) {
        let price_productCard = document.querySelector('.priceForPieceValue_productCard');
        let priceForMeter = document.querySelector('.priceForMeterValue_productCard');
        let inStock_productCard = document.querySelector('.countInStock_productCard');
        let thicknessCharacteristic_productCard = document.querySelector('.thicknessValue_productCard');
        let weightCharacteristic_productCard = document.querySelector('.weigthValue_productCard');
        let densityFilter = document.querySelector('.densityValue_productCard')
        let hiddenValue = document.querySelector('.hiddenValue_productCard');
        price_productCard.textContent = obj.price;
        priceForMeter.textContent = obj.priceForMeter;
        inStock_productCard.textContent = obj.count;
        thicknessCharacteristic_productCard.textContent = obj.thicknessFilter;
        weightCharacteristic_productCard.textContent = obj.weightFilter;
        densityFilter.textContent = obj.densityFilter;
        hiddenValue.value = obj.id;
    }

    function getProductParameters(element) {
        let obj = {}

        if (element) {
            obj = {
                price: element.dataset.price,
                priceForMeter: element.dataset.priceForMeter,
                count: element.dataset.count,
                thicknessFilter: element.dataset.thicknessFilter,
                weightFilter: element.dataset.weightFilter,
                densityFilter:element.dataset.densityFilter,
                id: element.dataset.id
            }
        }

        return obj
    }

    function changeProductName(obj){
        document.querySelectorAll('.productHeight').forEach(element => {
            element.innerHTML = obj.thicknessFilter
        })

    }

    document.addEventListener('DOMContentLoaded',() => {
        let active_btn = getProductParameters(document.querySelector('.selectButton'))
        renderProductParameters(active_btn)
        changeProductName(active_btn)
    })

    btns_productCard.forEach( element => {
        element.addEventListener('click', e => {
            let productParameter = getProductParameters(e.target)
            renderProductParameters(productParameter)
            changeProductName(productParameter)
            document.querySelector('.selectButton').classList.remove('selectButton')
            e.target.classList.add('selectButton')
        })
    })
}
