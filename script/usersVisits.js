//Этот скрипт генерирует рандомное количество посещений в день
//userVisits

if (document.querySelector('.footer')) {

    let watchersVal = document.querySelector('.viewsWatchersVal')
        guestsVal = document.querySelector('.viewsGuestsVal') 
        specGuestsVal = document.querySelector('.viewsSpecGuestsVal')

    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getCookie(c_name) {
        var c_value = " " + document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1) {
            c_value = null;
        }
        else {
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start,c_end));
        }
        return c_value;
    }

    function getVisitors() {
        let days = [0, 1, 2, 3, 4, 5, 6]
        let d = new Date()
        let nday = d.getDay()
        let visitors = {
            watchers: days[nday] == 0 || days[nday] == 6 ? getRandomInRange(400, 500) * getRandomInRange(2, 5) : getRandomInRange(700, 800) * getRandomInRange(2, 5),
            guests: days[nday] == 0 || days[nday] == 6 ? getRandomInRange(400, 500) : getRandomInRange(700, 800),
            specGuests: days[nday] == 0 || days[nday] == 6 ? getRandomInRange(100, 200) : getRandomInRange(400, 500)
        }
        return JSON.stringify(visitors)
    }

    function setCookieValue(callback) {
        document.cookie = 'visitors = ' + encodeURIComponent(getVisitors())
        let cookieValue  = callback('visitors')
        return cookieValue
    }
    
    function getObject(callback) {
        let users = JSON.parse(callback)
        return users
    }
    
    window.onload = function() {
        let visiters = getObject(setCookieValue(getCookie))
        watchersVal.textContent = visiters.watchers
        guestsVal.textContent = visiters.guests
        specGuestsVal.textContent = visiters.specGuests
    }
}