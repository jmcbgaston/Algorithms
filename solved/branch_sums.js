// time o(n)
    // traverse the whole tree

// space o(n)
    // worst case o(n) because of tree shape
    // on a balanced tree we'd see o(log n) because we only need to keep track of a portion of the tree

function branchSums(root) {
    // reframe the problem
    let sums = [];
    calcBranchSums(root, 0, sums);

    // return array of sums
    return sums;
}

function calcBranchSums(node, runningSum, sums) {
    // if node.value === null, return
    if (!node) return;

    // keep track of the running sum by adding passed in argument as well as the current node's value
    let newRunningSum = runningSum + node.value

    // check to see if the node is a leaf node | if yes then push running sum into sums array
    if (!node.left && !node.right) {
        sums.push(newRunningSum);
			return;
    }

    // recursive call will handle tracking and itteration till the end
    calcBranchSums(node.left, newRunningSum, sums);
    calcBranchSums(node.right, newRunningSum, sums);
}
