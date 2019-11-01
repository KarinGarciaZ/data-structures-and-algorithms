/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 //result 64.06% and 51.06%
var moveZeroes = function(nums) {
  let left = 0

for (let i = 0; i < nums.length; i++)
  if( nums[i] ) {
    nums[left] = nums[i]
    left++
  }

for (let i = nums.length; i > left; i--) 
  nums[i-1] = 0
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var moveZeroes = function(nums) {
  for (let i = 0, left = 0; left < nums.length; i++)
    if( i >= nums.length  ) {
      nums[left] = 0
      left++
    }
    else if( nums[i] ) {
      nums[left] = nums[i]
      left++
    }
};

moveZeroes([0,1,0,3,12])