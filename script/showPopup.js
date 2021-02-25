//showPopup.js
//

let popup = document.querySelector('.popup');
let cards = document.querySelectorAll('.productCard');
if (popup && cards) {
    let closePopupBtn = popup.querySelector('.popupCloseBtn');
    let body = document.querySelector('body');
    let popupProductName = popup.querySelector('.popupProductName');
    let hiddenFormField = popup.querySelector('.goodName');

    let cardClickHandler = function(item) {
        let productCardBtn = item.querySelector('.refineRemainder');
        productCardBtn.addEventListener('click', function(evt) {
            popup.classList.add('showPopup');
            let prodcutName = item.querySelector('.productDescription > a');
            popupProductName.textContent = prodcutName.textContent;
            hiddenFormField.value = prodcutName.textContent;
            let popupActive = document.querySelector('.popup.showPopup');
        });
    }

    for (let i = 0; i < cards.length; i ++) {
        cardClickHandler(cards[i]);
    };

    closePopupBtn.addEventListener('click', function() {
        popup.classList.remove('showPopup');
    });

    document.addEventListener('keydown', function(evt){
        if (evt.key === 'Escape') {
            popup.classList.remove('showPopup');
        }
    });
}
