(function () {
    "use strict";

    document.querySelectorAll('.tabs').forEach(function (tabsElement) {
        var selectElement = tabsElement.querySelector('select'),
            tabsContainerElement = tabsElement.querySelector('.tabs-tabsContainer');

        console.log('current value: ', selectElement.value);

        getTabByName(tabsContainerElement, selectElement.value).classList.add('tabs-container-tab_selected');

        selectElement.onchange = function () {
            console.log('new value: ', selectElement.value);
            var removeClass = tabsContainerElement.querySelectorAll('div');
            //аналог forEach
            // for (var i = 0; i < removeClass.length; i++) {
            //     removeClass[i].classList.remove('tabs-container-tab_selected');
            // };
            removeClass.forEach(function (removeExp){
                removeExp.classList.remove('tabs-container-tab_selected');
            })

            getTabByName(tabsContainerElement, selectElement.value).classList.add('tabs-container-tab_selected');
        };

    });
    function getTabByName(tabsContainerElement, name) {
        return tabsContainerElement.querySelector('[data-name=' + name + ']');
    };





})();