/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

 //O(n^2) 21.19% and 6.25%
var hasCycle = function(head) {
    let map = {};

    while(head) {
      if(map[head.val]) {
        for (let i = 0; i < map[head.val].length; i++) {
          if (head === map[head.val][i]) {
            return true;
          }
        }
        map[head.val].push(head);
      } else {
        map[head.val] = [head];
      }
      head = head.next;
    }

    return false;
};

 //O(n) 26.73% and 6.25%
 var hasCycle = function(head) {
  while(head) {
    if( head.visited )
      return true;

    head.visited = true;

    head = head.next;
  }

  return false;
};
