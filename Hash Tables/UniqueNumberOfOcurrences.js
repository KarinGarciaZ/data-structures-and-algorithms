/*
Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */

//My HashMap implementation
var uniqueOccurrences = function(arr) {
    let map = {}
    let mapUniqueValues = {}

    for (let i = 0; i < arr.length; i++) {
      if( map[arr[i]] === undefined )
        map[arr[i]] = 1
      else 
        map[arr[i]]++
    }

    for( let key in map ) {
      if( mapUniqueValues[map[key]] === undefined )
        mapUniqueValues[map[key]] = map[key]
      else 
        return false
    }

    return true
};


//some chinese implementation :'v
var uniqueOccurrences = function(arr) {
  const freq = {};
  for (const val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }
  return Object.keys(freq).length === new Set(Object.values(freq)).size;
};


console.log(uniqueOccurrences([3,5,-2,-3,-6,-6]))