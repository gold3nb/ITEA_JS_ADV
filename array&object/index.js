// Задача 1
// ['a', 'b', 'c'] => ['c', 'b', 'a'] ===== reverse

// 1-ий спосіб

let arr = ['a','b','c','d','e','f'];

function reverseArr(array) {
	let res = '';
	let lastVal = array.length-1;

	for (let i = lastVal; i >= 0; i--) {
		res += array[i];
	}

	return res.split('');
}

console.log(reverseArr(arr));

// 2-ий спосіб

let arr = ['a','b','c','d','1','2'];

function reverseArr(array) {
	let result = [];
	array.map(item => result.unshift(item));

	return result;
}

console.log(reverseArr(arr));


// Задача 2
// { prop1: 'value1', prop2: 'value2' } => { value1: prop1, value2: prop2 }

let object1 = {prop1: 'value1', prop2: 'value2', prop3: 'value3', prop4: 'value4'};

function reverseObj(obj) {
	let resObj = {};
	Object.entries(obj).map(([key, value]) => resObj[value] = key);
	
	return resObj;
}

console.log(reverseObj(object1));