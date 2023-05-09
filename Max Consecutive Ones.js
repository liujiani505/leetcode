/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxConsecutiveOnes = function(nums) {
//           let count = 0;
//           const n = nums.length;
 
//     let result = 0;
 
//     for (let i = 0; i < n; i++) {
//         if (nums[i] == 0)
//             count = 0;
 
//         else {
//             count++;
            // Math.max() is a built in function that returns the maximum value among a set of numbers.
//             result = Math.max(result, count);
//         }
//     }
 
//     return result;
// }    

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    const n = nums.length;

let result = 0;

for (let i = 0; i < n; i++) {
  if (nums[i] == 0)
      count = 0;

  else {
      count++;
      if(count > result){
          result = count
      }
  }
}

return result;
}   