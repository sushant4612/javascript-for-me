//Object literals and constructors both are used to create an Object in JavaScript. An object created by the object literals is a singleton. This means when a change is made to the object, it affects that object across the entire script. If an object created by a function constructor has multiple instances of the object.

myObj = {
    name : "Sushnat",
    "full name": "Sushant Pathare",
    age : 21,
    isMarried : false,
    greetings : function(){
        console.log("Hello world")
    }
}

// console.log(myObj);
//to access a particular property of an object we can use either (.) operator or bracket notation
//majorly we use the . operator but for some case we not have any option rather than using [] notation

console.log(myObj.age);

//for full name there is not any option than using bracket notation
console.log(myObj["full name"]);

//we can also change the property
myObj.name = "someone";

console.log(myObj);

//in some case we want to freeze the object from modifying we can accomplish it by using freeze method

Object.freeze(myObj);
//now when i change the property then it doesn't get change

myObj.name = "Suhsant";

console.log(myObj);