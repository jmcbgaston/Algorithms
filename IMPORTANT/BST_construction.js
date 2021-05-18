class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
		let node = this;
		while (node) {
			if (value < node.value) {
				if (!node.left) {
					node.left = new BST(value);
					break;
				} else {
					node = node.left;
				}
			} else {
				if (!node.right) {
					node.right = new BST(value);
					break
				} else {
					node = node.right;
				}
			}
		}
    return this;
  }

  contains(value) {
		let node = this;
		while (node) {
			if (value < node.value) {
				node = node.left;
			} else if (value > node.value) {
				node = node.right;
			} else {
				return true
			}
		}
		return false;
  }

  remove(value, parentNode = null) {
		let node = this;
		while (node) {
			if (value < node.value) { // reassign left
				parentNode = node;
				node = node.left;
			} else if (value > node.value) { // reassign right
				parentNode = node;
				node = node.right;
			} else { // in the case that we've found the target
				if (node.left && node.right) { // has two children?
					node.value = node.right.getMinValue(); // find smallest val in right tree
					node.right.remove(node.value, node);
				} else if (!parentNode) { // root node case
					if (node.left) {
						node.value = node.left.value;
						node.right = node.left.right;
						node.left = node.left.left;
					} else if (node.right) {
						node.value = node.right.value;
						node.left = node.right.left;
						node.right = node.right.right;
					} else {
						// single tree node
					}
				} else if (parentNode.left === node) {// only has 1 child on left
					parentNode.left = node.left ? node.left : node.right;
				} else if (parentNode.right === node) {// only has 1 child on right
					parentNode.right = node.right ? node.right : node.left;
				}
				break;
			}
		}
    return this;
  }
	
	getMinValue() {
		let node = this;
		while (node.left) {
			node = node.left;
		}
		return node.value;
	}
}