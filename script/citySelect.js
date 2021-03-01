if (document.querySelector('.firstNavMenu')) {
    if (window.innerWidth <= 1199) {
        $( init );
        function init() {
        $('#citySelectTopNav').append( $('#citySelectBottomNav>a') );

        }
    }
}