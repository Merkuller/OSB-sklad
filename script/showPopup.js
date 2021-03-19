if (document.querySelector('.productCards')) {
    let popup = document.querySelector('.popup');
    let cards = document.querySelectorAll('.productCard');
    let closePopupBtn = popup.querySelector('.popupCloseBtn');
    let popupProductName = popup.querySelector('.popupProductName');
    let hiddenFormField = popup.querySelector('.goodName');
    let html = document.querySelector('html');

    let productCards = document.querySelector('.productCards');

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

    // let cardClickHandler = function(item) {
        productCards.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('refineRemainder')) {
                // let productCardBtn = item.querySelector('.refineRemainder');
                // productCardBtn.addEventListener('click', function(evt) {
                    popupOpen();
                    let prodcutName = evt.target.querySelector('.productDescription > a');
                    popupProductName.textContent = prodcutName.textContent;
                    hiddenFormField.value = prodcutName.textContent;
                // });
            }
        })
    // }

    // for (let i = 0; i < cards.length; i ++) {
    //     cardClickHandler(cards[i]);
    // };

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