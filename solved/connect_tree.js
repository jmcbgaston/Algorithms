// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/submissions/
var connect = function(root) {
    if (root === null) return root
    let queue = [root]
    while (queue.length > 0) {
        let n = queue.length
        for (let i = 0; i < n; i++) {
            let node = queue.shift();
            node.next = i === n-1 ? null : queue[0]
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return root
};