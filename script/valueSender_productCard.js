// Этот скрипт переключает состояние кнопок карточки товара и
// определяет значения параметров страницы в зависимости от выбронного значения толщины
// valueSender_productCard.js


if (document.querySelector('.thicknessButtons_productCard')) {
    let btns_productCard = document.querySelectorAll('.thicknessButton_productCard');
    

    function renderProductParameters(obj) {
        let price_productCard = document.querySelector('.priceForPieceValue_productCard');
        let priceForMeter = document.querySelector('.priceForMeterValue_productCard');
        let inStock_productCard = document.querySelector('.countInStock_productCard');
        let thicknessCharacteristic_productCard = document.querySelector('.thicknessValue_productCard');
        let weightCharacteristic_productCard = document.querySelector('.weigthValue_productCard');
        let densityFilter = document.querySelector('.densityValue_productCard')
        let hiddenValue = document.querySelector('.hiddenValue_productCard');
        price_productCard.textContent = obj.price;
        priceForMeter.textContent = obj.priceForMeter;
        inStock_productCard.textContent = obj.count;
        thicknessCharacteristic_productCard.textContent = obj.thicknessFilter;
        weightCharacteristic_productCard.textContent = obj.weightFilter;
        densityFilter.textContent = obj.densityFilter;
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
                densityFilter:element.dataset.densityFilter,
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
