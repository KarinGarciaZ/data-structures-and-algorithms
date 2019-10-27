/*
Given a sorted linked list, delete all duplicates such that each element appear only once.
Example 1:
Input: 1->1->2
Output: 1->2
Example 2:
Input: 1->1->2->3->3
Output: 1->2->3
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

//first solution 80.05% and 6.25%
var deleteDuplicates = function(head) {
  if( !head ) return head
  let uniqueValues = {}
  let lastUnique = head
  let pointer = head.next
  uniqueValues[head.val] = true

  while( pointer ) {
    if( uniqueValues[pointer.val] === undefined ) {
      lastUnique.next = pointer
      lastUnique = lastUnique.next
      uniqueValues[pointer.val] = true
    }
    pointer = pointer.next
  }

  lastUnique.next = null
  return head
};

//second solution and improved 92.88% and 21.88%
var deleteDuplicates = function(head) {
  if( !head ) return head
  let lastUnique = head
  let pointer = head.next

  while( pointer ) {
    if( lastUnique.val !== pointer.val ) {
      lastUnique.next = pointer
      lastUnique = lastUnique.next
    }
    pointer = pointer.next
  }

  lastUnique.next = null
  return head
};