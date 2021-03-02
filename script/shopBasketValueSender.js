// Этот скрипт передаёт значение карзины из одного элемента в дублирующийся
// shopBasketValueSender

if (document.querySelector('.shopBasket')) {
    let shopBasketValueMobileScreen = document.querySelector('.shopBasketValue');
    let shopBasketValueFullScreen = document.querySelector('.quantityPurchase');
    
    if (window.innerWidth <= 1199) {
        shopBasketValueMobileScreen.textContent = shopBasketValueFullScreen.textContent;
    }
}