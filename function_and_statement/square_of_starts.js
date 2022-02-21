function solve(...args, /*x=5*/) {
    const parameter = args.length >= 1 ? args[0] : 5
    const row = '*'.repeat(parameter)
    for (let i=0; i<parameter; i++) {
        console.log(row);
    }
}

solve(1);
solve();
solve(4);