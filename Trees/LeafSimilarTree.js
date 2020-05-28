/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  let leafs = [];

  const traverse = (node) => {
    if(!node) return null;

    if(!node.left && !node.right) {
      leafs.push(`${node.val},`);
    }

    traverse(node.left);
    traverse(node.right);
  }

  traverse(root1);
  let leafs1 = leafs.join('');
  leafs = [];
  traverse(root2);
  let leafs2 = leafs.join('');
  return leafs1 === leafs2;
};