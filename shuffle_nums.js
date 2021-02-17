var shuffle = function(nums, n) {
    
    let left = nums.slice(0, n) // 251
    let right = nums.slice(n, nums.length) // 347
    let answer = []
    
    for (let i = 0; i < left.length; i++) {
        
        let lEle = left[i]
        let rEle = right[i]
        
        answer.push(lEle)
        answer.push(rEle)
    }
    
    return answer    
};

let nums = [2,1,3,4,5,6] 
let n = nums.length / 2
// output = [241536]

console.log(shuffle(nums, n))