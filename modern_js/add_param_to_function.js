// Becouse function is obj, he allow to add parameter

function f() {}

f.test = 5;

console.log(f.test);

function maxArgs(...nums) {
    max = nums[0];
    for(let i=1; i<nums.length; i++) {
        nums[i] > max ? max = nums[i] : max
    }
    return max
}

let m = maxArgs(1, 2, 10, 9)
console.log(m);

// Function with parameter for default
function myDef(name, age=40) {
    console.log(`The name is ${name} and age is ${age}`);
}

myDef('Borko', 41)