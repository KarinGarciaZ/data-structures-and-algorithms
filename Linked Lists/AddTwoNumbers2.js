/*
You are given two non-empty linked lists representing two non-negative integers. 
The most significant digit comes first and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.
Example:
Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 //Superhard 65.11% and 66.67%
var addTwoNumbers = function(l1, l2) {
  let getLength = list => {
    let count = 0
    while(list) {
      count++
      list = list.next
    }
    return count
  }

  let list1Length = getLength(l1)
  let list2Length = getLength(l2)

  let traverse = (list1, list2) => {
    if(!list1 && !list2)
      return null

    let nextNode
    let val
    if(list1Length === list2Length) {
      nextNode = traverse(list1.next, list2.next)
      val = list1.val + list2.val
    }
    else if(list1Length > list2Length) {      
      list1Length--
      nextNode = traverse(list1.next, list2)
      val = list1.val
    }
    else if(list1Length < list2Length) {      
      list2Length--
      nextNode = traverse(list1, list2.next)
      val = list2.val
    }

    if( nextNode && nextNode.val > 9 ) {
      nextNode.val = nextNode.val % 10
      val += 1
    }

    let tempNode = new ListNode(val)
    tempNode.next = nextNode    
    return tempNode
  }

  let head = traverse(l1, l2)
  if( head && head.val > 9 ) {
    head.val = head.val % 10
    let temp = new ListNode(1)
    temp.next = head
    head = temp
  }

  return head
};