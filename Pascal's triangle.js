// Given an integer numRows, return the first numRows of Pascal's triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    if (numRows === 0) return [];
    let tri = [];
    tri.push([1]);
    for (let i = 1; i < numRows; i++) {
        let arr = tri[tri.length - 1];
        let row = [];
        row.push(1);
        for (let j = 1; j < arr.length; j++) {
            row.push(arr[j - 1] + arr[j]);
        }
        row.push(1);
        tri.push(row);
    }
    return tri;
};