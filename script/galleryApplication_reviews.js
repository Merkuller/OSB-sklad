if (document.querySelector('.content_reviews')) {

    let gallerys = document.querySelectorAll('.commentApplication_index');
        body = document.querySelector('body');

    body.style.overflow = 'visible';
    gallerys.forEach(el => {
        let imgs = el.querySelector('.commentAppContent_index');
        let className = imgs.getAttribute('class')
        if (imgs.children.length === 0) el.style.display = "none";
        baguetteBox.run(`.${className}`, {
            animation: 'fadeIn'
        });
    });
}