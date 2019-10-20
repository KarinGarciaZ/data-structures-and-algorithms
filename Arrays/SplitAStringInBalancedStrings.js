/*
Balanced strings are those who have equal quantity of 'L' and 'R' characters.
Given a balanced string s split it in the maximum amount of balanced strings.
Return the maximum amount of splitted balanced strings.
Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
*/

/**
 * @param {string} s
 * @return {number}
 */

//Stack Logic with counter
var balancedStringSplit = function(s) {
    let count = 1
    let balancedStringCounter = 0
    let firstLetter = s[0]

    for (let i = 1; i < s.length; i++) {
      if (s[i] === firstLetter)
        count++
      else
        count--

      if(!count)
        balancedStringCounter++
    }

    return balancedStringCounter
};

//Sum logic every time numbers are equal
var balancedStringSplit = (s, ans=0) => {
  for (let i=0, L=0, R=0; i < s.length; ++i) {
      L = s[i] == 'L' ? L + 1 : L;
      R = s[i] == 'R' ? R + 1 : R;
      if (L == R)
          ++ans;
  }
  return ans;
};

console.log(balancedStringSplit('RLRRLLRLRL'))