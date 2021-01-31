let nums = [1, 0, 31, "a", 5, 6];
let names = ["Peter", "george", "John", "Mary", "Alice"];

nums.sort(compare_sort)

function compare_sort(a, b) {
    return a - b;
}

console.log(nums);

names.sort((a, b) => a.localeCompare(b));
console.log(names);