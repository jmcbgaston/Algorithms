function mergeInBetween(list1, list2, a, b) {
    let counter = 1
    let currNode = list1
    
    let attachFrom
    let attachThen
    
    while(currNode !== null) {
        let nextNode = currNode.next
        if (counter === a-1) {
            attachFrom = currNode
        }
        if (counter === b) {
            attachThen = nextNode
        }
        currNode = nextNode
        counter++
    }
    
    if (attachFrom) {
        attachFrom.next = list2
    }
    backOfL2(list2).next = attachThen
}

function backOfL2(list2) {
    let currNode = list2
    let buttNode
    while (currNode !== null) {
        let nextNode = currNode.next
        if (!nextNode) {
            buttNode = currNode
        }
        currNode = nextNode
    }
    return buttNode
}