// Этот скрипт определяет количество дополнительных элементов списка и по нажатию на кнопку "ещё" показывает их.

let footerList = document.querySelector('.footerMenuByApplicationList'); 
let elementsList = footerList.querySelectorAll('li');
let valueHiddenElements = footerList.querySelector('.hiddenListElements');
let moreListElements = footerList.querySelector('.moreEl');
let counter = 0;
let hiddenListElements = [];

moreListElements.style.visibility = 'hidden';

for (let i = 0; i <= elementsList.length - 1; i ++) {
    counter ++;
    if (counter > 8) {
        moreListElements.style.visibility = 'visible';
        elementsList[i].style.display = "none";
        hiddenListElements.push(elementsList[i]);
        valueHiddenElements.textContent = hiddenListElements.length;
    }
}

moreListElements.addEventListener('click', function() {
    for (let i = 0; i <= hiddenListElements.length - 1; i ++) {
        hiddenListElements[i].style.display = "block";
        moreListElements.style.display = "none";
    }
})