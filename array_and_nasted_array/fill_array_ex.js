let arr = [[1, 2, 3],
[4, 5, 6]]


// console.log(arr.fill(3));
// console.log(arr);

console.log(arr[0][1] === 2);

arr.push(['a', 'b', 'c'])
console.log(arr[2].push('d'));
console.log(arr);

arr.forEach(x => {
    x.forEach(y => {
        console.log(y);
    })
})