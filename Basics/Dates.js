let myDate = new Date();

console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON());

// To declare a particular date

// let currentDate = new Date(2023,2,14);
let currentDate = new Date("2/14/2003");
// console.log(currentDate.toLocaleDateString());


// to get current timestamp
let timestamp = Date.now(); // it was in milisecond
// to convert it to second we can divide it by 1000
// and we can also enclosed it into math.floor()

console.log(Math.floor((timestamp)/1000));

