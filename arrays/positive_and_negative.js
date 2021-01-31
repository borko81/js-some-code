function positive_and_negative(numbers) {
    const result = [];

    for (let num of numbers) {
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }

    console.log(result.join("\n"));
}

positive_and_negative([10, -1, 2, 100, 0]);