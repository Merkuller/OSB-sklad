if (document.querySelector('.shippedQuantity_index')) {
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let coefficient = Math.floor(Math.random() * (max - min)) + min;
        return coefficient;
    }

    function summ () {
        let shippedQuantity = document.querySelector('.shippedQuantity_index');
        let date1 = Date.UTC('2014', '5','11')
        let date2 = Date.now()
        let sec = Math.floor((date2-date1)/1000)
        let num = Math.round(sec * 0.6);
        let delay = getRandom(4, 10);
        let num2 = Math.round(delay * (getRandom(3, 8)) / 10);
        shippedQuantity.textContent = (num + num2).toLocaleString('ru-RU')
        console.log(num2);
        setTimeout(summ, delay * 1000)
    }
       
    summ()

}