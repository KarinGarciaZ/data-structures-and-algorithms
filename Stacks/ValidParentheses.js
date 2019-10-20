/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function(s) {
  var stack = []

  for (let i = 0; i < s.length; i++) {
    if( s[i] === '{' || s[i] === '[' || s[i] === '(' )
      stack.push(s[i])
    else {
      if ( s[i] === '}' ) {
        if ( stack[stack.length - 1] === '{' )
          stack.pop()
        else return false
      }
      if ( s[i] === ')' ) {
        if ( stack[stack.length - 1] === '(' )
          stack.pop()
        else return false
      }
      if ( s[i] === ']' ) {
        if ( stack[stack.length - 1] === '[' )
          stack.pop()
        else return false
      }
    }
  }
  if ( stack.length )
    return false

  return true
};



var isValid2 = function(s) {
    let stack = []

    let map = {
      '}': '{',
      ')': '(',
      ']': '[',
    }

    for (let i = 0; i < s.length; i++) {
      if( s[i] === '{' || s[i] === '[' || s[i] === '(' )
        stack.push(s[i])
      else {
        if ( stack[stack.length - 1] === map[s[i]] )
          stack.pop()
        else return false
      }
    }
    if ( stack.length )
      return false

    return true
};

console.log(isValid2('()[]{}}'))