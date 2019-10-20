/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let even = A.filter(a => a % 2 === 0);
  let odd = A.filter(a => a % 2 === 1);
  return even.concat(odd);
};


/**
* @param {number[]} A
* @return {number[]}
*/
var sortArrayByParity = function(A) {
  let newArray = []
  for( let i = 0; i < A.length; i++ ) {
      if(A[i] % 2)
          newArray.push(A[i])
      else
          newArray = [A[i], ...newArray]
  }
  return newArray
};


/**
* @param {number[]} A
* @return {number[]}
*/
var sortArrayByParity = function(A) {
  let newArray = new Array(A.length)
  let left = 0
  let right = A.length - 1
  
  for( let i = 0; i < A.length; i++ ) {
      if(A[i] % 2) {            
          newArray[right] = A[i]
          right--
      }
      else {
          newArray[left] = A[i]
          left++
      }
  }
  return newArray
};