/*
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.
Example 1:
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//94.34% and 73.33%
var reverseString = function(s) {
  return s.reverse()
};


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

 //73.16% 62.22%
var reverseString = function(s) {
  let element
  for (let i = 0; i < s.length / 2; i++) {
    element = s[i];
    s[i] = s[s.length - 1 - i]
    s[s.length - 1 - i] = element
  }
  return s
};