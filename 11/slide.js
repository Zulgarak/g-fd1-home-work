(function () {
    "use strict";

document.querySelectorAll('.slides').forEach(function (element) {
var slideSize = element.clientWidth,
    currentPosition = 0;

    function next(){
        currentPosition += slideSize;
        if (currentPosition >= element.scrollWidth) {
            currentPosition = 0;
        };
        element.scroll({left: currentPosition, behavior: 'smooth'});
    };

    function prev(){
        currentPosition -= slideSize;
        if (currentPosition <= element.scrollWidth) {
            currentPosition = 0;
        };
        element.scroll({left: currentPosition, behavior: 'smooth'});
    };

document.getElementById('prev').onclick = prev;
document.getElementById('next').onclick = next;
});
})();



