if (document.querySelector('.contentReviews_reviews')) {

    let slideList_reviews = document.querySelectorAll('.s3_slide1Review_index');
    let commentBlock = document.querySelector('.contentReviews_reviews');
    let isOpen = false;
    
    const renderBtn = (element) => {
        let btn = `<button type="button" class="readAllBtn_reviews">читать полностью</button>`;
        element.insertAdjacentHTML('beforeend', btn);
    }

    slideList_reviews.forEach(comment => renderBtn(comment));

    commentBlock.addEventListener('click', function (e) {
        isOpen = !isOpen;
        if (e.target.classList.contains('readAllBtn_reviews')) {
            let text = e.target.parentElement.querySelector('.reviewText_index')
            if (isOpen === true) {
                text.style.webkitLineClamp = "none";
                text.style.display = "block";
                e.target.textContent = "свернуть";
            } else {
                text.style.webkitLineClamp = "5";
                text.style.display = "-webkit-box";
                e.target.textContent = "читать полностью";
            }
        }
    })
}