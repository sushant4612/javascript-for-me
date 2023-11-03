// in javascript this refer to the object

let obj = {
    name : "Sushant",
    age : 18,
    marks : 63.8,
    greetings : function (){
        console.log(`Welcome ${this.name}`);
        console.log(this);
        // {
        //     name: 'Sushant',
        //     age: 18,
        //     marks: 63.8,
        //     greetings: [Function: greetings]
        //   }
    }
}

// obj.greetings();

//alone this refer to the global object
// in node js this is the empty object but in case of browser the this refer to the window object
// console.log(this);


//In function this refer to the global object

function sayHello(){
    console.log(this);
}

// sayHello();

//******************* Arrow Function ******************* //

let sum = function(num1, num2){
    return num1 + num2;
}

console.log(sum(7,8));

let sum2 = (num1,num2) => (num1 + num2);

console.log(sum2(6,8));