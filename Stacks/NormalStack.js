class Stack {
  constructor() {
    this.array = []
  }

  peek() {
    console.log(this.array[this.array.length - 1])
    return this.array[this.array.length - 1]
  }

  push(value) {
    this.array.push(value)
  }

  pop() {
    this.array.pop()
  }
}

let stack = new Stack()
stack.push(5)
stack.push(2)

stack.peek()

stack.pop()

console.log(stack)