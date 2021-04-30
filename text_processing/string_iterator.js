function solve(words){
    words = words.split(' ');
    let counter = 0;

    for (const word of words) {
        counter += 1;
        console.log(`${counter}: ${word.trim()}`);
    }
}


solve("Et cillum do voluptate cillum ut cupidatat aliqua.")