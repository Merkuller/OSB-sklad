if (document.querySelector('.fieldBlock_productCard')) {
    let fieldBlock_productCard = document.querySelector('.fieldBlock_productCard');
    let widthValue = 0;
    let heightValue = 0;
    let result = fieldBlock_productCard.querySelector('.result');

    fieldBlock_productCard.addEventListener('input', (evt) => {
        if (evt.target.classList.contains('productCardCalcField_productCard')) {
            if (evt.target.getAttribute('name') === 'Ширина') {
                widthValue = evt.target.value;
            } else if (evt.target.getAttribute('name') === 'Высота') {
                heightValue = evt.target.value;
            }
            result.textContent = Number(widthValue) + Number(heightValue); 
        }
    });
}