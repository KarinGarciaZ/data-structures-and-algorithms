/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let valuesStack = []
  let total = 0
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case "+":
        let sum = valuesStack[valuesStack.length - 1] + valuesStack[valuesStack.length - 2]
        valuesStack.push(sum)
        total += sum
        break
      case "D":
        let double = valuesStack[valuesStack.length - 1] + valuesStack[valuesStack.length - 1]
        valuesStack.push(double)
        total += double
        break
      case "C":
        total -= valuesStack.pop()
        break   
      default:
        valuesStack.push(+ops[i])
        total += +ops[i]
      break
    }
  }

  return total
}

console.log(calPoints(["5","-2","4","C","D","9","+","+"]))