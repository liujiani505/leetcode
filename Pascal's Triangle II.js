/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // create an empty array with a length of rowIndex + 1. First row has 1 element, rowindex is 0. Second row has 2 elements, row index is 1...
    let arr = new Array(rowIndex+1);
    // set the values of the first and last elements to 1, because the first and last values of any row of Pascal's Triangle.
    arr[0]=arr[rowIndex]=1;
    // use a for loop to fill in the remaining values of the element(s) in the arr. up 
    for(i=1, up=rowIndex; i<rowIndex; i++, up--){
        arr[i] = arr[i-1]*up/i;
    }
    return arr;
};
