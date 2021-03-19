if (document.querySelector('.fieldBlock_productCard')) {
    let fieldBlock_productCard = document.querySelector('.fieldBlock_productCard');
    let widthValue = 0;
    let heightValue = 0;
    let result = fieldBlock_productCard.querySelector('.result_productCard');
    let unitWidth = document.querySelector('.page3ContentHeadline').getAttribute('data-width');
    let unitLength = document.querySelector('.page3ContentHeadline').getAttribute('data-length');
    let quantityField = document.querySelector('.calculatorNumber_productCard');
    let quantityLink = document.querySelector('.goodsQuantity_productCard');
    let makeCalcBlock = document.querySelector('.youNeedIs_productCard');
    let thisWord = document.querySelector('.wordToDecline_productCard');

    // function getValue(attr) {
    //     if (evt.target.getAttribute('name') === attr) {
    //         return evt.target.value;
    //     }
    // }

    let wordArr = ['лист', 'листа', 'листов'];

    function wordDecline(num, words) {
        let count = num % 100;
        if (count >= 5 && count <= 20) {
            thisWord.textContent = words[2];
        } else {
            count = count % 10;
            if (count === 1) {
                thisWord.textContent = words[0];
            } else if (count >= 2 && count <= 4) {
                thisWord.textContent = words[1];
            } else {
                thisWord.textContent = words[2];
            }
        }
        return thisWord.textContent;
    }

    fieldBlock_productCard.addEventListener('input', (evt) => {
        if (evt.target.classList.contains('productCardCalcField_productCard')) {
            // widthValue = getValue('Ширина');
            // heightValue = getValue('Высота');
            if (evt.target.getAttribute('name') === 'Ширина') {
                widthValue = evt.target.value;
            } else if (evt.target.getAttribute('name') === 'Высота') {
                heightValue = evt.target.value;
            }
            if (widthValue.length > 0 && heightValue.length > 0) {
                makeCalcBlock.style.transform = 'translateY(25px)';
                makeCalcBlock.style.opacity = '1';
                result.textContent = (Math.ceil((Number(widthValue))/unitWidth)) * (Math.ceil((Number(heightValue))/unitLength)); 
                wordDecline(result.textContent, wordArr);
            } else {
                makeCalcBlock.style.transform = 'translateY(0px)';
                makeCalcBlock.style.opacity = '0';
            }
        }
    });
  
    quantityLink.addEventListener('click', (evt) => {
        evt.preventDefault();
        quantityField.value = result.textContent;
    });
}