// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix)) {
        let resultArray = [];
        for (let i = 0, length = matrix.length; i < length; i++) {
            (i % 2 == 0) ? resultArray = resultArray.concat(matrix[i]): resultArray = resultArray.concat(matrix[i].reverse());
        }
        return resultArray;
    }
    return [];
}