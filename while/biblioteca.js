function solve(items) {
    let favorite_book = items[0];
    let index = 1;
    let bookFound = false;
    let next = items[index];

    while (next !== "No More Books") {
        if (next == favorite_book) {
            bookFound = true;
            break;
        }
        index += 1;
        next = items[index];
    }

    if (bookFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }

}


solve(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
