if (document.querySelector('.filterCollapse_osbOnFloor')) {
    let filterCheckbox_osbOnFloor = document.querySelector('.filterCollapse_osbOnFloor');

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 1006) {
            filterCheckbox_osbOnFloor.classList.remove('show');
        } else {
            filterCheckbox_osbOnFloor.classList.add('show');
        }
    })
}