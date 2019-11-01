let fibonacciIterative = n => {
  if(!n) return 0
  let last = 0
  let prev = 1
  let temp

  for (let i = 0; i < n-1; i++) {
    temp = last
    last = prev
    prev += temp
  }

  return prev
}


let fibonacciRecurtion = n => {
  if( n < 2 ) return n
  return fibonacciRecurtion(n-1) + fibonacciRecurtion(n-2)
}

console.log(fibonacciIterative(0))