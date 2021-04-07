// 146. LRU Cache
// Medium
// 8039
// 329
// Add to List
// Share
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// NEWEST ON RIGHT
// OLDEST ON LEFT
// LRUC  = 2 = [ [x,x] [x,x] ]
// NULL
// PUT = [1,1] 
// LRUC = [ [x,x] [1,1] ]
// NULL
// PUT =[2,2]
// LRUC = [ [1,1] [2,2] ]
// NULL
// GET = 1
// LRUC = [ [1,1] [2,2] ]
// [1,1]
// 1 is the key of that pair
// Return 1
// LRUC = [ [2,2] [1,1] ]
// PUT = [3,3]
// NULL
// LRUC = [ [1,1] [3,3] ]
// GET = 2
// [1,1] [3,3]
// 1, 3 is the key 
// !== 2 
// Return -1
// PUT = [4,4]
// LRUC = [ [3,3] [4,4] ]
// NULL
// GET = 1
// LRUC = [ [3,3] [4,4] ]
// Return -1
// GET = 3
// LRUC = [ [3,3] [4,4] ]

// Return 3 because it is a key in LRU
// LRUC = [ [4,4] [3,3] ]
// GET = 4
// LRUC = [ [4,4] [3,3] ]
// Return 4 because it is a key in LRU
// LRUC = [ [3,3] [4,4] ]

var LRUCache = function(capacity) { // 2
    // given capacity create an array with equal amount of subarray that have two empty values

	Let arr =  new Array(capacity)
	This.arr = arr.fill([null, null])

};

LRUCache.prototype.get = function(key) {
    
	// This.arr = [ [k,v] ]

Let entries = Object.entries(this.arr)
Let output = -1
entries.forEach((pair, idx) => {
If (pair[0] === key) {
	Output = pair[1]

	Let newPos = this.arr.slice(0, idx) + this.arr.slice(idx+1, this.arr.length) + pair
		This.arr = newPos

// [11] [22]
// if i look for 1
// then [22] [11]

}
})


Return output
};

LRUCache.prototype.put = function(key, value) {

	
	Let pair = [key, value]
Let temp = this.arr.unshift()
This.arr = temp.push(pair)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



// Explanation
// Let cache = new LRUCache(2);
// cache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
// Constraints:
// 1 <= capacity <= 3000
// 0 <= key <= 3000
// 0 <= value <= 104
// At most 3 * 104 calls will be made to get and put.
// var LRUCache = function(capacity) {
//     this.cache = new Map()
//     this.capacity = capacity
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     if(!this.cache.has(key)) return -1
    
//     const value = this.cache.get(key)
//     this.cache.delete(key)
//     this.cache.set(key, value)
    
//     return this.cache.get(key)  
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//     if(this.cache.has(key)){
//         this.cache.delete(key)
//     }
    
//     this.cache.set(key, value)
//     if(this.cache.size > this.capacity){
//         this.cache.delete(this.cache.keys().next().value)
//     }
    
    
// };
