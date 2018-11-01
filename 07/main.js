"use strict"
var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);


function prioritySort(array, dataPriority) {
    // write code here
    var arrNumber = [],
    arrString = [],
    arrNull = [],
    arrObject = [],
    arrUndefined = [],
    arrBoolean = [],
    MegaTotalArr =[];

for (var i = 0; i < data.length; i++) {
    if (typeof data[i] === typeof 1) {
        arrNumber.push(data[i]);
    } else if (data[i] === null){
        arrNull.push(data[i]);
    } else if (typeof data[i] === typeof 'string') {
        arrString.push(data[i]);
    } else if (typeof data[i] === typeof {}){
        arrObject.push(data[i]);
    } else if (data[i] === undefined){
        arrUndefined.push(data[i]);
    } else if (typeof data[i] === typeof true){
        arrBoolean.push(data[i]);
    };
};

arrNumber.sort(function(a, b) {
  return a - b;
});
arrString.sort();
arrBoolean.sort(function(a, b) {
  return b - a;
});
    MegaTotalArr = MegaTotalArr.concat(arrNumber,arrNull,arrString,arrObject,arrUndefined,arrBoolean);
    return MegaTotalArr;
};

