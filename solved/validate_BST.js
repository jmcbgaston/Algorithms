class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// time: O(n)
// space: O(d) d being depth of tree -> length of the longest branch
function validateBst(tree) {
  return validateHelper(tree, -Infinity, Infinity)
}

function validateHelper(tree, min, max) {
  // base case, if null tree, it's valid
  if (tree === null) return true;

  // if it does not satisfy the bst logic, return false
  if (tree.value < min || tree.value >= max) return false;

  // call on left and right
  const validLeft = validateHelper(tree.left, min, tree.value);
  const validRight = validateHelper(tree.right, tree.value, max);
  return validLeft && validRight;
}