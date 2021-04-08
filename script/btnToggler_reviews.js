if (document.querySelector('.popupIdentificationBtn')) {

    let btns = document.querySelectorAll('.popupIdentificationBtn');
        fields = document.querySelectorAll('.captureName');
        
    btns[0].classList.add('select');
    fields[0].classList.add('hidden');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelector('.popupIdentificationBtn.select').classList.remove('select');
            document.querySelector('.captureName.hidden').classList.remove('hidden');
            btn.classList.add('select');
            let fieldNumber = Number(btn.getAttribute('for'));
            fields[fieldNumber].classList.add('hidden');
        });
    })
}
