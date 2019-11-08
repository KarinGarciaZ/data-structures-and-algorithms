/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
Example:
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists.length) return null

    let pointers = lists
    let values = []
    let validValues = []
    let index
    let min

    for (let i = 0; i < pointers.length; i++) {
        if( pointers[i] && typeof(pointers[i].val) === 'number' ) {
            values.push(pointers[i].val)
            validValues.push(pointers[i].val)
        }
        else 
            values.push(null)
    }
    if(!validValues.length)
        return null
    min = Math.min( ...validValues )
    index = values.indexOf(min)
    pointers[index] = pointers[index].next
    values = []
    validValues = []

    let head = new ListNode(min)
    let pointer = head

    while( true ) {
        for (let i = 0; i < pointers.length; i++) {
            if( pointers[i] && typeof(pointers[i].val) === 'number' ) {
                values.push(pointers[i].val)
                validValues.push(pointers[i].val)
            }
            else 
                values.push(null)
        }
        if(!validValues.length)
            return head

        min = Math.min( ...validValues )

        index = values.indexOf(min)
        pointers[index] = pointers[index].next
        values = []
        validValues = []

        pointer.next = new ListNode(min)
        pointer = pointer.next
    }    
};