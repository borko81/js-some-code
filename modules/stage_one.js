const stats = (function () {
	const sum = (x, y) => x + y;
	
	function data_length(data) {
		return data.length;
	}

	function mean(data) {
		return data.reduce(sum)/data_length(data);
	}

	return {
		mean,
		data_length,
	}
}())


console.log(stats.data_length([1,3,4,5]))
console.log(stats.mean([1, 3, 2, 4]))