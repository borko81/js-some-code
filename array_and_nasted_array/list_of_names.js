function solve(names) {
    let result = names.sort()
    for (let i=0; i<result.length; i++) {
        console.log(`${i + 1}. ${result[i]}`);
    }
}

solve(
    ["John", "Bob", "Christina", "Ema"]
);