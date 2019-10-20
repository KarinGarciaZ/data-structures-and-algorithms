class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    console.log(this.first)
    return this
  }

  enqueue(value) {
    let newNode = new Node(value)

    if( !this.length ) {
      this.first = newNode
      this.last = this.first
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this
  }

  dequeue() {
    if( this.length <= 1 ) {
      this.first = null
      this.last = null
      this.length = 0
    }
    else {
      this.first = this.first.next
      this.length--
    }
    return this
  }
}

let myQueue = new Queue()
myQueue.enqueue(5)
myQueue.enqueue(8)

myQueue.peek()
myQueue.dequeue()
myQueue.dequeue()
myQueue.peek()