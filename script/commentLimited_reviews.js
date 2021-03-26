if (document.querySelector('.contentReviews_reviews')) {
    let commentBtns = document.querySelectorAll('.readAllBtn_reviews');
        commentBlock = document.querySelector('.contentReviews_reviews');
        commentApplications = document.querySelectorAll('.commentApplication_index');
        parseNumber = x => Number(x.replace(/[^0-9\.-]+/g,""));
        calcHeight = commentBlock => {
            let height = window.getComputedStyle(commentBlock,null).getPropertyValue("height");
            let heightValue = parseNumber(height);
            return heightValue;
        };
        calcLineHeight = commentBlock => {
            let lineHeight = window.getComputedStyle(commentBlock,null).getPropertyValue("line-height");
            let lineHeightValue = parseNumber(lineHeight);
            return lineHeightValue;
        };

    commentApplications.forEach(app => app.style.display = 'block');

    commentBtns.forEach(btn => {
        let commentBlock = btn.parentElement;
        let commentText = commentBlock.querySelector('.reviewText_index');
        if (calcHeight(commentText) / calcLineHeight(commentText) > 5) {
            btn.style.display = 'block';
            commentText.style.overflow = 'hidden';
            commentText.style.display = '-webkit-box';
            commentText.style.webkitLineClamp = '5';
            commentText.style.webkitBoxOrient = 'vertical';
        }
    });

    commentBlock.addEventListener('click', function (e) {
        if (e.target.classList.contains('readAllBtn_reviews')) {
            let text = e.target.parentElement.querySelector('.reviewText_index');
            text.classList.toggle('commentAppear');
            e.target.textContent = text.classList.contains('commentAppear') ? 'свернуть' : 'читать полностью';
        }
    })
}