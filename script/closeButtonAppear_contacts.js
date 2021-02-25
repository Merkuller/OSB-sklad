if (document.querySelector('.placeholder1_contacts')) {
    let citySelect3_contacts = document.querySelector('#city_contacts');
    let resetButton3_contacts = document.querySelector('.resetCity_contacts');
    let yourCity3_contacts = document.querySelector('.placeholder1_contacts');

    citySelect3_contacts.oninput = function() {
        if (citySelect3_contacts.value.length >= 1) {
            resetButton3_contacts.classList.add('shown_contacts');
            yourCity3_contacts.classList.add('moveCityText_contacts');
        } else {
            resetButton3_contacts.classList.remove('shown_contacts');
            yourCity3_contacts.classList.remove('moveCityText_contacts');
        };
    };
}