$(document).ready(function(){

var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.cd-top').fadeIn(duration);
        } else {
            jQuery('.cd-top').fadeOut(duration);
        }
    });

    jQuery('.cd-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            var tTop= target.offset().top;
            
            if(target =="afazenda") {
                tTop = tTop -10;
            }

            if (target.length) {
                $('html,body').animate({
                scrollTop: tTop
                }, 1000);
                return false;
            }
        }
    });

   $('#slides').superslides({
        hashchange: true,
        pagination: true,
        inherit_height_from: '.header'
    });

});
