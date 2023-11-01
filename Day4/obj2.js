let obj1 = {
    1 : "one",
    2 : "two",
    3 : "three"
}

let obj2 = {
    4 : "four",
    5 : "five",
    6 : "six"
}

//when we want two object in one single object we can use assign method or spread operator

//assign method
let obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

//spread operator

let obj4 = {...obj1, ...obj2};
// console.log(obj3);


// to get all keys
console.log(Object.keys(obj4));
// to get all values
console.log(Object.values(obj4));
// to get all entries
console.log(Object.entries(obj4));


//de structuring the object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course

console.log(instructor);