const list = ['a', 'b', 'c'];

for (let i=0; i<list.length; i++) {
    console.log(`${i} => ${list[i]}`);
    if (list[i] == 'b') {
        break
    }
}

for (const v of list) {
    console.log(`${v}`);
    if (v == 'b') {
        break
    }
}