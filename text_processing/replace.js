function solve(text, search) {
    let len_search = search.length
    let current = text.indexOf(search)


    while (current !== -1) {
        console.log("Found at position " + current +  " " + text.substring(current, current + len_search))
        current = text.indexOf(search, current+1);
    }
}


function solve_replace(text, search, replace) {
    let l = search.length;
    let current_found = text.indexOf(search);

    while (current_found !== -1) {
        text = text.replace(search, replace, current_found);
        current_found = text.indexOf(search, current_found);
    }
    console.log(text);
}


solve_replace('I like js with some js here', 'js', 'JS')

