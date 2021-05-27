function solve(myitems) {
    let result = [];
    for (let i=0; i < myitems.length; i+=2) {
        result.push(myitems[i]);
    }
    console.log(result.join('_'));
}

solve(['20', '30', '40', '50', '60']);