const array1 = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 10));

function sum(arr) {
    const reducer = (accumulator, current) => accumulator + current;
    const initialValue = 0;
    return arr.reduce(reducer, initialValue)
}

console.log(sum(array1));

const lineItems = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
    { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
    { description: 'Butter', quantity: 2, price: 6, total: 12 }
  ];

  const result = lineItems.reduce((sum, i) => sum + i.price, 0);
  console.log(result);

  const dates = [
    '2019/06/01',
    '2018/06/01',
    '2019/09/01', // This is the most recent date, but how to find it?
    '2018/09/01'
  ]

  const data_result = dates.reduce((max, d) => d > max ? d : max, dates[0])
  console.log(data_result);