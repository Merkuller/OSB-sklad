if (document.querySelector('.makeReview_reviews')) {
    let popup = document.querySelector('.popup');
    let closePopupBtn = popup.querySelector('.popupCloseBtn');
    

    let html = document.querySelector('html');
    let makeReview = document.querySelector('.makeReview_reviews');

    let popupOpen = function () {
        popup.classList.add('showModal');
        popup.addEventListener('click', function(e) {
            if (!e.target.closest('.popupContent')) {
                popupClose();
                bodyLock();
            }
        })
        bodyLock();
    };

    let popupClose = function () {
        popup.classList.remove('showModal');
    };

    let bodyLock = function () {
        let popupActive = document.querySelector('.popup.showModal');
        if (popupActive) {
            html.classList.add('lock');
            html.classList.add('bodyPaddingRight');
        } else {
            html.classList.remove('lock');
            html.classList.remove('bodyPaddingRight');
        }
    };

    makeReview.addEventListener('click', () => {
        popupOpen();
    });

    closePopupBtn.addEventListener('click', function() {
        popupClose();
        bodyLock();
    });

    document.addEventListener('keydown', function(e){
        if (e.key === 'Escape') {
            popupClose();
            bodyLock();
        }
    });
}