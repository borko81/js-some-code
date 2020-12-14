function solve(args) {
    let arr = args.splice(1, args.length);
    
    //convert array to number
    arr = arr.map(x => Number(x));
    //max and min
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));

    //how many of them divide by two and three in next row
    let divide_two = arr.filter(x => x % 2 == 0);
    let divide_three = arr.filter(x => x % 3 == 0);

    console.log((divide_two.length / args[0]) * 100 + '%');
    console.log((divide_three.length / args[0]) * 100 + '%');

}

solve(["4",
    "40",
    "-20",
    "10",
    "10"])