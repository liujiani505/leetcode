var twoSum = function(numbers, target) {
    // initizlize two pointers "p1" and "p1" to point to the start and end of the input array 
    let p1 =0;
    let p2 = numbers.length-1;
    // if the sum is equal to the target, return the indices of the two numbers as an array. if the sum is greater than the target, decrement p2 to consider a smaller number at the end of the array (the array is sorted in non-decresing order). if the sum is less than the target, increment p1 to consider a larger number at the start of the array. if no two numbers are found that add up to the target, return an empty array
    while (p1 < p2) {
        let sum = numbers[p1] + numbers[p2];
        if (sum === target) {
            // 1-indexed array
            return [p1+1, p2+1];
        } else if (sum > target) {
            p2--;
        } else {
            p1++;
        }
    }
    // No match found, need to add a return statement in case the while loop exits without finding a pair of numbers that add up to the target sum
    return [];
};

