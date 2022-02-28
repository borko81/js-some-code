function sum_old(arr) {
    let sum = 0;
    for (const val of arr) {
        sum += val
    }
    return sum;
}

function sum(arr) {
    const reducer = arr.reduce((sum, val) => sum + val, 0)
    return reducer
}

const lineItems = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
    { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
    { description: 'Butter', quantity: 2, price: 6, total: 12 }
  ];


  console.log(lineItems.map(x => x.total).reduce((val, sum) => val + sum, 0));

  const dates = [
    '2019/06/01',
    '2018/06/01',
    '2019/09/01', // This is the most recent date, but how to find it?
    '2018/09/01'
  ].map(v => new Date(v));


  console.log(dates);