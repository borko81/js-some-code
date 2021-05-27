function solve(input){
    let res = input.map(x => Number(x));
    console.log(res[0] + res[res.length - 1]);
}

solve(['20', '30', '40'])