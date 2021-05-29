function solve(matrix) {
    let result = {'primary': 0, 'secondary': 0};
    let len_matrix = matrix.length;

    for (i=0; i<len_matrix; i++) {
        result['primary'] += matrix[i][i];
        result['secondary'] += matrix[i][len_matrix - i - 1];
    }
    return result
}

const result = solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])

console.log(result);