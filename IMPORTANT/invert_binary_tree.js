function invertBinaryTree(tree) {
    if (!tree) return tree
    let left = tree.left
    let right = tree.right
    tree.left = right
    tree.right = left
    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right)
}

