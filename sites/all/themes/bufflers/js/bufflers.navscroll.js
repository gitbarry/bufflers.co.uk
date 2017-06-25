(function ($) {

    Drupal.behaviors.bufflersNavscroll = {
        attach: function (context, settings) {

            var stickyNavTop = $('.l-region--navigation').offset().top;

            var stickyNav = function(){
                var scrollTop = $(window).scrollTop();

                if (scrollTop > stickyNavTop) {
                    $('.l-region--navigation').addClass('sticky');
                } else {
                    $('.l-region--navigation').removeClass('sticky');
                    }
            };

            stickyNav();

            $(window).scroll(function() {
                stickyNav();
            });
        }
    };

})(jQuery);
