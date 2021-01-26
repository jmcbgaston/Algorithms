// Sol 1 - recursive

// Avg
// time: O(log n)
// space: O(log n)

// Worst
// time: O(n)
// space: O(n)

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

// Sol 2 - itteratively

// Avg
// time: O(log n)
// space: O(1)

// Worst
// time: O(n)
// space: O(1)

function findClosestValueInBst(tree, target) {
    return bstHelper(tree, target, Infinity)
}
  
function bstHelper(tree, target, closest) {
    let currentNode = tree

    while (currentNode !== null) {
        // reassign closest to newest finding
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value
        }
        
        // traverse currentNode via conditionals
        if (target < currentNode.value) {
            currentNode = currentNode.left
        } else if (target > currentNode.value) {
            currentNode = currentNode.right
        } else {
            break
        }
    }
    
    return closest
    
} 
