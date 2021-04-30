let chars = ['a', 'b', 'c', 'd', 'e'];
chars[0] = 'A';


// Join string
let text = chars.join('');

console.log(text.charAt(1));
// Start and end index
console.log(text.substring(1, 3));

// Start and lenght
console.log(text.substr(1, 3));


function solve(text, search) {
    let result = text.indexOf(search);
    if (result !== -1) {
        console.log(result);
    } else {
        console.log(`Not found ${search} in text like: ${text}`);
    }
}

solve('I like something', 'like')