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