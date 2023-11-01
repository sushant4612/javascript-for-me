const myArr = [2,3,4,5,6,7]
const myArr2 = [4,7,8,3];

//when we do push in first arrray the second array then its added a array as it is but we don't want that to add it seperatly we can do it by using concat or by using spread operator;

// concat
console.log(myArr.concat(myArr2));

// spread-operator

const newArr = [...myArr2,...myArr];
console.log(newArr);


// isArray, from , of

//isArray is used to check when it is array of not

console.log(Array.isArray("Sushnat")); // false
// to convert to array we should use from

console.log(Array.from("Sushant"));

let num1 = 10;
let num2 = 20;
let num3 = 30;

//if we want to make array of above variable we could use Array.of() function

console.log(Array.of(num1,num2,num3));