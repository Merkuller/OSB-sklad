if (document.querySelector('.fieldBlock_productCard')) {
    let fieldBlock_productCard = document.querySelector('.fieldBlock_productCard');
    let widthValue = 0;
    let heightValue = 0;
    let result = fieldBlock_productCard.querySelector('.result_productCard');
    let unitWidth = document.querySelector('.page3ContentHeadline').getAttribute('data-width');
    let unitLength = document.querySelector('.page3ContentHeadline').getAttribute('data-length');
    let quantityField = document.querySelector('.calculatorNumber_productCard');
    let quantityLink = document.querySelector('.goodsQuantity_productCard');

    // function getValue(attr) {
    //     if (evt.target.getAttribute('name') === attr) {
    //         return evt.target.value;
    //     }
    // }

    fieldBlock_productCard.addEventListener('input', (evt) => {
        if (evt.target.classList.contains('productCardCalcField_productCard')) {
            // widthValue = getValue('Ширина');
            // heightValue = getValue('Высота');
            if (evt.target.getAttribute('name') === 'Ширина') {
                widthValue = evt.target.value;
            } else if (evt.target.getAttribute('name') === 'Высота') {
                heightValue = evt.target.value;
            }
            result.textContent = (Math.ceil((Number(widthValue))/unitWidth)) * (Math.ceil((Number(heightValue))/unitLength)); 
        }
    });

    quantityLink.addEventListener('click', (evt) => {
        evt.preventDefault();
        quantityField.value = result.textContent;
    });
}