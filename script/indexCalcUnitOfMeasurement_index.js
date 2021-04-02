if (document.querySelector('.filedBlock_index')) {

    let fiedlBlock = document.querySelector('.filedBlock_index');
    
    fiedlBlock.addEventListener('input', (e) => {
        if (e.target.classList.contains('calcField_index')) {
            let field = e.target.parentElement;
            let word = field.querySelector('.valueFiled');
            e.target.value <= 0 ? word.style.opacity = '0' : word.style.opacity = '1';
        }
    })
}