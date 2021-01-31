let nums = [1, 0, 31, "a", 5, 6];
let names = ["Peter", "george", "John", "Mary", "Alice"];

// Slice do not change the original

console.log(names.slice(0, 2));
console.log(names);
console.log(names.slice(-2));

console.log(names.splice(2));
console.log(names);