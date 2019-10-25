/*
Write a program to check whether a given number is an ugly number.
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
Example 1:
Input: 6
Output: true
Explanation: 6 = 2 × 3
Example 2:
Input: 8
Output: true
Explanation: 8 = 2 × 2 × 2
Example 3:
Input: 14
Output: false 
Explanation: 14 is not ugly since it includes another prime factor 7.
Note:
1 is typically treated as an ugly number.
Input is within the 32-bit signed integer range: [−231,  231 − 1].
*/

/**
 * @param {number} num
 * @return {boolean}
 */

 //My solution 24.60% and 66.67%
var isUgly = function(num) {
  if(num === 1 )
      return true    

  while(true) {
    let initialNum = num

    if( num % 5 === 0 )
      num /= 5
    if( num % 3 === 0 )
      num /= 3
    if( num % 2 === 0 )
      num /= 2

    if( initialNum === num )
      return false

    if( num === 5 || num === 3 || num === 2 || num === 1 )
      return true    
  }
};

//A chinese solution xv 24.60% and 33.33%
var isUgly = function(num) {
  if(num<=0) return false; 
  while(parseInt(num/2)===num/2) { num/=2; }  // using the fact that 
  while(parseInt(num/3)===num/3) { num/=3; }  // multiplication is commutative, 
  while(parseInt(num/5)===num/5) { num/=5; }  // hence the order doesn't matter
  return num===1;
};