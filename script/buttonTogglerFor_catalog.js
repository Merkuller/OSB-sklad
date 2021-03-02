// Этот скрипт выполняет сортировку контента на странице catalog
// buttonTogglerFor_catalog

if (document.querySelector('.mainContent_catalog')) {

    let filterBtns_catalog = document.querySelectorAll('.firstTabs_index');
    let cards_catalog = document.querySelectorAll('.s2_slide_catalog');
    console.log(cards_catalog);

    
    // Состояние фильтра по-умолчанию
    let defaultBtn_catalog = filterBtns_catalog[0];
    for (let i = 0; i <= cards_catalog.length - 1; i ++) {
        if (defaultBtn_catalog.dataset.category !== cards_catalog[i].dataset.id) {
            cards_catalog[i].style.display = "none";
        }
    }


    // Фильтрация
    let btnsSorting = function (filterValue) {
        for (let i = 0; i <= cards_catalog.length - 1; i ++) {
            cards_catalog[i].style.display = "none";
            if (cards_catalog[i].dataset.id === filterValue) {
                cards_catalog[i].style.display = "block";
            }
        }
    }

    //Фильтр
    for (let i = 0; i <= filterBtns_catalog.length - 1; i ++) {
        filterBtns_catalog[0].classList.add('tabSelect');
        filterBtns_catalog[i].onclick = function () {
            filterBtns_catalog[i].classList.add('tabSelect');
            let x = filterBtns_catalog[i];
            for (let j = 0; j <= filterBtns_catalog.length - 1; j ++) {
                if (x !== filterBtns_catalog[j]) {
                    filterBtns_catalog[j].classList.remove('tabSelect');
                }
            }
            let filterValue = x.dataset.category;
            btnsSorting(filterValue);
        }
    }
}