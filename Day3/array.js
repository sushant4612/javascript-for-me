//array

//array is used to collection of data in a single variable and each element can be access via index
// and in javascript indexing is 0 based

const myArr = [1,2,3,4,5];

console.log(myArr);

//push method is used to add new element to the end of an array
myArr.push(6);

//pop method is used to remove to remove an elemet from end of the array
myArr.pop();
console.log(myArr);


//to add element at the start of the array we use unshift method
myArr.unshift(10);
console.log(myArr);

//and to remove from start we use shift method
myArr.shift();
console.log(myArr);

// slice vs splice

console.log("**************************");

console.log("A ",myArr);
console.log("Slice ",myArr.slice(2,4));

console.log("B ",myArr);
console.log("Splice ",myArr.splice(2,4));

console.log("C ",myArr);



// there is 2 key difference in slice and splice 1st one is that in slice the range is not included but in splice the range is included and another one is that in slice the main array is not modified but in slice the main array is modified the spilce element removed from the array