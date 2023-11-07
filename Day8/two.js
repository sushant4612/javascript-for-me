//for in loop

let nums = [1,2,3,4,5]

for (const key in nums) {
    console.log(nums[key])
}
// on object
// error obj is not iterable
let obj = {
    name : "sushant",
    age : 18
}

for (const key in obj) {
    console.log(key)
    console.log(obj[key])
}

// map :- map is a key value pair similar to obj but remember the order in which the pair is inserted and doesn't contains duplicate value

let map = new Map()
map.set('name', 'sushant')
map.set('age',18)
// console.log(map)
// we can not iterate map with for in loop
for (const key in map) {
    console.log(map[key])
}