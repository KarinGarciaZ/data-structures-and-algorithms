class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    console.log(this.top)
  }

  push(value) {
    let node = new Node(value)
    node.next = this.top
    this.top = node
    this.length++
    
    if(!this.bottom)
      this.bottom = this.top
  }

  pop() {
    this.top = this.top.next
    this.length--

    if(!this.length)
      this.bottom = null
  }
}

let stack = new Stack()
stack.push(5)
stack.push(2)

stack.peek()

stack.pop()
stack.pop()

console.log(stack)