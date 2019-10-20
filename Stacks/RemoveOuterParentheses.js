/**
 * 
Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
 * 
 * 
 * 
 * 
 * 
 * @param {string} S
 * @return {string}
 */

 //This solution is using only push
var removeOuterParentheses = function(S) {
    let cont = 0
    let stack = []

    for (let i = 0; i < S.length; i++) {
      if(S[i] === '(') {
        cont++
        if( cont > 1 )
          stack.push(S[i])
      }
      else {
        cont-- 
        if( cont > 0 )
          stack.push(S[i])
      }     
    }

    return stack.join('')
}

console.log(removeOuterParentheses("(()())(())"))

//This solution is using pop and push
var removeOuterParentheses2 = function(S) {
  let stack = []
  let result = ''

  for (let i = 0; i < S.length; i++) {
    if(S[i] === '(') {
      stack.push('(')      
    }

    if(stack.length > 1)
      result += S[i]

    if (S[i] === ')'){      
        stack.pop()
    }     
  }

  return result
}

console.log(removeOuterParentheses2("(()())(())(()(()))"))