// O(n) time, O(1) space

function invertLinkedList(head) {
    // p1 = null
    let previous = null;
    // p2 = head
    let current = head;
    // while !p2
    while (!current) {
        // p3 = p2.next
        let nextNode = current.next;
        // p2.next = p1
        current.next = previous
        // p1 = p2
        previous = current
        // if (!p2) break
        if (!current) break 
        // p2 = p3
        current = nextNode
    }
    // return p2
    return previous
}