//totalGoodsCounter_shopBasketFirstStep

if (document.querySelector('.quantityPurchase')) {
    
    let fields = document.querySelectorAll('.calculatorNumber_shopBasketFirstStep');
    let x = 0;

    fields.forEach(field => {
        field.addEventListener('input', function() {
            x += Number(field.value);
            document.querySelector('.quantityPurchase').textContent = x;
        })
    })
}