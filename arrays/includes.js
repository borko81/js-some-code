const arr = [3, 19, 14, 17, 2, 19, 6];
let names = ["Peter", "george", "John", "Mary", "Alice"];
let numberAsString = ["1", "2", "3"];


console.log(arr.includes(19, arr.indexOf(19)));
console.log(arr.includes(110));

arr.forEach(x => console.log(x));

console.log(names.find(x => x[0] == 'J'));

console.log(numberAsString.map(Number).map(x => x + 1));