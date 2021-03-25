if (document.querySelector('.contentReviews_reviews')) {

    let slideList_reviews = document.querySelectorAll('.s3_slide1Review_index');
    let commentBlock = document.querySelector('.contentReviews_reviews');
    
    const renderBtn = (element) => {
        let btn = `<button type="button" class="readAllBtn_reviews">читать полностью</button>`;
        element.insertAdjacentHTML('beforeend', btn);
    }

    slideList_reviews.forEach(comment => renderBtn(comment));

    commentBlock.addEventListener('click', function (e) {
        if (e.target.classList.contains('readAllBtn_reviews')) {
            let text = e.target.parentElement.querySelector('.reviewText_index');
            text.classList.toggle('commentAppear');
            e.target.textContent = text.classList.contains('commentAppear') ? 'свернуть' : 'читать полностью';
        }
    })
}