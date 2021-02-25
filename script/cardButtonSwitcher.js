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