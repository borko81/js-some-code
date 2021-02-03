let counter = 1;

const declare = {
    increment() {counter++},
    decrement() {counter--},
};

declare['increment']()
declare['increment']()
declare['decrement']()

console.log(counter);