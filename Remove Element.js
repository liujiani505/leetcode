var removeElement = function(nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            // replaces the current element at index count in the nums array with the value of the element at index i if the value at index i is not equal to val. 
            nums[count] = nums[i];
            count++;
            // nums[count++] = nums[i]
        }
    }
    return count;
};