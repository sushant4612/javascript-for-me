// const num = 5000.99;
// console.log(number.toFixed(1))
// console.log(number.toPrecision(4))
const number = 100000000;
console.log(number.toLocaleString())
console.log(number.toLocaleString('en-IN'))


// ****************** ----- ******************
// Math
console.log(Math);
let num = 786.8;
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.abs(num)) /// always give a positive value when passing - or + 
console.log(Math.random())// gives a random number between 0 and 1
console.log(Math.floor((Math.random() * 10) + 1));


// if you want number between particular digits then 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) ) + min);