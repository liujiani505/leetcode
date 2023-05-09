/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // initialize to the largest possible integer value
    let distance = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let sum = 0;
    // left pointer and right pointer defines the window
    // in the loop below, it calculates the distance between left and right,
    for (let right = 0; right < nums.length; right++){
        sum += nums[right];
        while(sum >= target){
            // update the distance variable to be the minimun of its current value and this distance.
            distance = Math.min(distance, right - left + 1);
            // when the sum is greater than target, we try to shrink the window from the left side by incrementing the left pointer and subtracting the element at the left index from the sum. By subtracting the element at the left index from the sum, we remove that element from the current subarray sum. This allows us to slide the window to the right to explore other possible subarrays.
            sum -= nums[left];
            left += 1;
        }
    }
    // If distance is equal to Number.MAX_SAFE_INTEGER, then no such subarray exists, and the function returns 0. Otherwise, the function returns the value of distance, which represents the length of the smallest subarray with a sum greater than or equal to target.
    return distance === Number.MAX_SAFE_INTEGER ? 0 : distance
};


// Ideas: 1. set two pointers right and left where right - left + 1 is the length of valid subarray. 2. keep expanding right pointer, when the condition is met sum >= s, start shrinking left to find the minimum length of subarray 
