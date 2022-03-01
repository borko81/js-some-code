let arr = ['a', 'b', 'c', 'd']

// console.log(arr.filter((a, b) => b % 2 == 0));

let a = [14, 1, 2, 4, 7, 13]

a.reduce((x, y) => {
    if (y > 5) {
        console.log(x);
    }
}, []);