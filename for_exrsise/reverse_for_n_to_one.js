function solve(e, step=1) {
    let end = Number(e);
    let line_row = 0
    for (i=end; i>=0; i-=step) {
        line_row += 1
        if (i % 2 === 0){
            console.log(`${line_row}: ${i}`);
        }
    }
}


solve("5")