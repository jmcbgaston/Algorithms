// avg: O(n) time | O(n) space

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    
    // set up a sums array
    let sums = []
    // use a helper to calc sums
    calcSums(root, 0, sums)
        // helper can push sum into sums array
    // return an array of sums
    return sums
    
}

function calcSums(node, runSum, sums) {
    
    // if node is null, return
    if (!node) return
    // set up a variable that augments the sum with runSUm + node.val
    let newRunSum = node.value + runSum
    // if no more children, push the new run sum into sums and return out of recurse
    if (!node.left && !node.right) {
        sums.push(newRunSum)
        return
    }
    
    // recurse left and right
    calcSums(node.left, newRunSum, sums)
    calcSums(node.right, newRunSum, sums)
}