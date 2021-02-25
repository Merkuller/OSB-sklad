// Перключатель стилей у активных вкладок 
if (document.querySelector('.button_certificates')) {   
   let tabs_certificates = document.querySelectorAll('.button_certificates');
   let certificateName_certificates = document.querySelector('.serificateName_certificates');
   let selectTab;

    certificateName_certificates.textContent = tabs_certificates[0].textContent;
    tabs_certificates[0].classList.add('tabSelect');

    for (let i = 0; i <= tabs_certificates.length - 1; i ++) {
        tabs_certificates[i].addEventListener('click', function () {
            tabs_certificates[i].classList.add('tabSelect');
            selectTab = tabs_certificates[i];
            console.log(certificateName_certificates.textContent);
            certificateName_certificates.textContent = selectTab.textContent;  
            for (let j = 0; j <= tabs_certificates.length - 1; j ++) {
                if (tabs_certificates[j] !== selectTab) {
                    tabs_certificates[j].classList.remove('tabSelect');
                }
            }
        })
    }
}