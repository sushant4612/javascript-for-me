// Higher order function
// for of loop
// iterate one by one over the value
// on array
let nums = [1,2,3,4,5]

for (const num of nums) {
    // console.log(num);
}
// on object
// error obj is not iterable
let obj = {
    name : "sushant",
    age : 18
}
// for (const o of obj) {
//     console.log(o)
// }

// map :- map is a key value pair similar to obj but remember the order in which the pair is inserted and doesn't contains duplicate value

let map = new Map()
map.set('name', 'sushant')
map.set('age',18)
console.log(map)

for (const [key,value] of map) {
    console.log(`key is ${key} and value is ${value}`)
}