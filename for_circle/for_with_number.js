// For cikle
for (let i=100; i>0; i-=2) {
    console.log(i);
}

n = 10
// From end to begin
for (let i=0; i<=n; i++) {
    if (i % 2 == 0) {
        console.log(i + ' - ' + i * i);
    }
}

let name = 'borko1ai2';

//Print name char
for (let i=0; i<name.length; i++) {
    console.log(name[i]);
}
console.log('-------------------');
for (let i=name.length - 1; i>=0; i--) {
    console.log(name[i]);
}

//Check char in volwel
for (let i of name) {
    if(['a', 'o', 'e', 'i'].includes(i)) {
        console.log(i);
    }
}

//Check char is digit
for (let i of name) {
    if (i >= '0' && i <= '9') {
        console.log(i)
    }
}