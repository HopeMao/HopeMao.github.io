
// jQuery for page scrolling feature - requires jQuery Easing plugin
(function () {
  console.log("its going")
    ('body').on('click', 'a.page-scroll', function (event) {
        var $anchor = $(this);
        ('html, body').stop().animate({
            //            Adjust the 100 to control the location where the scrolling stops
            scrollTop: $($anchor.attr('href')).offset().top - 25
        }, 1500, 'easeInOutExpo');
        $(':focus').blur();

        event.preventDefault();
    });

    //    Change the background color according to the scrolling
    $(window).scroll(function () {
        var top = $("html");
        //        Adjust the 200 to define when the navigation change the color
        if (top.scrollTop() > 200) {
            $("nav").css({
                "background-color": "white",
                //                "font-weight": "400"
            });
        } else {
            $("nav").css({
                "background-color": "transparent",
                //                "font-weight": "700"
            });
        };


    });



    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-collapse').removeClass('show');
        //    $('.navbar-toggle:visible').click();
    });

});
