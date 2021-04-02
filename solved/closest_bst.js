// Itterative approach
// avg: O(log(n)) time | O(1) space 
// worst: O(n) time | O(1) space

function findClosestValueInBst(tree, target, closest = Infinity) {
    if (tree === null) return treet
    let currNode = tree

    while (currNode !== null) {
        if (Math.abs(target - closest) > Math.abs(target - currNode.value)) {
            closest = currNode.value
        }
        
        if (target > currNode.value) {
            currNode = currNode.right
        } else if (target < currNode.value) {
            currNode = currNode.left
        } else {
            break
        }
    }

    return closest
}

// Recursive
// avg: O(log(n)) time | O(log(n)) space 
// worst: O(n) time | O(n) space

function findClosestValueInBst(tree, target, closest = Infinity) {
	if (tree === null) return closest
	
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value
	}
	
	if (target < tree.value) {
		return findClosestValueInBst(tree.left, target, closest)
	} else if (target > tree.value) {
		return findClosestValueInBst(tree.right, target, closest)
	} else {
		return closest
	}
}