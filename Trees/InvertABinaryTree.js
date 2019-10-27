/*
Invert a binary tree.
Example:
Input:
     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1
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
 * @return {TreeNode}
 */

 //My solution 1, 8.34% 60%
var invertTree = function(root) {

  const traverse = node => {
    if(!node) return null

    let tempNode = node.right
    node.right = node.left
    node.left = tempNode

    traverse(node.left)
    traverse(node.right)
  }

  traverse(root)

  return root
};


//Solution 2, 24.93% 100%
var invertTree = function(root) {

  if(!root) return null
  let tempNode = root.right
  root.right = invertTree(root.left)
  root.left = invertTree(tempNode)

  return root
};