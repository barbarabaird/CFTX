console.log("I am here");


/* Navigation */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});


$(function() {
    $('button.start').click(function() {
        $('img.pics').pics({
            bind: "event"
        });
    });

    $('button.loadAll').click(function() {
        $('.pics').pics({
            bind: "event",
            delay: 0
        });
    });
});









        







