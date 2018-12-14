(function () {
$(".sandwich").click(function() {
    $(this).toggleClass("sandwich--active");
    $(".overlay").toggleClass("overlay--active");
});
$(document).on('click', '.overlay-menu__link', function (event) {
    $(".sandwich").toggleClass("sandwich--active");
    $(".overlay").toggleClass("overlay--active");
        var linkSelector = $(event.target).attr('data-link'),
        scrollToElement;
        if (!linkSelector) {
            return;
        }
        scrollToElement = $(linkSelector);
         setTimeout(function(){
            $(document).scrollTop(scrollToElement.offset().top);
         },200);
});
})();
