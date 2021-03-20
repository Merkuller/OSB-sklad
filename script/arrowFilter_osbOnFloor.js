// Turn of arrow
if (document.querySelector('.criterion_osbOnFloor')) {
    let filterBlock = document.querySelector('.secondSectionOptions_osbOnFloor');

    filterBlock.addEventListener('click', (e) => {
        if (e.target.classList.contains('criterionHeadline_osbOnFloor')) {
            let btnFilter = e.target.parentElement;
            let btnArrow = btnFilter.querySelector('.filterBtnArrow_osbOnFloor');
            btnArrow.classList.toggle('turnOfArrow');
        }
    })
}