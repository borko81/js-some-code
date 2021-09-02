let single = "single-quiteds";
let guestList = `Guest:
    John
    Pete
    Mary
`


function sum(a, b) {
    return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}`);
console.log(single.split('-').join('\n'));
console.log(single.split('-')[0].length);
console.log(single.charAt(0).toUpperCase() + single.slice(1,));

// undefined
console.log(single[1000]);

// empty
console.log(single.charAt(1000));

let t = []
let search = 'asi'
for (let char of single) {
    if (search.includes(char)) {
        t.push(char.toUpperCase())
    }
}
console.log(t.join(''));

console.log(single);
// Search for position of char in string
console.log(single.indexOf('s', 2));

// found all acquire of symbol

let pos = 0
let result = []
while (true) {
    let found = single.indexOf('s', pos)
    if (found == -1) break;
    result.push(found)
    pos = found + 1
}

console.log(result);

// true if symbol includes in string
console.log(single.includes('s'));