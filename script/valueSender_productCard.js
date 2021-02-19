// Этот скрипт переключает состояние кнопок карточки товара и
// определяет значения параметров страницы в зависимости от выбронного значения толщины
// valueSender_productCard.js


if (document.querySelector('.thicknessButtons_productCard')) {
    let btns_productCard = document.querySelectorAll('.thicknessButton_productCard');
    let price_productCard = document.querySelector('.priceForPieceValue_productCard');
    let priceForMeter = document.querySelector('.priceForMeterValue_productCard');
    let inStock_productCard = document.querySelector('.countInStock_productCard');
    let thicknessCharacteristic_productCard = document.querySelector('.thicknessValue_productCard');
    let weightCharacteristic_productCard = document.querySelector('.weigthValue_productCard');
    let hiddenValue = document.querySelector('.hiddenValue_productCard');

    function renderProductParameters(obj) {
        price_productCard.textContent = obj.price;
        priceForMeter.textContent = obj.priceForMeter;
        inStock_productCard.textContent = obj.count;
        thicknessCharacteristic_productCard.textContent = obj.thicknessFilter;
        weightCharacteristic_productCard.textContent = obj.weightFilter;
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


//     for (let i = 0; i <= btnsArray_productCard.length - 1; i ++) {
//         btnsArray_productCard[i].onclick = function () {
//             price_productCard.textContent = btnsArray_productCard[i].dataset.price;
//             priceForMeter.textContent = btnsArray_productCard[i].dataset.priceForMeter;
//             inStock_productCard.textContent = btnsArray_productCard[i].dataset.count;
//             hiddenValue.value = btnsArray_productCard[i].dataset.id;
//             thicknessCharacteristic_productCard.textContent = btnsArray_productCard[i].dataset.thicknessFilter;
//             weightCharacteristic_productCard.textContent = btnsArray_productCard[i].dataset.weightFilter;
//             selectBtnArray[0] = btnsArray_productCard[i];
//             btnsArray_productCard[i].classList.add('selectButton');
//             for (let j = 0; j <= btnsArray_productCard.length - 1; j ++) {
//                 if (selectBtnArray[0] !== btnsArray_productCard[j]) {
//                     btnsArray_productCard[j].classList.remove('selectButton');
//                 }
//             }
//         }
//     }
// }
