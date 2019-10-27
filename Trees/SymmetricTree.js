/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3

But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
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
 * @return {boolean}
 */

 //50.18% and 100%
var isSymmetric = function(root) { 
  if(!root) return true
  let result = true

  let traverse = ( node1, node2 ) => {
    if( !node1 && !node2 ) return null
    if( !node1 || !node2 || node1.val !== node2.val ) {
      result = false
      return null
    }

    traverse( node1.left, node2.right )
    traverse( node1.right, node2.left )
  }  

  traverse(root.left, root.right)

  return result
};