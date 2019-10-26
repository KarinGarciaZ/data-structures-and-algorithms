/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.
Example 1:
nums1 = [1, 3]
nums2 = [2]
The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let totalLength = nums1.length + nums2.length  
  let counter1 = 0 
  let counter2 = 0
  let newArr = []

  while(true) {

    if( newArr.length === Math.floor(totalLength / 2 + 1) ) {
      if( totalLength % 2 )
        return newArr[newArr.length - 1]
      else {
        return (newArr[newArr.length - 1] + newArr[newArr.length - 2]) / 2
      }
    }

    if( undefined == nums1[counter1] || undefined == nums2[counter2] ) {
      if( undefined == nums1[counter1] ) {
        newArr.push(nums2[counter2])
        counter2++
      } else {
        newArr.push(nums1[counter1])
        counter1++
      }
    } else {
      if (nums1[counter1] <= nums2[counter2]) {
        newArr.push(nums1[counter1])
        counter1++
      } else {
        newArr.push(nums2[counter2])
        counter2++
      } 
    }  
  }
};

console.log(findMedianSortedArrays([1,2], [3,4]))