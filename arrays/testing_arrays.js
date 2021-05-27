let cars = ['one', 'two', 'three'];

for (let car of cars) {
    console.log(car.toUpperCase());
}

let numbers = [1, 2, 3 ,4 ,5 ,6 ];

let [a, b, ...c] = numbers;
console.log(c);