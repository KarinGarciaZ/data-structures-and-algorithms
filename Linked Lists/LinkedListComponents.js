/*
We are given head, the head node of a linked list containing unique integer values.
We are also given the list G, a subset of the values in the linked list.
Return the number of connected components in G, where two values are connected if they appear consecutively in the linked list.
Example 1:
Input: 
head: 0->1->2->3
G = [0, 1, 3]
Output: 2
Explanation: 
0 and 1 are connected, so [0, 1] and [3] are the two connected components.
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
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
  G.sort((a, b) => a - b)
  let count = 0
  let index = 0
  let last = null

  while(head) {
    if(head.val === G[index]) {
      if( last === null ) 
        count++   
      index++
      last = head.val
    } else
      last = null

    head = head.next
  }

  return count
};

let h = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: null
      }
    }
  }
}

numComponents(h, [0,1,3])