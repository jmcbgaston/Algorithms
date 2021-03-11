function removeDuplicatesFromLinkedList(linkedList) {
	
	let currNode = linkedList
	
	while (currNode !== null) {
		    let nextDistinct = currNode.next
			
			while (nextDistinct !== null && nextDistinct.value === currNode.value) {
				nextDistinct = nextDistinct.next
			}
		
		currNode.next = nextDistinct
		currNode = nextDistinct
	}
	
	return linkedList
}