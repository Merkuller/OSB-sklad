if (document.querySelector('.firstSectionPage3Content') || document.querySelector('.productCards')) {
    let popup = document.querySelector('.sectionThree_productCard .popup');
        modalForComment = document.querySelector('.sectionTwo_productCard .popup');
        closePopupBtn = document.querySelectorAll('.popupCloseBtn');
        popupProductName = popup.querySelector('.popupProductName');
        hiddenFormField = popup.querySelector('.goodName');
        html = document.querySelector('html');
        modalForComment = document.querySelector('.sectionTwo_productCard .popup');
        popups = document.querySelectorAll('.popup');

    let popupOpen = function (el) {
        el.classList.add('showPopup');
        el.addEventListener('click', function(e) {
            if (!e.target.closest('.popupContent')) {
                popupClose(el);
                bodyLock();
            }
        })
        bodyLock();
    };

    let popupClose = function (el) {
        el.classList.remove('showPopup');
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

    document.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('refineRemainder')) {
            popupOpen(popup);
            let productName = evt.target.parentElement.querySelector('.productDescription > a');
            popupProductName.textContent = productName.textContent;
            hiddenFormField.value = productName.textContent;
        } 
        if (evt.target.classList.contains('makeReview_reviews')) {
            popupOpen(modalForComment); 
        }
        if (evt.target.classList.contains('refineRemainderOnInterface')) {
            popupOpen(popup);
            let productName = evt.target.parentElement.querySelector('.page3ContentHeadline');
            popupProductName.textContent = productName.textContent;
            hiddenFormField.value = productName.textContent;
        }
    });


    popups.forEach((el) => {
        let closeBtn = el.querySelector('.popupCloseBtn');
        closeBtn.addEventListener('click', () => {
            popupClose(el);
            bodyLock();
        });
    })

    document.addEventListener('keydown', function(evt){
        if (evt.key === 'Escape') {
            popupClose(popup);
            if (document.querySelector('.firstSectionPage3Content')) popupClose(modalForComment);
            bodyLock();
        }
    });
}