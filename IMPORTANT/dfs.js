class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
        // push in the root node
        // array = []
        array.push(this.name)
        // array[A]

        // itterate over node collection
        for (const child in this.children) {
            // A.children = B,C,D

            // B.dfs([A])
            child.depthFirstSearch(array)

            // array = [A,B]
            // B.children = E,F

            // E.dfs([A,B])
            // E.children = [] therefore return array

            // back to B.children
            // F.children = I,J
            // ...

        }
        return array
  }
}

// graph = 
//          A
//       /  |  \
//      B   C   D
//     / \     / \
//    E   F   G   H
//       / \   \
//      I   J   K