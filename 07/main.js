function MyFirstFunc() {

var arrNumber = [];
var arrString = [];
var arrNull = [];
var arrObject = [];
var arrUndefined = [];
var arrBoolean = [];
var MegaTotalArr =[];
var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined];

for (var i = 0; i < data.length; i++) {
	if (typeof data[i] === typeof 1) {
		arrNumber.push(data[i]);
		console.log("NUMBER!!!!!!!!!");

	} else if (data[i] === null){
		arrNull.push(data[i]);
		console.log("IT IS NULL!!");

	} else if (typeof data[i] === typeof 'string') {
		arrString.push(data[i]);
		console.log("IT IS STRING!!");

	} else if (typeof data[i] === typeof {}){
		arrObject.push(data[i]);
		console.log("IT IS OBJECT!!");

	} else if (data[i] === undefined){
		arrUndefined.push(data[i]);
		console.log("IT IS UNDEFINED!!");

	} else if (typeof data[i] === typeof true){
		arrBoolean.push(data[i]);
		console.log("IT IS BOOLEAN!!");

	}
  console.log(data[i]);
}

arrNumber.sort(function(a, b) {
  return a - b;
});

arrString.sort();
arrBoolean.sort(function(a, b) {
  return b - a;
});

console.log(arrNumber);
console.log(arrNull);
console.log(arrString);
console.log(arrObject);
console.log(arrUndefined);
console.log(arrBoolean);

var result = MegaTotalArr.concat(arrNumber,arrNull,arrString,arrObject,arrUndefined,arrBoolean);
console.log('result', result)
};

MyFirstFunc();
