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


function forFilter(item) {
    return item.display && !item.disable;
};

function forMap(item) {
    return 'item 1 ' + item.text
};

function forLog(item) {
  console.log(item);
}
//Без сохранения промежуточного варианта
data.filter(forFilter).map(forMap).forEach(forLog);

//С сохранением промежуточного результата
// var result = data.filter(forFilter).map(forMap);
// result.forEach(forLog);
})();
