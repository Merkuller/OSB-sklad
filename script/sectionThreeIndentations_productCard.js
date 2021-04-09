if (document.querySelector('.sectionTwo_productCard')) {

    let sectionThree_productCard = document.querySelector('.sectionThree_productCard');
        mediaQuery = window.matchMedia('(max-width: 1024px)');

    sectionThree_productCard.style.paddingTop = '121px';
    sectionThree_productCard.style.paddingBottom = '119px';
    sectionThree_productCard.style.borderBottom = '2px solid #F0EFEE';

    if (mediaQuery.matches) sectionThree_productCard.style.paddingTop = '0px';
}