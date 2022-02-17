let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];

function compare_me(what) {
    return function(a, b) {
        let x, y
        x = a[what]
        y = b[what]
        if (x > y) {
            return 1
        } else if (x < y) {
            return -1
        } else {
            return 0
        }
    }
}

function cmToInt(len){
    return len / 2.54
}

function intoCm(len) {
    return len * 2.54
}

function convert(fn, len) {
    return fn(len)
}

let data = products.sort(compare_me('name'))
console.table(data);

console.log(convert(intoCm, 100));
console.log(convert(cmToInt, 100).toFixed(2));