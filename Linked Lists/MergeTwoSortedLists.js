/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
Example:
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
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
var mergeTwoLists = function(l1, l2) {
  let currentL1 = l1
  let currentL2 = l2
  let head = new ListNode()
  
  let tail = head
  
  if(!currentL1 && !currentL2)
      return l1
  
  if(currentL1 && !currentL2) 
      return l1
  
  if(!currentL1 && currentL2) 
      return l2
  
  if(currentL1 && currentL2) {
     if(currentL1.val <= currentL2.val) {
          tail.val = currentL1.val
          currentL1 = currentL1.next
      } else {
          tail.val = currentL2.val
          currentL2 = currentL2.next
      }
  }
  
  
  while( currentL1 && currentL2 ) {        
      if(currentL1.val <= currentL2.val) {
          tail.next = new ListNode(currentL1.val)
          currentL1 = currentL1.next
      } else {
          tail.next = new ListNode(currentL2.val)
          currentL2 = currentL2.next
      }
      tail = tail.next
  }

  while(currentL2){
      tail.next = new ListNode(currentL2.val)
      currentL2 = currentL2.next
      tail = tail.next
  }
  
  while(currentL1){
      tail.next = new ListNode(currentL1.val)
      currentL1 = currentL1.next
      tail = tail.next
  }
  
  return head
};