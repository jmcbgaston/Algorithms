// itterative

// time o(n) 
// space o(h)

function nodeDepths(root) {
    let sumOfDepths = 0;
    let stack = [{node: root, depth: 0}];

    while (stack.length > 0) {
        let {node, depth} = stack.pop();
        if (!node) continue;
        sumOfDepths += depth;
        stack.push({node: node.left, depth: depth + 1});
        stack.push({node: node.right, depth: depth + 1});
    }

    return sumOfDepths;
}

// recursive

// time o(n)
// space o(h)

function nodeDepths(root, depth = 0) {
    if (!root) return 0;
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}