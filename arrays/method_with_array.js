let arr = ["I", "go", "home"];

console.log(arr.length);
console.log(arr[arr.length - 1]);

delete arr[2];

console.log(arr.length);

let removed_alement = arr.splice(2, 1)

console.log(arr.length);

console.log(removed_alement);

arr.push(" Element")

const last_element = arr.slice(-1)
console.log(last_element[0].trim());