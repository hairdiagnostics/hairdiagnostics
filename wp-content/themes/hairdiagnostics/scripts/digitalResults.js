$(function() {

    // Toggle on click
    jQuery.fn.clickToggle = function(a,b) {
        var ab=[b,a];
        function cb() {
            ab[this._tog^=1].call(this);
        }
        return this.on("click", cb);
    };

    navClicked = 0;

    $(".mobile-nav-menu img").click(function() {

        console.log("Fresh Pressed");

        if (navClicked === 0) {
            $(".mobile-menu ul").velocity("transition.bounceDownIn");
            navClicked = 1;
        } else {
            $(".mobile-menu ul").velocity("transition.bounceUpOut");
            navClicked = 0;
        }

    });

    $(".menu-item").clickToggle(function() {

        console.log("Cold Pressed");

        $(this).children(".sub-menu").fadeIn();

    }, function() {

        console.log("Hot Pressed");

        $(this).children(".sub-menu").fadeOut();
    });

});
