/*
We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.
Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.
(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)
Example 1:
Input: [1,null,0,0,1]
Output: [1,null,0,null,1] 
Explanation: 
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.
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

//Super fast solution in 7 min that gets around 98.17% and 100%
var pruneTree = function(root) {
  let traverse = (node) => {
    if ( !node ) return null

    node.left = traverse(node.left)
    node.right = traverse(node.right)
    if( !node.left && !node.right && !node.val )
      return null
    return node
  }

  return traverse(root)
};

//second approach 78.53% and 50%
var pruneTree = function(root) {
  if ( !root ) return null

  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)
  if( !root.left && !root.right && !root.val )
    return null
  return root
};