(function() {
    'use strict'

var data = [
    {
        text: 'some text 1',
        display: true,
        disable: false
    },
    {
        text: 'some text 2',
        display: false,
        disable: false
    },
    {
        text: 'some text 3',
        display: true,
        disable: true
    },
    {
        text: 'some text 4',
        display: true,
        disable: false
    },
];

function forMap(item) {
    return 'item 1 ' + item.text
};

function forFilter(item) {
    if(item.display && !item.disable) {
        return item;
    };
};

function forLog(item) {
  console.log(item);
}

data.filter(forFilter).map(forMap).forEach(forLog);

})();
