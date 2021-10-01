 
$(document).ready(function() {
    // all the variables
    var developermode = false;
    var wrapper = $(".wrapper");
    var wrapperbg = $(".wrapper_background");

    var is_aside = window.localStorage.isAside;
    if (window.matchMedia('(min-width: 992px)').matches) {
        if(is_aside && is_aside==1){
            wrapper.removeClass("aside_close");
        }else {
            wrapper.addClass("aside_close");
        }
    }else {
        wrapper.removeClass("aside_close");
    }

    // aside toggle, hide and show programm start

    if (window.matchMedia('(max-width: 991px)').matches) {
        wrapper.addClass("aside_close");
    }

    // list dropdown
    var menu = $('.wrapper').data('menu'),
        submenu = $('.wrapper').data('submenu');
    var li = '.aside_nav li#' + menu;
    $(li).addClass('active');
    $(li + ' ul li#' + submenu).addClass('active');

});

 