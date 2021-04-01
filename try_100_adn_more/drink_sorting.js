drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10},
    {name: "green-lime", price: 16}
  ]

function drinkSorting(drinks) {
    // Sort by length of his name
    let result = drinks.sort((a, b) => (a['name'].length < b['name'].length) ?-1 :1);
    console.log(result);
}


drinkSorting(drinks)