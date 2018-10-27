"use strict"
var array1 = [123, "string", true, {value: 321}, null],
    array2 = ["first", "second", "last"],
    result = [];

    for (var i = 0; i<array1.length; i++) {
    	result[i] = array1[i];
    }
    for (var x = 0; x<array2.length; x++) {
    	result[result.length] = array2[x];
    }

console.log("result: ", result);
