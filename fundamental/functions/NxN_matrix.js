function write_matrix(row_col) {

	for (let i = 0; i < row_col; i++) {
		let row = String(row_col).repeat(row_col)
		console.log(row.split("").join(" "))
	}
}

write_matrix(3)