/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {

    const sum = nums.reduce((previousValue, currentValue) => previousValue + currentValue )
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++){
        if(leftSum == sum - leftSum - nums[i]){
            return i;
        } 
        leftSum += nums[i];
    };
    return -1;
};