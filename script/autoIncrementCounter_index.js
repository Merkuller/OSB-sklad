if (document.querySelector('.shippedQuantity_index')) {
    function summ () {
        let shippedQuantity = document.querySelector('.shippedQuantity_index');
        let date1 = Date.UTC('2014', '5','11')
        let date2 = Date.now()
        let sec = Math.floor((date2-date1)/1000)
        shippedQuantity.textContent = Math.round(sec * 0.6 ).toLocaleString('ru-RU')
        setTimeout(summ, 5000)
    }
       
    summ()
}