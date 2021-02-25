if (document.querySelector('.slider2LinkShowAll_index')) {
    let tabsFirstFilter_index = document.querySelectorAll('.button_catalog');
    let filterLink_index = document.querySelector('.slider2LinkShowAll_index');
    let tabName_index = document.querySelector('.tabTitle_index');

    tabName_index.textContent = tabsFirstFilter_index[0].textContent;
    filterLink_index.href = tabsFirstFilter_index[0].dataset.link;

    for (let i = 0; i <= tabsFirstFilter_index.length - 1; i ++) {
        tabsFirstFilter_index[i].addEventListener('click', function() {
            tabName_index.textContent = tabsFirstFilter_index[i].textContent;
            filterLink_index.href = tabsFirstFilter_index[i].dataset.link;
        })
    }
}