function solve(numbers) {
    let total = 0;
    for (let i=0; i<numbers.length; i++) {
        if (parseInt(numbers[i])) {
            total += Number(numbers[i])    
        } else {
            console.log(`${numbers[i]} is not integer continue...`);
        }
    }
    console.log(total);
}


solve("123a4")