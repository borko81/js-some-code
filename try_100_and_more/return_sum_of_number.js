function addition(...nums) {
    let result = nums.reduce((a, b) => a + b);
    console.log(result);
}


addition(3, 2) // ➞ 5

addition(-3, -6) // ➞ -9

addition(7, 3)// ➞ 10