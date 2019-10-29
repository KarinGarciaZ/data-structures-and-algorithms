/*
Given a linked list, swap every two adjacent nodes and return its head.
You may not modify the values in the list's nodes, only nodes itself may be changed.
Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 //25.44% and 47.37%
var swapPairs = function(head) {
  let pointer = head
  let next
  let last
  
  if(pointer && pointer.next) {
    next = pointer.next
    pointer.next = next.next
    next.next = pointer
    head = next
  } else 
    return head
  
  last = pointer
  pointer = pointer.next
  
  while(pointer && pointer.next) {
    next = pointer.next
    pointer.next = next.next
    next.next = pointer
    last.next = next
    last = pointer
    pointer = pointer.next
  }
  return head
};

 //Much better solution I made that gets 80.95% and 47.37%
 var swapPairs = function(head) {
  let traverse = node => {
    if(!node || !node.next) return node
    let next = node.next
    node.next = traverse(next.next)
    next.next = node
    return next
  }
  
  return traverse(head)
};