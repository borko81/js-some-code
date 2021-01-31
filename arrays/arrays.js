function even(inputArray) {
    let result = "";

    for (let i = 0; i < inputArray.length; i++) {
        if (i % 2 == 0) {
            result += inputArray[i];
            result += ' ';
        }
    }
    console.log(result);
}


even([0, 1, 2, 3, 4, 5, 6])

// Rest operator
let numbers = [10, 20, 30, 40, 50];
let [a, ...all] = numbers;
console.log(all);

// Copy from array
let [...rest] = numbers;
numbers.push(100);
console.log(numbers);
console.log(rest);