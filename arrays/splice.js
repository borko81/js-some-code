let nums = [1, 3, 4, 5, 6];

// Insert element in position, first is position, second is how much eleemtn
// and last is element who insert
nums.splice(1, 0, 2);
console.log(nums);

// Replace element
nums.splice(3, 1, 44);
console.log(nums);

// Remove element
let new_element = nums.splice(1, 1);
console.log(nums);