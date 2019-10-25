/*
A self-dividing number is a number that is divisible by every digit it contains.
For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
Also, a self-dividing number is not allowed to contain the digit zero.
Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

//My solution is 89.19% and 76.92%
var selfDividingNumbers = function(left, right) {
  let result = []

  for (let i = left; i <= right; i++) {
    let isSelfDividing = true
    let currentNumber = i
    currentNumber = String(currentNumber)

    for (let j = 0; j < currentNumber.length; j++) {
      if( !(i % currentNumber[j] === 0) ) {
        isSelfDividing = false
        j = currentNumber.length
      }
    }

    if( isSelfDividing ) 
      result.push(i)      
  }

  return result
}

console.log(selfDividingNumbers(1, 10000))