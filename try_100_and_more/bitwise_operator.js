function bitwiseAND(first, second) {
    let myfirst = Number(first).toString(2);
    let mysecond = Number(second).toString(2);
    console.log(myfirst);
    console.log(mysecond);
    console.log(myfirst && mysecond);
}


bitwiseAND(5, 1) // 4