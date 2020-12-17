let textInput = ''

if (!!textInput) {
    console.log('Some text')
} else {
    console.log('Empty String')
}

let someValues = ['😀']

if (!!someValues) {
    console.log('Not empty')
} else {
    console.log('Empty Array')
}

const arr1 = ['a', 'b', 'c', 'd'];
const arr2 = ['a', 'c', 'b', 'd'];
const arr3 = ['a', 'b', 'c', 'd'];

const obj1 = Object.assign({}, arr1);
const obj2 = obj1
const obj3 = Object.assign({}, arr3);
console.log(obj1);
console.log(obj3);
console.log(arr1 === arr2)
console.log(arr1 === arr3)
console.log(obj1 === obj3);

console.log(Object.is(obj1, obj2));

console.log(JSON.stringify(obj1) === JSON.stringify(obj3))