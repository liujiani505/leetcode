/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function(nums) {
    let largestInt = Math.max(...nums)
    let largestIntIndex = nums.indexOf(largestInt)
    
    for( let i=0; i<=nums.length; i++ ){
        if( largestIntIndex !== i && nums[largestIntIndex] < 2*nums[i]){
            return -1;
        } 
    }
    return largestIntIndex;
}
