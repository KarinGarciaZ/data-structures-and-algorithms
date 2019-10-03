/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice. 

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

//O(n)
const twoSum = (nums, target) => {
  let values = []

  for (let i = 0; i < nums.length; i++) {

    const element = nums[i];
    let difference = target - element
    
    if ( values[difference] !== undefined )
      return [values[difference][0], i]

    if ( values[element] === undefined ) {
      values[element] = []
      values[element].push(i)
    }

  }
};

console.log(twoSum([3, 4, 3, 2, 15], 6))