function findClosestValueInBst(tree, target) {
    return bstHelper(tree, target, Infinity)
}
  
function bstHelper(tree, target, closest) {
    // return if null tree
    if (tree === null) {
        return closest
    }
    
    // reassign closest to newest finding
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value
    }
    
    // traverse tree via conditionals
    if (target < tree.value) {
        return bstHelper(tree.left, target, closest)
    } else if (target > tree.value) {
        return bstHelper(tree.right, target, closest)
    } else {
        return closest
    }
    
}  