if (document.querySelector('.contentReviews_reviews')) {
    let commentBtns = document.querySelectorAll('.readAllBtn_reviews');
        commentBlock = document.querySelector('.contentReviews_reviews');
        commentApplications = document.querySelectorAll('.commentApplication_index');

    commentApplications.forEach(app => app.style.display = 'block');
    commentBtns.forEach(comment => comment.style.display = 'block');

    commentBlock.addEventListener('click', function (e) {
        if (e.target.classList.contains('readAllBtn_reviews')) {
            let text = e.target.parentElement.querySelector('.reviewText_index');
            text.classList.toggle('commentAppear');
            e.target.textContent = text.classList.contains('commentAppear') ? 'свернуть' : 'читать полностью';
        }
    })
}