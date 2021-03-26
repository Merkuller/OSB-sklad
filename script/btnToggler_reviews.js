if (document.querySelector('.makeReview_reviews')) {

    let btns = document.querySelectorAll('.popupIdentificationBtn');
    
    btns[0].classList.add('select');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.classList.add('select');
            for (let i = 0; i < btns.length; i ++) {
                if (btn !== btns[i]) {
                    btns[i].classList.remove('select');
                }
            }
        })
    })
}
