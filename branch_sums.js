// time o(n)
// space o(log n)

function branchSums(root) {
    let sums = [];
    calcBranchSums(root, 0, sums);
    return sums;
}

function calcBranchSums(node, runningSum, sums) {
    if (!node) return;

    let newRunningSum = runningSum + node.value

    if (!node.left && !node.right) {
        sums.push(newRunningSum);
			return;
    }

    calcBranchSums(node.left, newRunningSum, sums);
    calcBranchSums(node.right, newRunningSum, sums);
}
