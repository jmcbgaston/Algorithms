class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
// keep an array of sums
    const sums = [];
    // call helper with base and sums arr
    calcSums(root, 0, sums);
    // return arr of sums
    return sums;
}

function calcSums(node, runSum, sums) {
    // in case of a null tree
    if (!node) return;
    
    // update new sum with currSum and currValue
    const newRunSum = runSum + node.value;
    
    // if we're at a leaf node then push new sum into sums arr
    if (!node.left && !node.right) {
        sums.push(newRunSum);
        return
    }
    
    // call onto left and right branches
    calcSums(node.left, newRunSum, sums);
    calcSums(node.right, newRunSum, sums);
}