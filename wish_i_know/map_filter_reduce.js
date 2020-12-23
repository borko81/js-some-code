//Map

const someArray = [1,2,3,4,5,6,7,8,9];

//Incrment array use map
const incrementArray = someArray.map((x) => x + 1);

//console.log(...incrementArray)

//Filter

const filteredArray = someArray.filter((x) => x % 2 === 0);
// console.log(filteredArray)

// forEach

someArray.forEach((item) => {
	;
	//console.log(item * 3)
});

//reduce
const array_sum = someArray.reduce((acc, cur) => {
	return acc * cur;
}, 1)

const names_info = [
	{name: 'borko', salary: 1000},
	{name: 'george', salary: 1000},
	{name: 'borko', salary: 2000},
]
	
const totalSalary_byName = names_info.reduce((acc, cur) => {
	acc[cur.name] ? acc[cur.name] = cur.salary : acc[cur.name] = cur.salary;
	return acc
}, {})





























