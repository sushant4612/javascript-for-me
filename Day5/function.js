// functions is a block of code which we can run as many times we want
// use of function :- when we jave certain task which we have to do more than one times we can create a function of it and call as many time we want

// function declaration:-

function myFunc(){
    console.log("Hello World!");
}

myFunc();

//we can also add argument to the functions
//and also we can return certain value if we want either than consoling

function sum(num1,num2){
    return num1 + num2;
}

console.log(sum(5,4));

//what if we don't know how many parameters we pass in that case we can use rest operator

function sums(...nums){
    return nums;
}
//we gets the retsult in array
console.log(sums(2,3,4,56,9,100));

//we can pass object in function
//example:-

function objDefine(obj){
    console.log(`my name is ${obj.name} and my age is ${obj.age}`);
}

objDefine({
    name : "Suhsant",
    age : 18
})