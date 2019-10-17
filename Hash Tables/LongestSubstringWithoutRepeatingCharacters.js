/*
Given a string, find the length of the longest substring without repeating characters.
Example 1:
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) return 1

  let letters = {}
  let maxLength = 0
  let length = 0

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if( letters[element] === undefined ) {
      letters[element] = i
      length++
      if( maxLength < length )
        maxLength = length
    }
    else {    
      let removeFromThere = letters[element]
      length = 0
      for( let key in letters ) {
        if ( letters[key] <= removeFromThere )
          delete letters[key]
        else
          length++
      }
      letters[element] = i
      length++
    }      
  }

  return maxLength
};

console.log(lengthOfLongestSubstring("abcdbeffgahijka"))

var lengthOfLongestSubstring3 = function(s) {
  let letters = {}
  let start = 0
  let max = 0

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if( letters[element] === undefined || start > letters[element]) {
      letters[element] = i
    }
    else {
      start = letters[element] + 1
      letters[element] = i
    }

    max = ( max > i - start + 1 )? max : i - start + 1
  }

  return max
};

var lengthOfLongestSubstring2 = function(s) {
  let letters = {}, start = 0, max = 0

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if( letters[element] !== undefined && start <= letters[element] )    
      start = letters[element] + 1    
    
    letters[element] = i
    max = ( max > i - start + 1 )? max : i - start + 1
  }

  return max
};

console.log(lengthOfLongestSubstring2("bbbbb"))