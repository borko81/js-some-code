function solve(skips=1) {
    skips = Number(skips)
    for (let i=0; i<=100; i+=skips) {
        console.log(i);
    }
}

solve(2)