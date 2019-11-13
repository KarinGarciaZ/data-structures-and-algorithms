/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:
Input: "cbbd"
Output: "bb"
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let largestPalindrome = ''
    let stringToEvaluate = ''
    let reversedString = ''

    for (let i = 0; i < s.length; i++) {
        if( largestPalindrome.length >= s.length - i )
            return largestPalindrome
        for (let j = i; j < s.length; j++) {
            stringToEvaluate = s.substring(i, j+1)
            reversedString = stringToEvaluate.split('').reverse().join('')
            if(stringToEvaluate === reversedString && stringToEvaluate.length > largestPalindrome.length)
                largestPalindrome = stringToEvaluate
        }
    }

    return largestPalindrome
};


var longestPalindrome2 = function(s) {
    let largestPalindrome = ''
    let stringToEvaluate = ''
    let reversedString = ''

    for (let i = 0; i < s.length; i++) {
        if( largestPalindrome.length >= s.length - i )
            return largestPalindrome
        
        stringToEvaluate = s.substring(i, s.length)
        while (stringToEvaluate.length) {
            reversedString = stringToEvaluate.split('').reverse().join('')
            if(stringToEvaluate === reversedString && stringToEvaluate.length > largestPalindrome.length) {
                largestPalindrome = stringToEvaluate
                break
            } else if(stringToEvaluate === reversedString)
                break
            stringToEvaluate = stringToEvaluate.split('')
            stringToEvaluate.pop()
            stringToEvaluate = stringToEvaluate.join('')
        }
    }

    return largestPalindrome
};

console.log(longestPalindrome2("bbbaa"))


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var max = '';
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < 2; j++) {
          var left = i;
          var right = i + j;
          while (s[left] && s[left] === s[right]) {
            left--;
            right++;
          }
          if ((right - left - 1) > max.length) {
            max = s.substring(left + 1, right);
          }
        }
    }
    return max;
};