/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // this is for the case that if k is greater than the length of the nums array, then k should be the remainder, for example (7%5 =2). If k is smaller than the length of the nums array, 3%7=0, so the remainder is 3, k should be 3.
    k %= nums.length;
    let reverse = function(i, j){
        while(i < j){
            let temp = nums[i];
            nums[i] = nums [j];
            nums[j] = temp;
            i++;
            j--;
        }       
    }
    // first step: reverse the whole array. [7, 6, 5, 4, 3, 2, 1]
    reverse(0, nums.length-1) 
    // second step: reverse the part before index k. [5, 6, 7, 4, 3, 2, 1]
    reverse(0, k-1)
    // thrid step: reverse the part starting with index k
    reverse(k, nums.length-1)
};