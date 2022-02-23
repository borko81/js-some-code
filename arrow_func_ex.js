const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(x => x.length));

const a = x => x + 100
console.log(a(1));

let x = 1, y = 2
const b = () => x + y;
console.log(b());

let arr = [5, 6, 13, 0, 1, 18, 23];
// let double = arr.map(x => x * 2)
let double = arr.filter(x => x < 10)
console.log(double);