/**
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
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

//60.51% and 90.28%
var addTwoNumbers = function(l1, l2) {
  let traverse = (list1, list2, carryover = 0) => {    
    if( !list1 && !list2 && !carryover ) return null
    if( !list1 && !list2 && carryover ) 
      return new ListNode(carryover)

    let val = 0

    if( !list1 ) 
      val = list2.val + carryover
    else if( !list2 ) 
      val = list1.val + carryover
    else
      val = list1.val + list2.val + carryover

    if( val > 9 ) {
      val = val % 10
      carryover = 1
    } else
      carryover = 0

    let node = new ListNode(val)

    list2 = list2? list2.next : null
    list1 = list1? list1.next : null
    
    node.next = traverse( list1, list2, carryover )
    return node
  }

  return traverse( l1, l2 )
};

//9.36% and 62.5%
var addTwoNumbers = function(l1, l2, carryover = 0) {
  if( !l1 && !l2 && !carryover ) return null
  if( !l1 && !l2 && carryover ) 
    return new ListNode(carryover)

  let val = 0

  if( !l1 ) 
    val = l2.val + carryover
  else if( !l2 ) 
    val = l1.val + carryover
  else
    val = l1.val + l2.val + carryover

  if( val > 9 ) {
    val = val % 10
    carryover = 1
  } else
    carryover = 0

  let node = new ListNode(val)

  l2 = l2? l2.next : null
  l1 = l1? l1.next : null
  
  node.next = addTwoNumbers( l1, l2, carryover )
  return node
};