class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  // time: O(n^2) where n is the length of the string becase we're reitterating for each string
  // space: O(n^2) average case but something like "tttt" would be O(n)
  populateSuffixTrieFrom(string) {
    // itterate through the string and for each letter,
    // we will call a helper to create our nodes and attach them to the root node
    for (let i = 0; i < string.length; i++) {
      this.insertStartingAt(i, string)
    }
    // check whether or not curr letter is stored in tree
    // if we find a new char, we make the char a key and have it point to an empty hash 
    
    // {}: {b: {}}
    // when itterating we also move our pointer forward
    // in the case of babc, we now point at b as our curr node
    // meaning that on the next itteration, we make 
    // {}: {b: {a: {}}}
    // then 
    // {}: {b: {a: {b: {}}}}
    // then
    // {}: {b: {a: {b: {c: {"*"}}}}}

    // once complete, we go back to the root node and we move to the next char,
    // abc
    // {}: {a: {b: {c: {"*"}}}}
    // if we find a char that already exists, we just need to add to our object
    // {}: {b: {a: {b: {c: {"*"}}}, c: {"*"}}}
  }

  insertStartingAt(i, string) {
    let node = this.root; // your starter node
    for (let j = i; j < string.length; j++) { // start j at i index of string
      let letter = string[j]; // points to our current letter
      if (!node[letter]) node[letter] = {}; // if it doesn't exist, make a new k,v pair
      node = node[letter]; // move our node forward
      // so that we come up with something like
      // {}: {b: {a: {b: {c: {}}}}, "*": true}
    }
    node[this.endSymbol] = true;
  }

  // time: O(m) where m is the size of the string
  // space: O(1) because we're not using extra space
  contains(string) { // ie: babc
    // does the node have the child b? yes
    // does b have the child a? yes
    // does a have the child b? yes
    // does b have the child c? yes
    // does c have a child *? yes
    // return boolean
    // return false;
    let node = this.root;
    for (const letter of string) { // start j at i index of string
      if (!node[letter]) return false;
      node = node[letter]; // traverse
    }
    // node[this.endSymbol] would return null not false in some cases
    return this.endSymbol in node;
    // ^ checking this way will check whether something like test.contains(tes) as a suffix = false because tes is a prefix
  }
}

let string = "babc";

//         {}
//      /  |   \
//     b   a   c
//   / |   |   |
// c   a   b   *
// |   |   |
// *   b   c
//     |   |
//     c   *
//     |
//     *