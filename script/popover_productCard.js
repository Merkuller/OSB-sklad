if (document.querySelector('.popover_productCard')) {
    let popover_productCard = document.querySelector('.popover_productCard');
    let popoverText_productCard = document.querySelector('.popoverText_productCard');

    let fadePopup_productCard = function () {
        popover_productCard.style.opacity = "0";
        popover_productCard.style.display = "none";
    }

    function openPopup (text, type) {
        popover_productCard.style.opacity = "1";
        popoverText_productCard.textContent = text;
        if (type === 'danger') {
            popover_productCard.style.borderColor = "#e84d4d";
            popoverText_productCard.style.color = "#e84d4d";
        }
        if (type === 'info') {
            popover_productCard.style.borderColor = "#5bc793";
            popoverText_productCard.style.color = "#5bc793";
        }
        if (type === 'warning') {
            popover_productCard.style.borderColor = "#d9c836";
            popoverText_productCard.style.color = "#d9c836";
        }
        setTimeout(fadePopup_productCard, 3000);
    }
}
