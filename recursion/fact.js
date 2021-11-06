function fact(x) {
    if (x === 0) {
        return x;
    }
    return x + fact(x - 1)
}

console.log(fact(3))

function fact2(x) {
    return (x == 0) ? x : x + fact2(x - 1)
}

console.log(fact2(3))

let array_sum = function(my_array) {
    if (my_array.length === 1) {
        return my_array[0];
    }
    return my_array.pop() + array_sum(my_array)
}

console.log(array_sum([1,2,3,4,5,6]));
