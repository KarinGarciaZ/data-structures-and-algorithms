/*
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Note: A leaf is a node with no children.
Example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//my solution 28.07% and 71.88%
var maxDepth = function(root) {
  if(!root) return 0

  let maxcont = 1
  const traverse = (node, cont) => {
    if( !node ) return null

    if(cont > maxcont)
      maxcont = cont

    traverse(node.left, cont+1)
    traverse(node.right, cont+1)
  }

  traverse(root, maxcont)

  return maxcont
};