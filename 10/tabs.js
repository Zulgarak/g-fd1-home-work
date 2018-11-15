(function () {
    "use strict";

    document.querySelectorAll('.tabs').forEach(function (tabsElement) {
        var selectElement = tabsElement.querySelector('select'),
            tabsContainerElement = tabsElement.querySelector('.tabs-tabsContainer');

        console.log('current value: ', selectElement.value);
        getTabByName(tabsContainerElement, selectElement.value).classList.add('tabs-container-tab_selected');

        selectElement.onchange = function () {
            console.log('new value: ', selectElement.value);
            tabsContainerElement.querySelector('.tabs-container-tab_selected').classList.remove('tabs-container-tab_selected');
            getTabByName(tabsContainerElement, selectElement.value).classList.add('tabs-container-tab_selected');
        };
    });
    function getTabByName(tabsContainerElement, name) {
        return tabsContainerElement.querySelector('[data-name=' + name + ']');
    };
})();
